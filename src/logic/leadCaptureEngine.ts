import {
  LeadUserInput,
  LeadSubmissionPayload,
  LeadValidationResult,
  WhatsAppDispatchPayload
} from '../types/lead';

export class LeadCaptureEngine {
  private static whatsappBusinessNumber = '27824508899'; // Official ZA WhatsApp line

  /**
   * Validates mandatory customer input fields before submitting a quote or opening WhatsApp.
   */
  public static validateUserInput(input: Partial<LeadUserInput>): LeadValidationResult {
    const errors: Record<string, string> = {};

    if (!input.fullName || input.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name.';
    }

    const cleanPhone = (input.phoneNumber || '').replace(/[\s\-\(\)]/g, '');
    const zaPhoneRegex = /^(?:\+27|0)[6-8][0-9]{8}$/;
    if (!cleanPhone || !zaPhoneRegex.test(cleanPhone)) {
      errors.phoneNumber = 'Please enter a valid South African mobile number (e.g. 082 123 4567).';
    }

    if (!input.suburbOrArea || input.suburbOrArea.trim().length < 2) {
      errors.suburbOrArea = 'Please enter your suburb or area in Gauteng.';
    }

    if (input.emailAddress && input.emailAddress.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.emailAddress.trim())) {
        errors.emailAddress = 'Please enter a valid email address.';
      }
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }

  /**
   * Generates a unique lead tracking ID.
   */
  public static generateLeadId(): string {
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `LEAD-${dateStr}-${randomHex}`;
  }

  /**
   * Processes a formal online quotation request.
   * Gathers and validates customer details before registering the lead.
   */
  public static processQuotationSubmission(
    input: LeadUserInput,
    pageContext: {
      pageUrl: string;
      serviceSlug: string;
      locationSlug: string;
      suburbSlug?: string;
    }
  ): { success: boolean; leadPayload?: LeadSubmissionPayload; validationErrors?: Record<string, string> } {
    const validation = this.validateUserInput(input);
    if (!validation.isValid) {
      return { success: false, validationErrors: validation.errors };
    }

    const leadPayload: LeadSubmissionPayload = {
      leadId: this.generateLeadId(),
      sourceAction: 'QUOTATION_BUTTON',
      pageUrl: pageContext.pageUrl,
      serviceSlug: pageContext.serviceSlug,
      locationSlug: pageContext.locationSlug,
      suburbSlug: pageContext.suburbSlug,
      timestamp: new Date().toISOString(),
      customer: {
        ...input,
        fullName: input.fullName.trim(),
        phoneNumber: input.phoneNumber.trim(),
        suburbOrArea: input.suburbOrArea.trim(),
        cityOrTown: input.cityOrTown.trim(),
        preferredContactMethod: input.preferredContactMethod || 'phone'
      }
    };

    return {
      success: true,
      leadPayload
    };
  }

  /**
   * Processes WhatsApp button click.
   * Requires user details FIRST, logs the lead, then returns pre-filled WhatsApp link.
   */
  public static processWhatsAppSubmission(
    input: LeadUserInput,
    pageContext: {
      pageUrl: string;
      serviceName: string;
      serviceSlug: string;
      locationSlug: string;
      cityName: string;
      suburbSlug?: string;
    }
  ): {
    success: boolean;
    dispatchPayload?: WhatsAppDispatchPayload;
    leadPayload?: LeadSubmissionPayload;
    validationErrors?: Record<string, string>;
  } {
    const validation = this.validateUserInput(input);
    if (!validation.isValid) {
      return { success: false, validationErrors: validation.errors };
    }

    const leadId = this.generateLeadId();
    const leadPayload: LeadSubmissionPayload = {
      leadId,
      sourceAction: 'WHATSAPP_BUTTON',
      pageUrl: pageContext.pageUrl,
      serviceSlug: pageContext.serviceSlug,
      locationSlug: pageContext.locationSlug,
      suburbSlug: pageContext.suburbSlug,
      timestamp: new Date().toISOString(),
      customer: {
        ...input,
        fullName: input.fullName.trim(),
        phoneNumber: input.phoneNumber.trim(),
        suburbOrArea: input.suburbOrArea.trim(),
        cityOrTown: pageContext.cityName,
        preferredContactMethod: 'whatsapp'
      }
    };

    // Construct customer WhatsApp pre-filled text
    const messageLines = [
      `Hi! My name is ${input.fullName}.`,
      `I am looking for a quote on *${pageContext.serviceName}* in *${input.suburbOrArea}, ${pageContext.cityName}*.`,
      `My contact number is ${input.phoneNumber}.`
    ];

    if (input.projectDescription && input.projectDescription.trim().length > 0) {
      messageLines.push(`Project Details: ${input.projectDescription.trim()}`);
    }

    messageLines.push(`(Ref: ${leadId})`);

    const encodedMessage = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${this.whatsappBusinessNumber}?text=${encodedMessage}`;

    return {
      success: true,
      dispatchPayload: {
        whatsappUrl,
        encodedMessage,
        leadTicketId: leadId
      },
      leadPayload
    };
  }
}
