/**
 * IndexNow Protocol Data Types and Interfaces
 * Specification: https://www.indexnow.org/documentation
 */

export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation?: string;
  urlList: string[];
}

export interface IndexNowOptions {
  host?: string;
  key?: string;
  keyLocation?: string;
  endpoint?: string;
  batchSize?: number;
  dryRun?: boolean;
}

export interface IndexNowSubmissionResponse {
  endpoint: string;
  statusCode: number;
  statusText: string;
  success: boolean;
  urlsSubmitted: number;
  message: string;
  timestamp: string;
}

export interface IndexNowBatchResult {
  totalUrls: number;
  batchesSent: number;
  successfulUrls: number;
  failedUrls: number;
  responses: IndexNowSubmissionResponse[];
}

export interface IndexNowManifest {
  lastUpdated: string;
  submittedUrls: Record<string, string>; // url -> lastmod date
}
