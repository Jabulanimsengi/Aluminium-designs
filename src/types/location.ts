export type SouthAfricanProvince =
  | 'Gauteng'
  | 'Western Cape'
  | 'KwaZulu-Natal'
  | 'Eastern Cape'
  | 'Free State'
  | 'Limpopo'
  | 'Mpumalanga'
  | 'North West'
  | 'Northern Cape';

export type LocationType =
  | 'province'
  | 'region'
  | 'metropolitan'
  | 'city'
  | 'town'
  | 'suburb'
  | 'township'
  | 'village';

export type LocationArchetype =
  | 'luxury-estate'
  | 'heritage-suburb'
  | 'commercial-hub'
  | 'industrial-node'
  | 'general-residential';

export interface LocationGeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface SALocationObject {
  id: string;
  slug: string;
  name: string;
  type: LocationType;
  archetype?: LocationArchetype;
  province: SouthAfricanProvince;
  provinceAbbr: 'GP' | 'WC' | 'KZN' | 'EC' | 'FS' | 'LP' | 'MP' | 'NW' | 'NC';
  metroOrDistrict?: string;
  postalCodes: string[];
  parentLocationSlug?: string;
  suburbsOrAreas?: string[];
  coordinates: LocationGeoCoordinates;
  climateZone: 'Coastal Marine' | 'Highveld Inland' | 'Subtropical' | 'Semi-Arid Bushveld' | 'Karoo Desert';
  dialingCode: string;
  seoDescription: string;
}
