import { SALocationObject } from '../../types/location';

export const northWestLocations: SALocationObject[] = [
  {
    id: "loc-nw-rustenburg",
    slug: "rustenburg",
    name: "Rustenburg",
    type: "city",
    province: "North West",
    provinceAbbr: "NW",
    metroOrDistrict: "Rustenburg Local Municipality",
    postalCodes: ["0299", "0300"],
    suburbsOrAreas: ["Waterfall East", "Cashan", "Protea Park", "Tlhabane", "Bojanala"],
    coordinates: { latitude: -25.6667, longitude: 27.2417 },
    climateZone: "Semi-Arid Bushveld",
    dialingCode: "014",
    seoDescription: "Rustenburg platinum belt mining and residential city."
  },
  {
    id: "loc-nw-potchefstroom",
    slug: "potchefstroom",
    name: "Potchefstroom",
    type: "city",
    province: "North West",
    provinceAbbr: "NW",
    metroOrDistrict: "JB Marks Local Municipality",
    postalCodes: ["2531", "2520"],
    suburbsOrAreas: ["Baillie Park", "Grimbeekpark", "Bult", "Ikageng"],
    coordinates: { latitude: -26.7167, longitude: 27.1000 },
    climateZone: "Highveld Inland",
    dialingCode: "018",
    seoDescription: "Potchefstroom university town and farming hub in North West."
  }
];
