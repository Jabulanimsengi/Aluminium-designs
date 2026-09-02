import { SALocationObject } from '../../types/location';

export const northernCapeLocations: SALocationObject[] = [
  {
    id: "loc-nc-kimberley",
    slug: "kimberley",
    name: "Kimberley",
    type: "city",
    province: "Northern Cape",
    provinceAbbr: "NC",
    metroOrDistrict: "Sol Plaatje Local Municipality",
    postalCodes: ["8301", "8300"],
    suburbsOrAreas: ["Belgravia", "Royldene", "Hadison Park", "Galeshewe"],
    coordinates: { latitude: -28.7282, longitude: 24.7499 },
    climateZone: "Karoo Desert",
    dialingCode: "053",
    seoDescription: "Kimberley Northern Cape provincial capital city."
  },
  {
    id: "loc-nc-upington",
    slug: "upington",
    name: "Upington",
    type: "town",
    province: "Northern Cape",
    provinceAbbr: "NC",
    metroOrDistrict: "Dawid Kruiper Local Municipality",
    postalCodes: ["8800", "8801"],
    suburbsOrAreas: ["Keidebees", "Blydeville", "Pabststein", "Paballelo"],
    coordinates: { latitude: -28.4478, longitude: 21.2561 },
    climateZone: "Karoo Desert",
    dialingCode: "054",
    seoDescription: "Upington Kalahari agricultural and solar energy town."
  }
];
