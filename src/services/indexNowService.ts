import {
  IndexNowPayload,
  IndexNowOptions,
  IndexNowSubmissionResponse,
  IndexNowBatchResult
} from '../types/indexNow';

export class IndexNowService {
  public static readonly DEFAULT_HOST = 'www.aluminiumdesigns.co.za';
  public static readonly DEFAULT_KEY = 'e8b34f71a9424c8bb1946395ec1df790';
  public static readonly DEFAULT_ENDPOINT = 'https://api.indexnow.org/indexnow';
  public static readonly MAX_URLS_PER_REQUEST = 10000;
  public static readonly RECOMMENDED_CHUNK_SIZE = 1000;

  private host: string;
  private key: string;
  private keyLocation?: string;
  private endpoint: string;

  constructor(options?: IndexNowOptions) {
    this.host = options?.host || process.env.INDEXNOW_HOST || IndexNowService.DEFAULT_HOST;
    this.key = options?.key || process.env.INDEXNOW_KEY || IndexNowService.DEFAULT_KEY;
    this.keyLocation =
      options?.keyLocation ||
      process.env.INDEXNOW_KEY_LOCATION ||
      `https://${this.host}/${this.key}.txt`;
    this.endpoint = options?.endpoint || process.env.INDEXNOW_ENDPOINT || IndexNowService.DEFAULT_ENDPOINT;
  }

  public getHost(): string {
    return this.host;
  }

  public getKey(): string {
    return this.key;
  }

  public getKeyLocation(): string {
    return this.keyLocation || `https://${this.host}/${this.key}.txt`;
  }

