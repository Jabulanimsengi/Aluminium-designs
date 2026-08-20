/**
 * Master Gauteng Shopping Malls & Retail Centres Dataset
 * Total Verified Malls: 91
 * Coverage: City of Johannesburg, City of Tshwane, City of Ekurhuleni,
 * West Rand District Municipality, Sedibeng District Municipality.
 */

export interface TargetMall {
  id: string;
  name: string;
  category: 'Mall / Shopping Centre';
  municipality: string;
  region: string;
  notes: string;
  slug: string;
  province: 'Gauteng';
  provinceAbbr: 'GP';
}

export const gautengTargetMalls: TargetMall[] = [
  {
    "id": "mall-gp-sandton-city-and-nelson-mandela-square",
    "name": "Sandton City & Nelson Mandela Square",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "One of Africa's premier flagship luxury shopping malls",
    "slug": "sandton-city-and-nelson-mandela-square",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-mall-of-africa",
    "name": "Mall of Africa",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Waterfall City (Midrand)",
    "notes": "Largest single-phase retail mall built in South Africa",
    "slug": "mall-of-africa",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-menlyn-park-shopping-centre",
    "name": "Menlyn Park Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Menlyn (Pretoria)",
    "notes": "Massive super-regional retail and entertainment center",
    "slug": "menlyn-park-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-eastgate-shopping-centre",
    "name": "Eastgate Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Bedfordview",
    "notes": "Historic regional mall serving East Rand and eastern JHB",
    "slug": "eastgate-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-fourways-mall",
    "name": "Fourways Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Expansive super-regional mall and entertainment hub",
    "slug": "fourways-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-cresta-shopping-centre",
    "name": "Cresta Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Randburg / Cresta",
    "notes": "Long-standing prominent regional shopping center",
    "slug": "cresta-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-rosebank-mall-and-the-zone-at-rosebank",
    "name": "Rosebank Mall & The Zone @ Rosebank",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Rosebank",
    "notes": "Connected urban retail leisure and open-air pedestrian zone",
    "slug": "rosebank-mall-and-the-zone-at-rosebank",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-hyde-park-corner",
    "name": "Hyde Park Corner",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Hyde Park",
    "notes": "Boutique luxury center famous for designer brands",
    "slug": "hyde-park-corner",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-clearwater-mall",
    "name": "Clearwater Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort / Strubens Valley",
    "notes": "Major regional lifestyle and shopping destination",
    "slug": "clearwater-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-brooklyn-mall",
    "name": "Brooklyn Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Brooklyn (Pretoria)",
    "notes": "Classic upscale shopping mall in Pretoria East",
    "slug": "brooklyn-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-the-grove-mall",
    "name": "The Grove Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Pretoria East (Equestria)",
    "notes": "Retail centre featuring Gauteng's standard ice rink",
    "slug": "the-grove-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-woodlands-boulevard",
    "name": "Woodlands Boulevard",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Pretoria East",
    "notes": "Regional shopping and cinema centre",
    "slug": "woodlands-boulevard",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-centurion-mall",
    "name": "Centurion Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Centurion CBD",
    "notes": "Sprawling open-air and covered waterfront retail centre",
    "slug": "centurion-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-east-rand-mall",
    "name": "East Rand Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Boksburg",
    "notes": "Key retail and entertainment anchor of the East Rand",
    "slug": "east-rand-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-lakeside-mall",
    "name": "Lakeside Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Benoni",
    "notes": "Waterfront mall themed around a Mississippi steamboat",
    "slug": "lakeside-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-mall-of-the-south",
    "name": "Mall of the South",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Aspen Hills / JHB South",
    "notes": "Modern regional mall serving southern Johannesburg",
    "slug": "mall-of-the-south",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-the-glen-shopping-centre",
    "name": "The Glen Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Oakdene / JHB South",
    "notes": "Major regional retail destination in the south",
    "slug": "the-glen-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-key-west-shopping-centre",
    "name": "Key West Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "West Rand District Municipality",
    "region": "Krugersdorp",
    "notes": "Major retail and lifestyle mall in the West Rand",
    "slug": "key-west-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-cradlestone-mall",
    "name": "Cradlestone Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "West Rand District Municipality",
    "region": "Mogale City / Krugersdorp",
    "notes": "Large regional mall near the Cradle of Humankind",
    "slug": "cradlestone-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-vaal-mall",
    "name": "Vaal Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "Sedibeng District Municipality",
    "region": "Vanderbijlpark",
    "notes": "Premier shopping destination of the Vaal Triangle",
    "slug": "vaal-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-maponya-mall",
    "name": "Maponya Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Klipspruit (Soweto)",
    "notes": "Landmark super-regional mall in Soweto",
    "slug": "maponya-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-jabulani-mall",
    "name": "Jabulani Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Jabulani (Soweto)",
    "notes": "Key community and civic shopping centre in Soweto",
    "slug": "jabulani-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-irene-village-mall",
    "name": "Irene Village Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Open-air lifestyle centre with a village feel",
    "slug": "irene-village-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-southgate-mall",
    "name": "Southgate Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Long-standing regional mall in the south",
    "slug": "southgate-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-westgate",
    "name": "Westgate",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Major established super-regional mall in the West Rand",
    "slug": "westgate",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-kolonnade-shopping-centre",
    "name": "Kolonnade Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Montana (Pretoria)",
    "notes": "Large shopping and entertainment centre in the north",
    "slug": "kolonnade-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-wonderpark-shopping-centre",
    "name": "Wonderpark Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Karenpark (Pretoria)",
    "notes": "Major retail hub serving northern Pretoria",
    "slug": "wonderpark-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-greenstone-shopping-mall",
    "name": "Greenstone Shopping Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Edenvale / Greenstone Hill",
    "notes": "Large modern mall serving Edenvale and Modderfontein",
    "slug": "greenstone-shopping-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-bedford-centre",
    "name": "Bedford Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Bedfordview",
    "notes": "Upscale mall with a European-style square",
    "slug": "bedford-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-killarney-mall",
    "name": "Killarney Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Killarney",
    "notes": "One of Johannesburg's earliest established shopping centres",
    "slug": "killarney-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-nicolway-bryanston",
    "name": "Nicolway Bryanston",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Bryanston",
    "notes": "Boutique food-focused upmarket lifestyle centre",
    "slug": "nicolway-bryanston",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-design-quarter",
    "name": "Design Quarter",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Decor design and lifestyle retail hub",
    "slug": "design-quarter",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-montecasino",
    "name": "Montecasino",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Tuscan-themed entertainment casino and retail complex",
    "slug": "montecasino",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-the-marc",
    "name": "The Marc",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "Modern retail centre in the Sandton CBD",
    "slug": "the-marc",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-mall-at-reds",
    "name": "Mall @ Reds",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Popular community and regional shopping destination",
    "slug": "mall-at-reds",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-forest-hill-city",
    "name": "Forest Hill City",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Centurion / Monavoni",
    "notes": "Large regional shopping mall with ice rink and wave pool",
    "slug": "forest-hill-city",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-atterbury-value-mart",
    "name": "Atterbury Value Mart",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Pretoria East",
    "notes": "Expansive value and lifestyle center",
    "slug": "atterbury-value-mart",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-parkview-shopping-centre",
    "name": "Parkview Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Pretoria East",
    "notes": "Convenient lifestyle and retail destination",
    "slug": "parkview-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-sunnypark-shopping-centre",
    "name": "Sunnypark Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Sunnyside (Pretoria)",
    "notes": "Key retail destination in central Pretoria",
    "slug": "sunnypark-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-soshanguve-crossing",
    "name": "Soshanguve Crossing",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Soshanguve",
    "notes": "Major modern retail centre for the northern townships",
    "slug": "soshanguve-crossing",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-quagga-centre",
    "name": "Quagga Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Pretoria West",
    "notes": "Established regional shopping centre",
    "slug": "quagga-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-sammy-marks-square",
    "name": "Sammy Marks Square",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Pretoria Central",
    "notes": "Landmark inner-city retail and office complex",
    "slug": "sammy-marks-square",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-zambezi-junction",
    "name": "Zambezi Junction",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Montana",
    "notes": "Convenience and lifestyle shopping hub",
    "slug": "zambezi-junction",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-montana-crossing",
    "name": "Montana Crossing",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Montana",
    "notes": "Community shopping destination in the north",
    "slug": "montana-crossing",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-jubilee-mall",
    "name": "Jubilee Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Hammanskraal",
    "notes": "Central retail hub for Hammanskraal and surrounds",
    "slug": "jubilee-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-bougainville-shopping-centre",
    "name": "Bougainville Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Daspoort",
    "notes": "Community retail center in western Pretoria",
    "slug": "bougainville-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-centurion-lifestyle-centre",
    "name": "Centurion Lifestyle Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Large value retail and lifestyle center",
    "slug": "centurion-lifestyle-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-castle-walk-shopping-centre",
    "name": "Castle Walk Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Tshwane",
    "region": "Erasmuskloof",
    "notes": "Neighborhood convenience retail centre",
    "slug": "castle-walk-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-balfour-mall",
    "name": "Balfour Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Highlands North",
    "notes": "One of the older shopping centres in Johannesburg",
    "slug": "balfour-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-boulders-shopping-centre",
    "name": "Boulders Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Well-established retail hub near the Midrand CBD",
    "slug": "boulders-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-carlswald-lifestyle-centre",
    "name": "Carlswald Lifestyle Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Open-air community and lifestyle shopping center",
    "slug": "carlswald-lifestyle-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-san-ridge-square",
    "name": "San Ridge Square",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Modern convenient community shopping destination",
    "slug": "san-ridge-square",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-china-mall",
    "name": "China Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Amalgam (JHB)",
    "notes": "Major wholesale and retail trade mall",
    "slug": "china-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-oriental-plaza",
    "name": "Oriental Plaza",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Fordsburg",
    "notes": "Famous historical retail hub known for bargains",
    "slug": "oriental-plaza",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-dobsonville-mall",
    "name": "Dobsonville Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "First major shopping mall built in Soweto",
    "slug": "dobsonville-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-protea-glen-mall",
    "name": "Protea Glen Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Key retail destination for deep Soweto",
    "slug": "protea-glen-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-trade-route-mall",
    "name": "Trade Route Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Large regional mall serving Lenasia and surrounds",
    "slug": "trade-route-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-randridge-mall",
    "name": "Randridge Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Randpark Ridge",
    "notes": "Established suburban convenience mall",
    "slug": "randridge-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-northgate-shopping-centre",
    "name": "Northgate Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Northriding",
    "notes": "Major regional mall famously associated with the Ticketpro Dome",
    "slug": "northgate-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-broadacres-lifestyle-centre",
    "name": "Broadacres Lifestyle Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Broadacres",
    "notes": "Upscale open-air lifestyle and garden centre",
    "slug": "broadacres-lifestyle-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-cedar-square",
    "name": "Cedar Square",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Upmarket open-air retail and entertainment center",
    "slug": "cedar-square",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-pineslopes-shopping-centre",
    "name": "Pineslopes Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Community lifestyle shopping center",
    "slug": "pineslopes-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-kyalami-corner",
    "name": "Kyalami Corner",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Kyalami",
    "notes": "Modern upscale lifestyle and convenience retail",
    "slug": "kyalami-corner",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-bryanston-shopping-centre",
    "name": "Bryanston Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Bryanston",
    "notes": "Upmarket community shopping centre",
    "slug": "bryanston-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-morning-glen-mall",
    "name": "Morning Glen Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Kelvin / Morningside",
    "notes": "Local convenience and specialty retail mall",
    "slug": "morning-glen-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-norwood-mall",
    "name": "Norwood Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Norwood",
    "notes": "Boutique suburban mall with strong anchor tenants",
    "slug": "norwood-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-melrose-arch",
    "name": "Melrose Arch",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Melrose",
    "notes": "High-end open-air retail dining and lifestyle precinct",
    "slug": "melrose-arch",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-campus-square",
    "name": "Campus Square",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Auckland Park",
    "notes": "Retail hub catering to surrounding student population",
    "slug": "campus-square",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-newtown-junction",
    "name": "Newtown Junction",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Newtown",
    "notes": "Inner-city retail mall integrated into a cultural precinct",
    "slug": "newtown-junction",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-village-view-shopping-centre",
    "name": "Village View Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Bedfordview",
    "notes": "Boutique upscale suburban shopping destination",
    "slug": "village-view-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-meadowdale-mall",
    "name": "Meadowdale Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Edenvale",
    "notes": "Large value and lifestyle center",
    "slug": "meadowdale-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-festival-mall",
    "name": "Festival Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Kempton Park",
    "notes": "Large regional mall known for its indoor ice rink",
    "slug": "festival-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-bonaero-park-shopping-centre",
    "name": "Bonaero Park Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Bonaero Park",
    "notes": "Convenience retail serving local community and airport",
    "slug": "bonaero-park-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-mall-at-carnival",
    "name": "Mall @ Carnival",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Brakpan",
    "notes": "Massive super-regional mall and entertainment destination",
    "slug": "mall-at-carnival",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-springs-mall",
    "name": "Springs Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Springs",
    "notes": "Modern regional mall serving the far East Rand",
    "slug": "springs-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-tsakane-mall",
    "name": "Tsakane Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Tsakane",
    "notes": "Central community retail hub in the township",
    "slug": "tsakane-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-alberton-city-shopping-centre",
    "name": "Alberton City Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Alberton",
    "notes": "Established regional mall in the heart of Alberton",
    "slug": "alberton-city-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-newmarket-mall",
    "name": "Newmarket Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Alberton",
    "notes": "Modern retail center built on the old racecourse",
    "slug": "newmarket-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-lemon-tree-shopping-centre",
    "name": "Lemon Tree Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Alberton",
    "notes": "Popular community and convenience shopping node",
    "slug": "lemon-tree-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-tambotie-mall",
    "name": "Tambotie Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "West Rand District Municipality",
    "region": "Randfontein",
    "notes": "Key regional mall for the Randfontein area",
    "slug": "tambotie-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-president-square",
    "name": "President Square",
    "category": "Mall / Shopping Centre",
    "municipality": "West Rand District Municipality",
    "region": "Krugersdorp",
    "notes": "Community shopping center in the West Rand",
    "slug": "president-square",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-village-square",
    "name": "Village Square",
    "category": "Mall / Shopping Centre",
    "municipality": "West Rand District Municipality",
    "region": "Randfontein",
    "notes": "Central shopping destination for Randfontein",
    "slug": "village-square",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-evaton-mall",
    "name": "Evaton Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "Sedibeng District Municipality",
    "region": "Evaton",
    "notes": "Major retail mall serving the Vaal townships",
    "slug": "evaton-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-mark-park-shopping-centre",
    "name": "Mark Park Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "Sedibeng District Municipality",
    "region": "Vereeniging",
    "notes": "Convenience and community shopping destination",
    "slug": "mark-park-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-river-square-shopping-centre",
    "name": "River Square Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "Sedibeng District Municipality",
    "region": "Three Rivers (Vereeniging)",
    "notes": "Prominent regional mall in the Vaal area",
    "slug": "river-square-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-phumulani-mall",
    "name": "Phumulani Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Tembisa",
    "notes": "Convenience shopping serving the Tembisa community",
    "slug": "phumulani-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-alex-mall",
    "name": "Alex Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Alexandra",
    "notes": "Modern retail hub servicing the Alexandra township",
    "slug": "alex-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-kagiso-mall",
    "name": "Kagiso Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "West Rand District Municipality",
    "region": "Kagiso",
    "notes": "Community shopping center in Kagiso township",
    "slug": "kagiso-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-chris-hani-crossing",
    "name": "Chris Hani Crossing",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Ekurhuleni",
    "region": "Vosloorus",
    "notes": "Major retail node in Vosloorus",
    "slug": "chris-hani-crossing",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-eyethu-orange-farm-mall",
    "name": "Eyethu Orange Farm Mall",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Orange Farm",
    "notes": "Major shopping hub for the deep south",
    "slug": "eyethu-orange-farm-mall",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  },
  {
    "id": "mall-gp-pan-africa-shopping-centre",
    "name": "Pan Africa Shopping Centre",
    "category": "Mall / Shopping Centre",
    "municipality": "City of Johannesburg",
    "region": "Alexandra",
    "notes": "Integrated retail and taxi rank node",
    "slug": "pan-africa-shopping-centre",
    "province": "Gauteng",
    "provinceAbbr": "GP"
  }
];

// Instant O(1) slug map
export const gautengMallMapBySlug = new Map<string, TargetMall>(
  gautengTargetMalls.map(mall => [mall.slug, mall])
);

// Grouped query helpers
export const getMallsByMunicipality = (municipalityName: string): TargetMall[] => {
  return gautengTargetMalls.filter(
    m => m.municipality.toLowerCase() === municipalityName.toLowerCase()
  );
};

export const getMallsByRegion = (regionName: string): TargetMall[] => {
  return gautengTargetMalls.filter(
    m => m.region.toLowerCase().includes(regionName.toLowerCase())
  );
};
