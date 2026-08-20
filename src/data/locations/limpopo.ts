import { SALocationObject } from '../../types/location';

export const limpopoLocations: SALocationObject[] = [
  {
    id: "loc-lp-polokwane",
    slug: "polokwane",
    name: "Polokwane",
    type: "city",
    province: "Limpopo",
    provinceAbbr: "LP",
    metroOrDistrict: "Polokwane Local Municipality",
    postalCodes: ["0699", "0700"],
    suburbsOrAreas: ["Bendor", "Flora Park", "Sterpark", "Ivydale", "Seshego", "Mankweng"],
    coordinates: { latitude: -23.9045, longitude: 29.4689 },
    climateZone: "Semi-Arid Bushveld",
    dialingCode: "015",
    seoDescription: "Polokwane main capital city in Limpopo."
  },
  {
    id: "loc-lp-tzaneen",
    slug: "tzaneen",
    name: "Tzaneen",
    type: "town",
    province: "Limpopo",
    provinceAbbr: "LP",
    metroOrDistrict: "Greater Tzaneen Local Municipality",
    postalCodes: ["0850"],
    suburbsOrAreas: ["Aqua Park", "Arbor Park", "Nkowankowa", "Lenyenye"],
    coordinates: { latitude: -23.8333, longitude: 30.1667 },
    climateZone: "Subtropical",
    dialingCode: "015",
    seoDescription: "Tzaneen farming and mountain valley town."
  },
  {
    id: "loc-lp-thohoyandou",
    slug: "thohoyandou",
    name: "Thohoyandou",
    type: "city",
    province: "Limpopo",
    provinceAbbr: "LP",
    metroOrDistrict: "Thulamela Local Municipality",
    postalCodes: ["0950"],
    suburbsOrAreas: ["Block F", "Block J", "Sibasa", "Shayandima"],
    coordinates: { latitude: -22.9456, longitude: 30.4842 },
    climateZone: "Subtropical",
    dialingCode: "015",
    seoDescription: "Thohoyandou main business hub in Vhembe."
  }
];
