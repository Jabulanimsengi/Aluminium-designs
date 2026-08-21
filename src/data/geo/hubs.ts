import { SALocationObject } from '../../types/location';

export const gautengLocations: SALocationObject[] = [
  // ==========================================
  // CITY OF JOHANNESBURG
  // ==========================================
  {
    id: "loc-gp-johannesburg",
    slug: "johannesburg",
    name: "Johannesburg",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    postalCodes: ["2000", "2001", "2017", "2041"],
    suburbsOrAreas: [
      "CBD", "Braamfontein", "Maboneng", "Newtown", "Marshalltown", "Fordsburg", "Mayfair",
      "Brixton", "Melville", "Auckland Park", "Westdene", "Kensington", "Observatory",
      "Cyrildene", "Bruma", "Yeoville", "Berea", "Carlton Centre", "Newtown Junction",
      "Campus Square", "Oriental Plaza", "Eastgate Shopping Centre"
    ],
    coordinates: { latitude: -26.2041, longitude: 28.0473 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Johannesburg central, inner city, university districts, and surrounding commercial areas."
  },
  {
    id: "loc-gp-sandton",
    slug: "sandton",
    name: "Sandton",
    type: "suburb",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    parentLocationSlug: "johannesburg",
    postalCodes: ["2196", "2146", "2057", "2191"],
    suburbsOrAreas: [
      "Sandton Central", "Bryanston", "Morningside", "Rivonia", "Hyde Park", "Inanda",
      "Sandhurst", "Hurlingham", "Paulshof", "Sunninghill", "Woodmead", "Gallo Manor",
      "Wendywood", "Riverclub", "Strathavon", "Benmore Gardens", "Atholl", "Petervale",
      "Sandton City Mall", "Nelson Mandela Square", "Benmore Centre", "Rivonia Village",
      "Morningside Shopping Centre", "The Wedge", "Nicolway Bryanston", "Hobart Grove"
    ],
    coordinates: { latitude: -26.1076, longitude: 28.0567 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Sandton financial hub and premier residential suburbs in northern Johannesburg."
  },
  {
    id: "loc-gp-fourways",
    slug: "fourways",
    name: "Fourways",
    type: "suburb",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    parentLocationSlug: "sandton",
    postalCodes: ["2055", "2068", "2191"],
    suburbsOrAreas: [
      "Fourways", "Lonehill", "Dainfern", "Dainfern Valley", "Broadacres", "Craigavon",
      "Douglasdale", "Witkoppen", "Magaliessig", "Beverley", "Pineslopes", "Cedar Lakes",
      "Fourways Gardens", "Steyn City", "Helderfontein Estate", "Chartwell", "Fourways Mall",
      "Montecasino", "Design Quarter", "Cedar Square", "Broadacres Shopping Centre", "Dainfern Square"
    ],
    coordinates: { latitude: -26.0189, longitude: 28.0056 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Fourways, Lonehill, Dainfern, and northern residential estates and lifestyle centers."
  },
  {
    id: "loc-gp-randburg",
    slug: "randburg",
    name: "Randburg",
    type: "suburb",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    postalCodes: ["2194", "2160", "2156", "2169"],
    suburbsOrAreas: [
      "Ferndale", "Northcliff", "Blairgowrie", "Cresta", "Linden", "Robindale", "Randpark Ridge",
      "Darrenwood", "Boskruin", "Bromhof", "Sundowner", "Northgate", "Northriding", "Olivedale",
      "Sharonlea", "Malanshof", "Bordeaux", "Fontainebleau", "Blackheath", "Fairland",
      "Cresta Shopping Centre", "Northgate Shopping Centre", "Ferndale on Republic", "Randridge Mall", "Boskruin Village"
    ],
    coordinates: { latitude: -26.0936, longitude: 27.9950 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Randburg residential suburbs, Northcliff, Cresta, and surrounding shopping centers."
  },
  {
    id: "loc-gp-rosebank",
    slug: "rosebank",
    name: "Rosebank",
    type: "suburb",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    parentLocationSlug: "johannesburg",
    postalCodes: ["2196", "2193"],
    suburbsOrAreas: [
      "Rosebank Central", "Parkhurst", "Parktown North", "Parkview", "Parkwood", "Greenside",
      "Emmarentia", "Westcliff", "Saxonwold", "Dunkeld", "Dunkeld West", "Forest Town",
      "Killarney", "Houghton Estate", "Norwood", "Oaklands", "Melrose Arch", "Melrose North",
      "Birdhaven", "Illovo", "Craighall", "Craighall Park", "Rosebank Mall", "The Zone @ Rosebank", "Norwood Mall"
    ],
    coordinates: { latitude: -26.1461, longitude: 28.0433 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Rosebank, the Parks suburbs, Melrose Arch, and central heritage residential areas."
  },
  {
    id: "loc-gp-roodepoort",
    slug: "roodepoort",
    name: "Roodepoort",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    postalCodes: ["1724", "1709", "1735", "1710"],
    suburbsOrAreas: [
      "Constantia Kloof", "Florida", "Florida Hills", "Florida Park", "Helderkruin", "Ruimsig",
      "Weltevredenpark", "Wilro Park", "Roodekrans", "Little Falls", "Strubensvalley", "Radiokop",
      "Honeydew", "Honeydew Manor", "Laser Park", "Allens Nek", "Amorosa", "Poortview", "Discovery",
      "Clearwater Mall", "Westgate Shopping Centre", "Retail Crossing", "Hillfox Value Centre", "Kwena Square"
    ],
    coordinates: { latitude: -26.1625, longitude: 27.8725 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Roodepoort, Florida, Constantia Kloof, Ruimsig, and West Rand shopping hubs."
  },
  {
    id: "loc-gp-midrand",
    slug: "midrand",
    name: "Midrand",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    postalCodes: ["1685", "1682", "1687"],
    suburbsOrAreas: [
      "Waterfall City", "Halfway House", "Kyalami", "Kyalami Estate", "Kyalami Glen", "Carlswald",
      "Vorna Valley", "Blue Hills", "Crowthorne", "Barbeque Downs", "Beaulieu", "Glen Austin",
      "Noordwyk", "Country View", "Clayville", "Mall of Africa", "Waterfall Corner", "Kyalami Corner",
      "Carlswald Lifestyle Shopping Centre", "San Ridge Square", "Boulders Shopping Centre"
    ],
    coordinates: { latitude: -25.9992, longitude: 28.1263 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Midrand, Waterfall City, Kyalami, Carlswald, and surrounding business and residential nodes."
  },
  {
    id: "loc-gp-soweto",
    slug: "soweto",
    name: "Soweto",
    type: "township",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    parentLocationSlug: "johannesburg",
    postalCodes: ["1804", "1809", "1818", "1852", "1863"],
    suburbsOrAreas: [
      "Orlando East", "Orlando West", "Diepkloof", "Pimville", "Meadowlands", "Dobsonville",
      "Jabulani", "Protea Glen", "Protea North", "Protea South", "Dube", "Mofolo", "Zola", "Zondi",
      "Emdeni", "Naledi", "Tladi", "Moletsane", "Mapetla", "Phiri", "Senaoane", "Chiawelo", "Klipspruit",
      "Kliptown", "Moroka", "Jabavu", "Bram Fischerville", "Maponya Mall", "Jabulani Mall", "Dobsonville Mall",
      "Protea Glen Mall", "Diepkloof Square", "Eyethu Mall", "Bara Mall"
    ],
    coordinates: { latitude: -26.2485, longitude: 27.8540 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Soweto residential areas, townships, and major retail shopping centers."
  },
  {
    id: "loc-gp-alexandra",
    slug: "alexandra",
    name: "Alexandra",
    type: "township",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    parentLocationSlug: "sandton",
    postalCodes: ["2090"],
    suburbsOrAreas: [
      "East Bank", "Far East Bank", "Tsutsumani", "Old Alex", "Marlboro", "Marlboro Gardens",
      "Wynberg", "Alex Mall", "Pan Africa Shopping Centre"
    ],
    coordinates: { latitude: -26.1036, longitude: 28.0933 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Alexandra township, Marlboro industrial and residential areas, and retail malls."
  },
  {
    id: "loc-gp-johannesburg-south",
    slug: "johannesburg-south",
    name: "Johannesburg South",
    type: "suburb",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    postalCodes: ["2091", "2058", "2190", "2097"],
    suburbsOrAreas: [
      "Glenvista", "Mulbarton", "Bassonia", "Aspen Lakes", "Glenanda", "Mondeor", "Winchester Hills",
      "Ridgeway", "Suideroord", "Robertsham", "Ormonde", "Turffontein", "Rosettenville", "Oakdene",
      "Linmeyer", "Naturena", "Kibler Park", "Eikenhof", "Mall of the South", "The Glen Shopping Centre",
      "Southgate Mall", "Gold Reef City", "Columbine Square"
    ],
    coordinates: { latitude: -26.2758, longitude: 28.0264 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Johannesburg South residential suburbs, Glenvista, Bassonia, and major regional malls."
  },
  {
    id: "loc-gp-lenasia",
    slug: "lenasia",
    name: "Lenasia",
    type: "township",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Johannesburg",
    postalCodes: ["1827", "1820", "1821"],
    suburbsOrAreas: [
      "Lenasia Central", "Lenasia South", "Zakariyya Park", "Ennerdale", "Lawley", "Finetown",
      "Lehae", "Eldorado Park", "Trade Route Mall", "Signet Terrace Shopping Centre", "Lenasia Square"
    ],
    coordinates: { latitude: -26.3197, longitude: 27.8428 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Lenasia, Lenasia South, Ennerdale, Eldorado Park, and local shopping complexes."
  },

  // ==========================================
  // CITY OF TSHWANE (PRETORIA & SURROUNDS)
  // ==========================================
  {
    id: "loc-gp-pretoria",
    slug: "pretoria",
    name: "Pretoria",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Tshwane",
    postalCodes: ["0001", "0002", "0083", "0181"],
    suburbsOrAreas: [
      "Pretoria CBD", "Arcadia", "Hatfield", "Brooklyn", "Waterkloof", "Waterkloof Ridge",
      "Waterkloof Glen", "Nieuw Muckleneuk", "Muckleneuk", "Groenkloof", "Lukasrand",
      "Monument Park", "Sunnyside", "Brooklyn Mall", "Sunnypark Shopping Centre"
    ],
    coordinates: { latitude: -25.7479, longitude: 28.2293 },
    climateZone: "Highveld Inland",
    dialingCode: "012",
    seoDescription: "Pretoria central, Old East suburbs, Brooklyn, Waterkloof, and shopping hubs."
  },
  {
    id: "loc-gp-pretoria-east",
    slug: "pretoria-east",
    name: "Pretoria East",
    type: "suburb",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Tshwane",
    parentLocationSlug: "pretoria",
    postalCodes: ["0081", "0042", "0043", "0044", "0084"],
    suburbsOrAreas: [
      "Faerie Glen", "Lynnwood", "Lynnwood Glen", "Lynnwood Ridge", "Lynnwood Manor", "Garsfontein",
      "Moreleta Park", "Constantia Park", "Elarduspark", "Wingate Park", "Erasmuskloof", "Erasmusrand",
      "Pretorius Park", "Silver Lakes Golf Estate", "Mooikloof", "Mooikloof Equestrian", "Woodhill Golf Estate",
      "Olympus", "Zwavelpoort", "The Hills Estate", "Six Fountains", "Equestria", "Die Wilgers",
      "Silverton", "Menlyn Park Shopping Centre", "Menlyn Maine", "The Grove Mall", "Woodlands Boulevard",
      "Parkview Shopping Centre", "Atterbury Value Mart", "Lynnwood Bridge", "Castle Gate Shopping Centre"
    ],
    coordinates: { latitude: -25.7891, longitude: 28.3128 },
    climateZone: "Highveld Inland",
    dialingCode: "012",
    seoDescription: "Pretoria East luxury residential estates, Menlyn, Faerie Glen, and premier shopping centers."
  },
  {
    id: "loc-gp-centurion",
    slug: "centurion",
    name: "Centurion",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Tshwane",
    postalCodes: ["0157", "0144", "0169", "0158"],
    suburbsOrAreas: [
      "Centurion Central", "Irene", "Eldoraigne", "Clubview", "Zwartkop", "Hennopspark", "Lyttelton",
      "Lyttelton Manor", "Doringkloof", "Highveld", "Die Hoewes", "Rooihuiskraal", "Rooihuiskraal North",
      "The Reeds", "Wierdapark", "Amberfield", "Raslouw", "Heuwelsig Estate", "Celtisdal", "Monavoni",
      "Copperleaf Golf Estate", "Southdowns Estate", "Midstream Estate", "Heritage Hill", "Valhalla",
      "Laudium", "Centurion Mall", "Irene Village Mall", "Mall@Reds", "Forest Hill City", "Southdowns Shopping Centre", "Centurion Lifestyle Centre"
    ],
    coordinates: { latitude: -25.8603, longitude: 28.1894 },
    climateZone: "Highveld Inland",
    dialingCode: "012",
    seoDescription: "Centurion residential suburbs, Midstream, Irene, and major retail shopping malls."
  },
  {
    id: "loc-gp-pretoria-north",
    slug: "pretoria-north",
    name: "Pretoria North",
    type: "suburb",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Tshwane",
    parentLocationSlug: "pretoria",
    postalCodes: ["0182", "0150", "0186", "0184"],
    suburbsOrAreas: [
      "Pretoria North Central", "Wonderboom", "Wonderboom South", "Annlin", "Sinoville", "Montana",
      "Montana Park", "Magalieskruin", "Doornpoort", "Karenpark", "Theresapark", "Amandasig",
      "Ninapark", "Heatherdale", "Florauna", "Gezina", "Rietfontein", "Villieria", "Waverley",
      "Queenswood", "Kolonnade Shopping Centre", "Wonderboom Junction", "Wonderpark Shopping Centre", "Gezina Galleries"
    ],
    coordinates: { latitude: -25.6738, longitude: 28.1750 },
    climateZone: "Highveld Inland",
    dialingCode: "012",
    seoDescription: "Pretoria North, Montana, Wonderboom, Moot suburbs, and regional retail centers."
  },
  {
    id: "loc-gp-mamelodi",
    slug: "mamelodi",
    name: "Mamelodi",
    type: "township",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Tshwane",
    parentLocationSlug: "pretoria",
    postalCodes: ["0122", "0147"],
    suburbsOrAreas: [
      "Mamelodi East", "Mamelodi West", "Mahube Valley", "Nellmapius", "Eersterust", "Silvertondale",
      "Denlyn Shopping Centre", "Mams Mall", "Mahube Mall"
    ],
    coordinates: { latitude: -25.7111, longitude: 28.3586 },
    climateZone: "Highveld Inland",
    dialingCode: "012",
    seoDescription: "Mamelodi township, Nellmapius, and eastern Tshwane commercial retail centers."
  },
  {
    id: "loc-gp-soshanguve",
    slug: "soshanguve",
    name: "Soshanguve",
    type: "township",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Tshwane",
    parentLocationSlug: "pretoria",
    postalCodes: ["0152", "0164", "0190"],
    suburbsOrAreas: [
      "Soshanguve Central", "Soshanguve East", "Soshanguve South", "Mabopane", "Ga-Rankuwa",
      "Winterveld", "Atteridgeville", "Saulsville", "Lotus Gardens", "Soshanguve Crossing",
      "Jubilee Mall", "Batho Plaza", "Ga-Rankuwa Shopping Centre"
    ],
    coordinates: { latitude: -25.5317, longitude: 28.0986 },
    climateZone: "Highveld Inland",
    dialingCode: "012",
    seoDescription: "Soshanguve, Mabopane, Ga-Rankuwa, Atteridgeville, and northern Tshwane shopping malls."
  },
  {
    id: "loc-gp-cullinan",
    slug: "cullinan",
    name: "Cullinan & Bronkhorstspruit",
    type: "town",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Tshwane",
    postalCodes: ["1000", "1020", "1001"],
    suburbsOrAreas: [
      "Cullinan Central", "Rayton", "Bronkhorstspruit", "Kungwini", "Rethabiseng", "Zithobeni",
      "Ekandustria", "Bronkhorstspruit Dam", "Cullinan Diamond Plaza", "Bronkhorstspruit Mall"
    ],
    coordinates: { latitude: -25.6719, longitude: 28.5236 },
    climateZone: "Highveld Inland",
    dialingCode: "012",
    seoDescription: "Cullinan, Rayton, Bronkhorstspruit, and eastern rural Tshwane commercial areas."
  },

  // ==========================================
  // CITY OF EKURHULENI (EAST RAND)
  // ==========================================
  {
    id: "loc-gp-kempton-park",
    slug: "kempton-park",
    name: "Kempton Park",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1619", "1620", "1618"],
    suburbsOrAreas: [
      "Glen Marais", "Aston Manor", "Bonaero Park", "Norkem Park", "Birchleigh", "Birchleigh North",
      "Pomona", "Bredell", "Allen Grove", "Nimrod Park", "Van Riebeeck Park", "Edleen", "Terenure",
      "Esther Park", "Rhodesfield", "Spartan", "Isando", "Jet Park", "Serengeti Golf Estate",
      "Festival Mall", "Woodbridge Square", "Glen Balad Mall", "Bonaero Park Shopping Centre"
    ],
    coordinates: { latitude: -26.1000, longitude: 28.2333 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Kempton Park residential suburbs, airport industrial areas, and shopping centers."
  },
  {
    id: "loc-gp-boksburg",
    slug: "boksburg",
    name: "Boksburg",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1459", "1460", "1470"],
    suburbsOrAreas: [
      "Sunward Park", "Bartlett", "Beyers Park", "Atlasville", "Boksburg North", "Boksburg South",
      "Impala Park", "Witfield", "Ravenswood", "Bardene", "Parkrand", "Parkdene", "Freeway Park",
      "Vosloorus", "East Rand Mall", "K90 Centre", "Value Mall Boksburg", "Sunward Lifestyle Centre",
      "Towers Shopping Centre", "Vosloorus Crossing"
    ],
    coordinates: { latitude: -26.2125, longitude: 28.2611 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Boksburg East Rand commercial hub, Sunward Park, and East Rand Mall shopping area."
  },
  {
    id: "loc-gp-benoni",
    slug: "benoni",
    name: "Benoni",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1501", "1509", "1511", "1516"],
    suburbsOrAreas: [
      "Rynfield", "Lakefield", "Northmead", "Farrarmere", "Brentwood Park", "Actonville",
      "Western Extension", "Benoni West", "Airfield", "Ebotse Golf & Country Estate", "Morehill",
      "Crystal Park", "Cloverdene", "Daveyton", "Etwatwa", "Wattville", "Lakeside Mall",
      "Northmead Square", "Oakfields Shopping Centre", "Brentwood Mall", "Daveyton Mall", "Mayfield Square"
    ],
    coordinates: { latitude: -26.1883, longitude: 28.3208 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Benoni residential suburbs, Ebotse Estate, Daveyton, and local retail centers."
  },
  {
    id: "loc-gp-germiston",
    slug: "germiston",
    name: "Germiston",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1401", "1407", "1428"],
    suburbsOrAreas: [
      "Lambton", "Hazeldene", "Delville", "Parkhill Gardens", "Dinwiddie", "Albemarle", "Union",
      "Castleview", "Leondale", "Roodekop", "Elsburg", "Wadeville", "Primrose", "Sunnyridge",
      "Katlehong", "Thokoza", "Golden Walk Mall", "Sam Ntuli Mall"
    ],
    coordinates: { latitude: -26.2256, longitude: 28.1678 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Germiston residential and industrial areas, Katlehong, and town commercial centers."
  },
  {
    id: "loc-gp-bedfordview",
    slug: "bedfordview",
    name: "Bedfordview",
    type: "suburb",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["2007", "2008"],
    suburbsOrAreas: [
      "Bedfordview Central", "St Andrews", "Essexwold", "Morninghill", "Oriel", "Senderwood",
      "Eastgate Shopping Centre", "Bedford Centre", "Bedford Village", "Key West Bedfordview"
    ],
    coordinates: { latitude: -26.1772, longitude: 28.1367 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Bedfordview luxury residential areas, Eastgate Shopping Centre, and Bedford Centre."
  },
  {
    id: "loc-gp-edenvale",
    slug: "edenvale",
    name: "Edenvale",
    type: "suburb",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1609", "1610"],
    suburbsOrAreas: [
      "Greenstone Hill", "Dowerglen", "Dunvegan", "Edenglen", "Hurlyvale", "Harmelia",
      "Highway Gardens", "Buurendal", "Edenvale Central", "Greenstone Shopping Centre",
      "Stoneridge Centre", "Meadowdale Mall", "Eden Mall"
    ],
    coordinates: { latitude: -26.1417, longitude: 28.1528 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Edenvale, Greenstone Hill, Dowerglen, and Greenstone retail shopping hubs."
  },
  {
    id: "loc-gp-alberton",
    slug: "alberton",
    name: "Alberton",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1449", "1450", "1448"],
    suburbsOrAreas: [
      "Meyersdal", "Alberton North", "New Redruth", "Florentia", "Verwoerdpark", "Raceview",
      "South Crest", "Elandspark", "Randhart", "General Alberts Park", "Brackenhurst", "Brackendowns",
      "Alrode", "Mayberry Park", "Palm Ridge", "Alberton City", "Mall at Newmarket", "Meyersdal Square",
      "Lemon Tree Shopping Centre", "Bracken City"
    ],
    coordinates: { latitude: -26.2625, longitude: 28.1278 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Alberton, Meyersdal, Brackenhurst, Brackendowns, and regional shopping malls."
  },
  {
    id: "loc-gp-brakpan",
    slug: "brakpan",
    name: "Brakpan",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1541", "1540"],
    suburbsOrAreas: [
      "Brakpan Central", "Dalview", "Brenthurst", "Anzac", "Brakpan North", "Sunair Park",
      "Kenleaf", "Dalpark", "Minnebron", "Helderwyk Estate", "Leachville", "Tsakane",
      "Carnival Mall", "Mall @ Carnival", "Carnival City", "Tsakane Mall"
    ],
    coordinates: { latitude: -26.2361, longitude: 28.3689 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Brakpan, Carnival Mall, Helderwyk Estate, Tsakane, and East Rand residential areas."
  },
  {
    id: "loc-gp-springs",
    slug: "springs",
    name: "Springs",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1559", "1560"],
    suburbsOrAreas: [
      "Springs Central", "Selection Park", "Strubenvale", "Casseldale", "Petersfield",
      "Geduld", "Pollak Park", "Bakerton", "Dersley", "Daggafontein", "KwaThema",
      "Springs Mall", "Palm Springs Shopping Centre", "KwaThema Square"
    ],
    coordinates: { latitude: -26.2500, longitude: 28.4333 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Springs, Selection Park, Petersfield, KwaThema, and Springs Mall shopping node."
  },
  {
    id: "loc-gp-nigel",
    slug: "nigel",
    name: "Nigel",
    type: "town",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1491", "1490"],
    suburbsOrAreas: [
      "Nigel Central", "Ferryvale", "Dunnottar", "Alra Park", "Duduza", "John Dube",
      "Nigel Shopping Centre", "Duduza Mall"
    ],
    coordinates: { latitude: -26.4300, longitude: 28.4772 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Nigel, Ferryvale, Dunnottar, Duduza, and surrounding community shopping centers."
  },
  {
    id: "loc-gp-tembisa",
    slug: "tembisa",
    name: "Tembisa",
    type: "township",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "City of Ekurhuleni",
    postalCodes: ["1632", "1663", "1665"],
    suburbsOrAreas: [
      "Winnie Mandela", "Clayville", "Hospital View", "Birch Acres", "Phomolong", "Moriting",
      "Esselen Park", "Mashimong", "Sedibeng", "Isithama", "Mehlareng", "Kaalfontein",
      "Ebony Park", "Ivory Park", "Tembisa Mall", "Phumulani Mall", "Birch Acres Mall", "Mega Mart Tembisa"
    ],
    coordinates: { latitude: -25.9964, longitude: 28.2268 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Tembisa township, Clayville, Ivory Park, and major East Rand retail shopping malls."
  },

  // ==========================================
  // WEST RAND DISTRICT
  // ==========================================
  {
    id: "loc-gp-krugersdorp",
    slug: "krugersdorp",
    name: "Krugersdorp",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "West Rand Region (Mogale City)",
    postalCodes: ["1739", "1740", "1747"],
    suburbsOrAreas: [
      "Noordheuwel", "Kenmare", "Rangeview", "Silverfields", "Featherbrooke Estate", "Chancliff",
      "Mindalore", "Monument", "Dan Pienaarville", "Krugersdorp West", "Krugersdorp North",
      "Rant-en-Dal", "Kagiso", "Rietvallei", "Munsieville", "Muldersdrift", "Magaliesburg", "Hekpoort",
      "Cradlestone Mall", "Key West Shopping Centre", "President Hyper Krugersdorp", "Valley View Shopping Centre", "Kagiso Mall"
    ],
    coordinates: { latitude: -26.0858, longitude: 27.7753 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Krugersdorp, Noordheuwel, Featherbrooke, Kagiso, Muldersdrift, and Cradlestone Mall."
  },
  {
    id: "loc-gp-randfontein",
    slug: "randfontein",
    name: "Randfontein",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "West Rand Region",
    postalCodes: ["1759", "1760", "1766"],
    suburbsOrAreas: [
      "Greenhills", "Helikon Park", "Homelake", "Culemborg Park", "Eikepark", "Finsbury",
      "Toekomsrus", "Mohlakeng", "Robinpark", "Westergloor", "Aureus",
      "Village Square Shopping Centre", "Tambotie Mall", "Umphakathi Mall"
    ],
    coordinates: { latitude: -26.1778, longitude: 27.7028 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Randfontein, Greenhills, Mohlakeng, and local retail shopping centers."
  },
  {
    id: "loc-gp-westonaria",
    slug: "westonaria",
    name: "Westonaria",
    type: "town",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "West Rand Region",
    postalCodes: ["1779", "1780"],
    suburbsOrAreas: [
      "Westonaria Central", "Glenharvie", "Venterspost", "Hillshaven", "Bekkersdal", "Simunye",
      "Westonaria Shopping Centre", "Bekkersdal Plaza"
    ],
    coordinates: { latitude: -26.3167, longitude: 27.6500 },
    climateZone: "Highveld Inland",
    dialingCode: "011",
    seoDescription: "Westonaria, Glenharvie, Bekkersdal, and West Rand mining communities."
  },
  {
    id: "loc-gp-carletonville",
    slug: "carletonville",
    name: "Carletonville & Fochville",
    type: "town",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "West Rand Region (Merafong)",
    postalCodes: ["2499", "2500", "2515"],
    suburbsOrAreas: [
      "Carletonville Central", "Oberholzer", "Blyvooruitzicht", "Welverdiend", "Fochville",
      "Khutsong", "Kokosi", "Carletonville Mall", "President Hyper Fochville"
    ],
    coordinates: { latitude: -26.3581, longitude: 27.3978 },
    climateZone: "Highveld Inland",
    dialingCode: "018",
    seoDescription: "Carletonville, Oberholzer, Fochville, Khutsong, and Merafong retail centers."
  },

  // ==========================================
  // SEDIBENG DISTRICT (VAAL TRIANGLE & MIDVAAL)
  // ==========================================
  {
    id: "loc-gp-vanderbijlpark",
    slug: "vanderbijlpark",
    name: "Vanderbijlpark",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "Sedibeng Region (Emfuleni)",
    postalCodes: ["1911", "1900"],
    suburbsOrAreas: [
      "SE Areas", "SW Areas", "CE Areas", "CW Areas", "Flora Gardens", "Stephanopark",
      "Bonanne", "Bophelong", "Boipatong", "Sharpeville", "Bedworth Park",
      "Vaal Mall", "Riverside Sun", "Vaal Gate Shopping Centre"
    ],
    coordinates: { latitude: -26.7117, longitude: 27.8378 },
    climateZone: "Highveld Inland",
    dialingCode: "016",
    seoDescription: "Vanderbijlpark, Vaal Mall, Sharpeville, and Vaal River industrial and residential hubs."
  },
  {
    id: "loc-gp-vereeniging",
    slug: "vereeniging",
    name: "Vereeniging",
    type: "city",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "Sedibeng Region (Emfuleni)",
    postalCodes: ["1939", "1930", "1984"],
    suburbsOrAreas: [
      "Three Rivers", "Three Rivers East", "Peacehaven", "Duncanville", "Arcon Park",
      "Falcon Ridge", "Waldrif", "Unitas Park", "Sonlandpark", "Rust-ter-Vaal", "Roshnee",
      "Dadaville", "Sebokeng", "Evaton", "Evaton North", "Palm Springs", "River Square Shopping Centre",
      "Mark Park Shopping Centre", "Sebokeng Plaza", "Evaton Mall"
    ],
    coordinates: { latitude: -26.6736, longitude: 27.9261 },
    climateZone: "Highveld Inland",
    dialingCode: "016",
    seoDescription: "Vereeniging, Three Rivers, Sebokeng, Evaton, and Vaal regional shopping centers."
  },
  {
    id: "loc-gp-meyerton",
    slug: "meyerton",
    name: "Meyerton",
    type: "town",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "Sedibeng Region (Midvaal)",
    postalCodes: ["1961", "1960"],
    suburbsOrAreas: [
      "Meyerton Central", "Golf Park", "Henley on Klip", "Rothdene", "Riversdale",
      "Noldick", "Sicelo", "De Deur", "Walkerville", "Vaal Marina", "Meyerton Mall", "Midvaal Square"
    ],
    coordinates: { latitude: -26.5833, longitude: 28.0167 },
    climateZone: "Highveld Inland",
    dialingCode: "016",
    seoDescription: "Meyerton, Henley on Klip, Midvaal agricultural and residential areas, and town shopping."
  },
  {
    id: "loc-gp-heidelberg",
    slug: "heidelberg",
    name: "Heidelberg",
    type: "town",
    province: "Gauteng",
    provinceAbbr: "GP",
    metroOrDistrict: "Sedibeng Region (Lesedi)",
    postalCodes: ["1441", "1438"],
    suburbsOrAreas: [
      "Heidelberg Central", "Jordaan Park", "Overkruin", "Bergsig", "Rensburg",
      "Ratanda", "Jameson Park", "Heidelberg Mall", "Victorian Shopping Centre"
    ],
    coordinates: { latitude: -26.5042, longitude: 28.3592 },
    climateZone: "Highveld Inland",
    dialingCode: "016",
    seoDescription: "Heidelberg, Jordaan Park, Overkruin, Ratanda, and Heidelberg Mall shopping node."
  }
];