  /**
   * Submits a single URL to IndexNow via GET or single-element POST.
   */
  public async submitUrl(url: string, dryRun: boolean = false): Promise<IndexNowSubmissionResponse> {
    const batchResult = await this.submitBatch([url], { dryRun });
    return batchResult.responses[0] || {
      endpoint: this.endpoint,
      statusCode: 500,
      statusText: 'Unknown Error',
      success: false,
      urlsSubmitted: 0,
      message: 'Failed to obtain submission response.',
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Submits a list of URLs in partitioned batches to the IndexNow protocol endpoint.
   */
  public async submitBatch(
    urls: string[],
    options?: IndexNowOptions
  ): Promise<IndexNowBatchResult> {
    const uniqueUrls = Array.from(new Set(urls.map(u => u.trim()))).filter(u => u.length > 0);
    const chunkSize = Math.min(
      options?.batchSize || IndexNowService.RECOMMENDED_CHUNK_SIZE,
      IndexNowService.MAX_URLS_PER_REQUEST
    );
    const dryRun = options?.dryRun ?? false;

    const result: IndexNowBatchResult = {
      totalUrls: uniqueUrls.length,
      batchesSent: 0,
      successfulUrls: 0,
      failedUrls: 0,
      responses: []
    };

    if (uniqueUrls.length === 0) {
      return result;
    }

    const totalBatches = Math.ceil(uniqueUrls.length / chunkSize);

    for (let i = 0; i < totalBatches; i++) {
      const chunk = uniqueUrls.slice(i * chunkSize, (i + 1) * chunkSize);
      result.batchesSent++;

      if (dryRun) {
        result.successfulUrls += chunk.length;
        result.responses.push({
          endpoint: this.endpoint,
          statusCode: 200,
          statusText: 'DRY RUN OK',
          success: true,
          urlsSubmitted: chunk.length,
          message: `[Dry Run] Simulated submission of batch ${i + 1}/${totalBatches} (${chunk.length} URLs).`,
          timestamp: new Date().toISOString()
        });
        continue;
      }

      const response = await this.sendPayloadWithRetry({
        host: this.host,
        key: this.key,
        keyLocation: this.getKeyLocation(),
        urlList: chunk
      });

      result.responses.push(response);
      if (response.success) {
        result.successfulUrls += chunk.length;
      } else {
        result.failedUrls += chunk.length;
      }
    }

    return result;
  }

  /**
   * Dispatches the HTTP POST payload with exponential backoff on rate limits or transient errors.
   */
  private async sendPayloadWithRetry(
    payload: IndexNowPayload,
    maxRetries: number = 3
  ): Promise<IndexNowSubmissionResponse> {
    let attempt = 0;
    let delayMs = 1000;

    while (attempt < maxRetries) {
      attempt++;
      try {
        const res = await fetch(this.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'User-Agent': 'IndexNow-AutoSubmitter/1.0'
          },
          body: JSON.stringify(payload)
        });

        const statusCode = res.status;
        const statusText = res.statusText;
        const responseText = await res.text().catch(() => '');

        // HTTP 200: OK (URLs submitted successfully)
        // HTTP 202: Accepted (URL received; IndexNow key is pending validation)
        if (statusCode === 200 || statusCode === 202) {
          return {
            endpoint: this.endpoint,
            statusCode,
            statusText,
            success: true,
            urlsSubmitted: payload.urlList.length,
            message:
              statusCode === 200
                ? `Successfully submitted ${payload.urlList.length} URLs.`
                : `Accepted ${payload.urlList.length} URLs (Key validation pending).`,
            timestamp: new Date().toISOString()
          };
        }

        // HTTP 429: Rate Limited -> Retry with backoff
        if (statusCode === 429 && attempt < maxRetries) {
          console.warn(`[IndexNow] HTTP 429 Rate limit encountered. Retrying in ${delayMs}ms (Attempt ${attempt}/${maxRetries})...`);
          await new Promise(resolve => setTimeout(resolve, delayMs));
          delayMs *= 2;
          continue;
        }

        // Interpret specific IndexNow error codes
        let errorMessage = `HTTP ${statusCode} ${statusText}`;
        if (statusCode === 400) {
          errorMessage = `HTTP 400 Bad Request: Invalid payload structure or formatting. ${responseText}`;
        } else if (statusCode === 403) {
          errorMessage = `HTTP 403 Forbidden: Key not valid or key file could not be verified at ${payload.keyLocation}.`;
        } else if (statusCode === 422) {
          errorMessage = `HTTP 422 Unprocessable Entity: In-payload URLs do not belong to the host "${payload.host}".`;
        }

        return {
          endpoint: this.endpoint,
          statusCode,
          statusText,
          success: false,
          urlsSubmitted: 0,
          message: errorMessage,
          timestamp: new Date().toISOString()
        };
      } catch (err: any) {
        if (attempt < maxRetries) {
          console.warn(`[IndexNow] Network error: ${err.message}. Retrying in ${delayMs}ms...`);
          await new Promise(resolve => setTimeout(resolve, delayMs));
          delayMs *= 2;
          continue;
        }

        return {
          endpoint: this.endpoint,
          statusCode: 0,
          statusText: 'Network Error',
          success: false,
          urlsSubmitted: 0,
          message: `Network failure connecting to IndexNow endpoint (${this.endpoint}): ${err.message}`,
          timestamp: new Date().toISOString()
        };
      }
    }

    return {
      endpoint: this.endpoint,
      statusCode: 500,
      statusText: 'Max Retries Exceeded',
      success: false,
      urlsSubmitted: 0,
      message: `Failed after ${maxRetries} retry attempts.`,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Utility to verify if the key file is publicly live and reachable over HTTP/HTTPS.
   */
  public async verifyKeyHosting(): Promise<{
    reachable: boolean;
    statusCode: number;
    url: string;
    bodyContent?: string;
    isValidMatch: boolean;
  }> {
    const keyUrl = this.getKeyLocation();
    try {
      const res = await fetch(keyUrl, {
        method: 'GET',
        headers: { 'User-Agent': 'IndexNow-KeyVerifier/1.0' }
      });
      const text = (await res.text()).trim();
      const isValidMatch = res.status === 200 && text === this.key;

      return {
        reachable: res.status === 200,
        statusCode: res.status,
        url: keyUrl,
        bodyContent: text,
        isValidMatch
      };
    } catch (err: any) {
      return {
        reachable: false,
        statusCode: 0,
        url: keyUrl,
        isValidMatch: false
      };
    }
  }
}
