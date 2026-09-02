import { SALocationObject } from '../../types/location';

export const mpumalangaLocations: SALocationObject[] = [
  {
    id: "loc-mp-mbombela",
    slug: "mbombela",
    name: "Mbombela (Nelspruit)",
    type: "city",
    province: "Mpumalanga",
    provinceAbbr: "MP",
    metroOrDistrict: "City of Mbombela Local Municipality",
    postalCodes: ["1200", "1201"],
    suburbsOrAreas: ["West Acres", "Sonheuwel", "Steiltes", "Riverside", "KaNyamazane", "Matsulu"],
    coordinates: { latitude: -25.4753, longitude: 30.9694 },
    climateZone: "Subtropical",
    dialingCode: "013",
    seoDescription: "Mbombela Mpumalanga capital city."
  },
  {
    id: "loc-mp-witbank",
    slug: "witbank",
    name: "Witbank (eMalahleni)",
    type: "city",
    province: "Mpumalanga",
    provinceAbbr: "MP",
    metroOrDistrict: "eMalahleni Local Municipality",
    postalCodes: ["1035", "1034"],
    suburbsOrAreas: ["Reyno Ridge", "Model Park", "Die Hoewes", "Vosman"],
    coordinates: { latitude: -25.8728, longitude: 29.2331 },
    climateZone: "Highveld Inland",
    dialingCode: "013",
    seoDescription: "Witbank energy and coal mining city."
  }
];
