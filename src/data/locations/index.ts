import { SALocationObject } from '../../types/location';
import { gautengLocations } from './gauteng';
import { westernCapeLocations } from './westernCape';
import { kwaZuluNatalLocations } from './kwaZuluNatal';
import { easternCapeLocations } from './easternCape';
import { freeStateLocations } from './freeState';
import { limpopoLocations } from './limpopo';
import { mpumalangaLocations } from './mpumalanga';
import { northWestLocations } from './northWest';
import { northernCapeLocations } from './northernCape';

// Focused Active Target Locations: Gauteng Province
export const allSouthAfricaLocations: SALocationObject[] = [
  ...gautengLocations
];

export const allGautengLocations: SALocationObject[] = [
  ...gautengLocations
];

export const allNationalLocations: SALocationObject[] = [
  ...gautengLocations,
  ...westernCapeLocations,
  ...kwaZuluNatalLocations,
  ...easternCapeLocations,
  ...freeStateLocations,
  ...limpopoLocations,
  ...mpumalangaLocations,
  ...northWestLocations,
  ...northernCapeLocations
];

export const saLocationMapBySlug = new Map<string, SALocationObject>(
  allSouthAfricaLocations.map(loc => [loc.slug, loc])
);

export const getLocationsByProvince = (provinceName: string): SALocationObject[] => {
  return allNationalLocations.filter(
    loc => loc.province.toLowerCase() === provinceName.toLowerCase()
  );
};

// Master Target Locations Dataset (450 Granular Locations)
export * from './gautengTargetLocations';

// Master Target Malls & Shopping Centres Dataset (91 Malls)
export * from './gautengTargetMalls';


