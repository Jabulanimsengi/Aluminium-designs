export * from './types/service';
export * from './types/location';
export * from './types/page';
export * from './types/lead';

export interface Project {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  alloy: string;
  dimensions: string;
  description: string;
  specs: Record<string, string>;
}

export interface Inquiry {
  id: string;
  date: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  clientCity?: string;
  projectType: string;
  width?: number;
  height?: number;
  finish: string;
  glassSpec: string;
  alloyGrade: string;
  sizeReference?: string;
  priceEstimate?: {
    materials: number;
    labor: number;
    testing: number;
    total: number;
  };
  status: 'Under Engineering Review' | 'Approved' | 'Draft' | 'New Request';
  notes?: string;
}

export type ActiveTab = 'home' | 'about' | 'services' | 'projects' | 'catalogue' | 'contact' | 'inquiry';
