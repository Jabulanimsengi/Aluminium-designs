import { SALocationObject } from '../../types/location';

export const freeStateLocations: SALocationObject[] = [
  {
    id: "loc-fs-bloemfontein",
    slug: "bloemfontein",
    name: "Bloemfontein",
    type: "metropolitan",
    province: "Free State",
    provinceAbbr: "FS",
    metroOrDistrict: "Mangaung Metropolitan Municipality",
    postalCodes: ["9301", "9300", "9324"],
    suburbsOrAreas: ["Dan Pienaar", "Universitas", "Langenhovenpark", "Pellissier", "Fichardtpark", "Botshabelo", "Thaba Nchu"],
    coordinates: { latitude: -29.1181, longitude: 26.2244 },
    climateZone: "Highveld Inland",
    dialingCode: "051",
    seoDescription: "Bloemfontein capital city of the Free State."
  },
  {
    id: "loc-fs-welkom",
    slug: "welkom",
    name: "Welkom",
    type: "city",
    province: "Free State",
    provinceAbbr: "FS",
    metroOrDistrict: "Matjhabeng Local Municipality",
    postalCodes: ["9459", "9460"],
    suburbsOrAreas: ["Riebeeckstad", "Naudeville", "Bedelia", "Thabong"],
    coordinates: { latitude: -27.9833, longitude: 26.7333 },
    climateZone: "Highveld Inland",
    dialingCode: "057",
    seoDescription: "Welkom Free State Goldfields city."
  },
  {
    id: "loc-fs-sasolburg",
    slug: "sasolburg",
    name: "Sasolburg",
    type: "town",
    province: "Free State",
    provinceAbbr: "FS",
    metroOrDistrict: "Metsimaholo Local Municipality",
    postalCodes: ["1947", "1948"],
    suburbsOrAreas: ["Vaalpark", "Zamdela"],
    coordinates: { latitude: -26.8167, longitude: 27.8333 },
    climateZone: "Highveld Inland",
    dialingCode: "016",
    seoDescription: "Sasolburg Vaal industrial town."
  }
];
