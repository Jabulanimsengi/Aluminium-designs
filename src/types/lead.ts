export type LeadSourceAction = 'QUOTATION_BUTTON' | 'WHATSAPP_BUTTON';

export interface LeadUserInput {
  fullName: string;
  phoneNumber: string;
  emailAddress?: string;
  suburbOrArea: string;
  cityOrTown: string;
  serviceRequested: string;
  projectDescription?: string;
  preferredContactMethod: 'phone' | 'whatsapp' | 'email';
}

export interface LeadSubmissionPayload {
  leadId: string;
  sourceAction: LeadSourceAction;
  pageUrl: string;
  serviceSlug: string;
  locationSlug: string;
  suburbSlug?: string;
  timestamp: string;
  customer: LeadUserInput;
}

export interface LeadValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface WhatsAppDispatchPayload {
  whatsappUrl: string;
  encodedMessage: string;
  leadTicketId: string;
}
