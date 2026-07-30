export interface LocationArea {
  id: string;
  name: string;
  type: "city" | "suburb" | "township" | "town";
  municipality: "City of Johannesburg" | "City of Tshwane" | "Ekurhuleni" | "West Rand" | "Sedibeng";
}

export const gautengLocations: LocationArea[] = [
  // === CITY OF JOHANNESBURG ===
  // Central & Surrounds
  { id: "johannesburg", name: "Johannesburg", type: "city", municipality: "City of Johannesburg" },
  { id: "johannesburg-cbd", name: "Johannesburg CBD", type: "suburb", municipality: "City of Johannesburg" },
  { id: "braamfontein", name: "Braamfontein", type: "suburb", municipality: "City of Johannesburg" },
  { id: "rosebank", name: "Rosebank", type: "suburb", municipality: "City of Johannesburg" },
  { id: "houghton-estate", name: "Houghton Estate", type: "suburb", municipality: "City of Johannesburg" },
  { id: "melville", name: "Melville", type: "suburb", municipality: "City of Johannesburg" },
  { id: "parktown", name: "Parktown", type: "suburb", municipality: "City of Johannesburg" },
  { id: "parkhurst", name: "Parkhurst", type: "suburb", municipality: "City of Johannesburg" },
  { id: "linden", name: "Linden", type: "suburb", municipality: "City of Johannesburg" },
  { id: "greenside", name: "Greenside", type: "suburb", municipality: "City of Johannesburg" },
  { id: "emmarentia", name: "Emmarentia", type: "suburb", municipality: "City of Johannesburg" },
  { id: "northcliff", name: "Northcliff", type: "suburb", municipality: "City of Johannesburg" },
  { id: "fairland", name: "Fairland", type: "suburb", municipality: "City of Johannesburg" },

  // Sandton & Northern Suburbs
  { id: "sandton", name: "Sandton", type: "city", municipality: "City of Johannesburg" },
  { id: "bryanston", name: "Bryanston", type: "suburb", municipality: "City of Johannesburg" },
  { id: "fourways", name: "Fourways", type: "suburb", municipality: "City of Johannesburg" },
  { id: "rivonia", name: "Rivonia", type: "suburb", municipality: "City of Johannesburg" },
  { id: "morningside", name: "Morningside", type: "suburb", municipality: "City of Johannesburg" },
  { id: "sandhurst", name: "Sandhurst", type: "suburb", municipality: "City of Johannesburg" },
  { id: "hyde-park", name: "Hyde Park", type: "suburb", municipality: "City of Johannesburg" },
  { id: "craighall-park", name: "Craighall Park", type: "suburb", municipality: "City of Johannesburg" },
  { id: "ilovo", name: "Illovo", type: "suburb", municipality: "City of Johannesburg" },
  { id: "woodmead", name: "Woodmead", type: "suburb", municipality: "City of Johannesburg" },
  { id: "sunninghill", name: "Sunninghill", type: "suburb", municipality: "City of Johannesburg" },
  { id: "lonehill", name: "Lonehill", type: "suburb", municipality: "City of Johannesburg" },
  { id: "broadacres", name: "Broadacres", type: "suburb", municipality: "City of Johannesburg" },
  { id: "dainfern", name: "Dainfern", type: "suburb", municipality: "City of Johannesburg" },
  { id: "paulshof", name: "Paulshof", type: "suburb", municipality: "City of Johannesburg" },
  { id: "douglasdale", name: "Douglasdale", type: "suburb", municipality: "City of Johannesburg" },
  
  // Midrand
  { id: "midrand", name: "Midrand", type: "city", municipality: "City of Johannesburg" },
  { id: "halfway-house", name: "Halfway House", type: "suburb", municipality: "City of Johannesburg" },
  { id: "kyalami", name: "Kyalami", type: "suburb", municipality: "City of Johannesburg" },
  { id: "waterfall-city", name: "Waterfall City", type: "suburb", municipality: "City of Johannesburg" },
  { id: "carlswald", name: "Carlswald", type: "suburb", municipality: "City of Johannesburg" },
  { id: "rabie-ridge", name: "Rabie Ridge", type: "township", municipality: "City of Johannesburg" },
  { id: "ivory-park", name: "Ivory Park", type: "township", municipality: "City of Johannesburg" },
  { id: "ebony-park", name: "Ebony Park", type: "township", municipality: "City of Johannesburg" },

  // Randburg
  { id: "randburg", name: "Randburg", type: "city", municipality: "City of Johannesburg" },
  { id: "cresta", name: "Cresta", type: "suburb", municipality: "City of Johannesburg" },
  { id: "ferndale", name: "Ferndale", type: "suburb", municipality: "City of Johannesburg" },
  { id: "blairgowrie", name: "Blairgowrie", type: "suburb", municipality: "City of Johannesburg" },
  { id: "randpark-ridge", name: "Randpark Ridge", type: "suburb", municipality: "City of Johannesburg" },
  { id: "olivedale", name: "Olivedale", type: "suburb", municipality: "City of Johannesburg" },
  { id: "sharonlea", name: "Sharonlea", type: "suburb", municipality: "City of Johannesburg" },

  // Roodepoort & West
  { id: "roodepoort", name: "Roodepoort", type: "city", municipality: "City of Johannesburg" },
  { id: "clearwater", name: "Clearwater", type: "suburb", municipality: "City of Johannesburg" },
  { id: "florida", name: "Florida", type: "suburb", municipality: "City of Johannesburg" },
  { id: "ruimsig", name: "Ruimsig", type: "suburb", municipality: "City of Johannesburg" },
  { id: "honeydew", name: "Honeydew", type: "suburb", municipality: "City of Johannesburg" },
  { id: "wtevredenpark", name: "Weltevredenpark", type: "suburb", municipality: "City of Johannesburg" },
  { id: "wilgeheuwel", name: "Wilgeheuwel", type: "suburb", municipality: "City of Johannesburg" },
  { id: "radiokop", name: "Radiokop", type: "suburb", municipality: "City of Johannesburg" },
  { id: "zandspruit", name: "Zandspruit", type: "township", municipality: "City of Johannesburg" },

  // South & Townships
  { id: "soweto", name: "Soweto", type: "township", municipality: "City of Johannesburg" },
  { id: "orlando", name: "Orlando", type: "township", municipality: "City of Johannesburg" },
  { id: "diepkloof", name: "Diepkloof", type: "township", municipality: "City of Johannesburg" },
  { id: "meadowlands", name: "Meadowlands", type: "township", municipality: "City of Johannesburg" },
  { id: "dobsonville", name: "Dobsonville", type: "township", municipality: "City of Johannesburg" },
  { id: "protea-glen", name: "Protea Glen", type: "township", municipality: "City of Johannesburg" },
  { id: "pimville", name: "Pimville", type: "township", municipality: "City of Johannesburg" },
  { id: "lenasia", name: "Lenasia", type: "township", municipality: "City of Johannesburg" },
  { id: "ennerdale", name: "Ennerdale", type: "township", municipality: "City of Johannesburg" },
  { id: "alexandra", name: "Alexandra", type: "township", municipality: "City of Johannesburg" },
  { id: "orange-farm", name: "Orange Farm", type: "township", municipality: "City of Johannesburg" },
  { id: "southgate", name: "Southgate", type: "suburb", municipality: "City of Johannesburg" },
  { id: "mondeor", name: "Mondeor", type: "suburb", municipality: "City of Johannesburg" },
  { id: "glenvista", name: "Glenvista", type: "suburb", municipality: "City of Johannesburg" },
  { id: "mulbarton", name: "Mulbarton", type: "suburb", municipality: "City of Johannesburg" },
  { id: "ormonde", name: "Ormonde", type: "suburb", municipality: "City of Johannesburg" },

  // === CITY OF TSHWANE (PRETORIA) ===
  { id: "pretoria", name: "Pretoria", type: "city", municipality: "City of Tshwane" },
  { id: "pretoria-cbd", name: "Pretoria CBD", type: "suburb", municipality: "City of Tshwane" },
  
  // Pretoria East
  { id: "menlyn", name: "Menlyn", type: "suburb", municipality: "City of Tshwane" },
  { id: "brooklyn", name: "Brooklyn", type: "suburb", municipality: "City of Tshwane" },
  { id: "hazelwood", name: "Hazelwood", type: "suburb", municipality: "City of Tshwane" },
  { id: "waterkloof", name: "Waterkloof", type: "suburb", municipality: "City of Tshwane" },
  { id: "lynnwood", name: "Lynnwood", type: "suburb", municipality: "City of Tshwane" },
  { id: "garsfontein", name: "Garsfontein", type: "suburb", municipality: "City of Tshwane" },
  { id: "faerie-glen", name: "Faerie Glen", type: "suburb", municipality: "City of Tshwane" },
  { id: "moreleta-park", name: "Moreleta Park", type: "suburb", municipality: "City of Tshwane" },
  { id: "equestria", name: "Equestria", type: "suburb", municipality: "City of Tshwane" },
  { id: "silver-lakes", name: "Silver Lakes", type: "suburb", municipality: "City of Tshwane" },
  { id: "wapadrand", name: "Wapadrand", type: "suburb", municipality: "City of Tshwane" },

  // Centurion
  { id: "centurion", name: "Centurion", type: "city", municipality: "City of Tshwane" },
  { id: "irene", name: "Irene", type: "suburb", municipality: "City of Tshwane" },
  { id: "highveld", name: "Highveld", type: "suburb", municipality: "City of Tshwane" },
  { id: "wierda-park", name: "Wierda Park", type: "suburb", municipality: "City of Tshwane" },
  { id: "zwaartkop", name: "Zwaartkop", type: "suburb", municipality: "City of Tshwane" },
  { id: "rooihuiskraal", name: "Rooihuiskraal", type: "suburb", municipality: "City of Tshwane" },
  { id: "clubview", name: "Clubview", type: "suburb", municipality: "City of Tshwane" },
  { id: "midstream-estate", name: "Midstream Estate", type: "suburb", municipality: "City of Tshwane" },
  { id: "eco-park", name: "Eco Park", type: "suburb", municipality: "City of Tshwane" },

  // Pretoria North & West
  { id: "akasia", name: "Akasia", type: "suburb", municipality: "City of Tshwane" },
  { id: "montana", name: "Montana", type: "suburb", municipality: "City of Tshwane" },
  { id: "pretoria-north", name: "Pretoria North", type: "suburb", municipality: "City of Tshwane" },
  { id: "karenpark", name: "Karenpark", type: "suburb", municipality: "City of Tshwane" },
  { id: "sinoville", name: "Sinoville", type: "suburb", municipality: "City of Tshwane" },
  { id: "annlin", name: "Annlin", type: "suburb", municipality: "City of Tshwane" },
  { id: "wonderboom", name: "Wonderboom", type: "suburb", municipality: "City of Tshwane" },
  { id: "magalieskruin", name: "Magalieskruin", type: "suburb", municipality: "City of Tshwane" },
  { id: "pretoria-west", name: "Pretoria West", type: "suburb", municipality: "City of Tshwane" },
  { id: "danville", name: "Danville", type: "suburb", municipality: "City of Tshwane" },
  { id: "proclamation-hill", name: "Proclamation Hill", type: "suburb", municipality: "City of Tshwane" },

  // Tshwane Townships
  { id: "mamelodi", name: "Mamelodi", type: "township", municipality: "City of Tshwane" },
  { id: "soshanguve", name: "Soshanguve", type: "township", municipality: "City of Tshwane" },
  { id: "atteridgeville", name: "Atteridgeville", type: "township", municipality: "City of Tshwane" },
  { id: "hammanskraal", name: "Hammanskraal", type: "township", municipality: "City of Tshwane" },
  { id: "mabopane", name: "Mabopane", type: "township", municipality: "City of Tshwane" },
  { id: "garankuwa", name: "Ga-Rankuwa", type: "township", municipality: "City of Tshwane" },
  { id: "winterveld", name: "Winterveld", type: "township", municipality: "City of Tshwane" },
  { id: "laudium", name: "Laudium", type: "township", municipality: "City of Tshwane" },
  { id: "olievenhoutbosch", name: "Olievenhoutbosch", type: "township", municipality: "City of Tshwane" },

  // === EKURHULENI (EAST RAND) ===
  // Kempton Park
  { id: "kempton-park", name: "Kempton Park", type: "city", municipality: "Ekurhuleni" },
  { id: "aston-manor", name: "Aston Manor", type: "suburb", municipality: "Ekurhuleni" },
  { id: "glen-marais", name: "Glen Marais", type: "suburb", municipality: "Ekurhuleni" },
  { id: "serengeti-estate", name: "Serengeti Estate", type: "suburb", municipality: "Ekurhuleni" },
  { id: "spartan", name: "Spartan", type: "suburb", municipality: "Ekurhuleni" },
  { id: "isando", name: "Isando", type: "suburb", municipality: "Ekurhuleni" },

  // Edenvale & Bedfordview
  { id: "edenvale", name: "Edenvale", type: "city", municipality: "Ekurhuleni" },
  { id: "bedfordview", name: "Bedfordview", type: "suburb", municipality: "Ekurhuleni" },
  { id: "greenstone-hill", name: "Greenstone Hill", type: "suburb", municipality: "Ekurhuleni" },
  { id: "dunvegan", name: "Dunvegan", type: "suburb", municipality: "Ekurhuleni" },
  { id: "edenglen", name: "Edenglen", type: "suburb", municipality: "Ekurhuleni" },
  { id: "hurlyvale", name: "Hurlyvale", type: "suburb", municipality: "Ekurhuleni" },

  // Boksburg
  { id: "boksburg", name: "Boksburg", type: "city", municipality: "Ekurhuleni" },
  { id: "sunward-park", name: "Sunward Park", type: "suburb", municipality: "Ekurhuleni" },
  { id: "bartlett", name: "Bartlett", type: "suburb", municipality: "Ekurhuleni" },
  { id: "bardene", name: "Bardene", type: "suburb", municipality: "Ekurhuleni" },
  { id: "parkrand", name: "Parkrand", type: "suburb", municipality: "Ekurhuleni" },
  { id: "bravpan", name: "Brakpan", type: "city", municipality: "Ekurhuleni" },

  // Benoni
  { id: "benoni", name: "Benoni", type: "city", municipality: "Ekurhuleni" },
  { id: "farrarmere", name: "Farrarmere", type: "suburb", municipality: "Ekurhuleni" },
  { id: "rnyfield", name: "Rynfield", type: "suburb", municipality: "Ekurhuleni" },
  { id: "northmead", name: "Northmead", type: "suburb", municipality: "Ekurhuleni" },
  { id: "lakefield", name: "Lakefield", type: "suburb", municipality: "Ekurhuleni" },

  // Germiston & Alberton
  { id: "germiston", name: "Germiston", type: "city", municipality: "Ekurhuleni" },
  { id: "primrose", name: "Primrose", type: "suburb", municipality: "Ekurhuleni" },
  { id: "alberton", name: "Alberton", type: "city", municipality: "Ekurhuleni" },
  { id: "meyersdal", name: "Meyersdal", type: "suburb", municipality: "Ekurhuleni" },
  { id: "brackendowns", name: "Brackendowns", type: "suburb", municipality: "Ekurhuleni" },
  { id: "brackenhurst", name: "Brackenhurst", type: "suburb", municipality: "Ekurhuleni" },
  { id: "randhart", name: "Randhart", type: "suburb", municipality: "Ekurhuleni" },
  { id: "new-redruth", name: "New Redruth", type: "suburb", municipality: "Ekurhuleni" },

  // Springs & Others
  { id: "springs", name: "Springs", type: "city", municipality: "Ekurhuleni" },
  { id: "nigel", name: "Nigel", type: "town", municipality: "Ekurhuleni" },
  { id: "duduza", name: "Duduza", type: "township", municipality: "Ekurhuleni" },

  // Ekurhuleni Townships
  { id: "tembisa", name: "Tembisa", type: "township", municipality: "Ekurhuleni" },
  { id: "vosloorus", name: "Vosloorus", type: "township", municipality: "Ekurhuleni" },
  { id: "katlehong", name: "Katlehong", type: "township", municipality: "Ekurhuleni" },
  { id: "thokoza", name: "Thokoza", type: "township", municipality: "Ekurhuleni" },
  { id: "daveyton", name: "Daveyton", type: "township", municipality: "Ekurhuleni" },
  { id: "tsakane", name: "Tsakane", type: "township", municipality: "Ekurhuleni" },
  { id: "kwa-thema", name: "Kwa-Thema", type: "township", municipality: "Ekurhuleni" },
  { id: "wattville", name: "Wattville", type: "township", municipality: "Ekurhuleni" },
  { id: "actonville", name: "Actonville", type: "township", municipality: "Ekurhuleni" },

  // === WEST RAND ===
  { id: "krugersdorp", name: "Krugersdorp", type: "city", municipality: "West Rand" },
  { id: "noordheuwel", name: "Noordheuwel", type: "suburb", municipality: "West Rand" },
  { id: "monument", name: "Monument", type: "suburb", municipality: "West Rand" },
  { id: "chancliff", name: "Chancliff", type: "suburb", municipality: "West Rand" },
  { id: "kenmare", name: "Kenmare", type: "suburb", municipality: "West Rand" },
  { id: "featherbrooke-estate", name: "Featherbrooke Estate", type: "suburb", municipality: "West Rand" },
  { id: "muldersdrift", name: "Muldersdrift", type: "suburb", municipality: "West Rand" },
  
  { id: "randfontein", name: "Randfontein", type: "town", municipality: "West Rand" },
  { id: "greenhills", name: "Greenhills", type: "suburb", municipality: "West Rand" },
  { id: "westonaria", name: "Westonaria", type: "town", municipality: "West Rand" },
  { id: "carletonville", name: "Carletonville", type: "town", municipality: "West Rand" },
  { id: "fochville", name: "Fochville", type: "town", municipality: "West Rand" },

  // West Rand Townships
  { id: "kagiso", name: "Kagiso", type: "township", municipality: "West Rand" },
  { id: "mohlakeng", name: "Mohlakeng", type: "township", municipality: "West Rand" },
  { id: "bekkersdal", name: "Bekkersdal", type: "township", municipality: "West Rand" },
  { id: "munsieville", name: "Munsieville", type: "township", municipality: "West Rand" },
  { id: "khutsong", name: "Khutsong", type: "township", municipality: "West Rand" },

  // === SEDIBENG (VAAL TRIANGLE & SOUTH) ===
  { id: "vereeniging", name: "Vereeniging", type: "city", municipality: "Sedibeng" },
  { id: "three-rivers", name: "Three Rivers", type: "suburb", municipality: "Sedibeng" },
  { id: "risiville", name: "Risiville", type: "suburb", municipality: "Sedibeng" },
  { id: "arcon-park", name: "Arcon Park", type: "suburb", municipality: "Sedibeng" },
  
  { id: "vanderbijlpark", name: "Vanderbijlpark", type: "city", municipality: "Sedibeng" },
  { id: "sw2", name: "SW2", type: "suburb", municipality: "Sedibeng" },
  { id: "sw5", name: "SW5", type: "suburb", municipality: "Sedibeng" },
  { id: "se8", name: "SE8", type: "suburb", municipality: "Sedibeng" },
  { id: "vaalpark", name: "Vaalpark", type: "suburb", municipality: "Sedibeng" },

  { id: "meyerton", name: "Meyerton", type: "town", municipality: "Sedibeng" },
  { id: "henley-on-klip", name: "Henley on Klip", type: "suburb", municipality: "Sedibeng" },
  { id: "vaal-marina", name: "Vaal Marina", type: "suburb", municipality: "Sedibeng" },

  { id: "heidelberg", name: "Heidelberg", type: "town", municipality: "Sedibeng" },
  { id: "jordaan-park", name: "Jordaan Park", type: "suburb", municipality: "Sedibeng" },

  // Sedibeng Townships
  { id: "sebokeng", name: "Sebokeng", type: "township", municipality: "Sedibeng" },
  { id: "evaton", name: "Evaton", type: "township", municipality: "Sedibeng" },
  { id: "sharpeville", name: "Sharpeville", type: "township", municipality: "Sedibeng" },
  { id: "bophelong", name: "Bophelong", type: "township", municipality: "Sedibeng" },
  { id: "boipatong", name: "Boipatong", type: "township", municipality: "Sedibeng" },
  { id: "ratanda", name: "Ratanda", type: "township", municipality: "Sedibeng" },
];
