export interface LocationArea {
  id: string;
  name: string;
  type: "city" | "suburb" | "township" | "town" | "mall";
  municipality: "City of Johannesburg" | "City of Tshwane" | "Ekurhuleni" | "West Rand" | "Sedibeng";
  region?: string;
  notes?: string;
}

export const gautengLocations: LocationArea[] = [
  {
    "id": "orlando-east",
    "name": "Orlando East",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Historic section home to Orlando Stadium and heritage sites"
  },
  {
    "id": "orlando-west",
    "name": "Orlando West",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Famous for Vilakazi Street and Hector Pieterson Memorial"
  },
  {
    "id": "diepkloof-zone-1",
    "name": "Diepkloof Zone 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone near Bara Hospital"
  },
  {
    "id": "diepkloof-zone-2",
    "name": "Diepkloof Zone 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone in Diepkloof"
  },
  {
    "id": "diepkloof-zone-3",
    "name": "Diepkloof Zone 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential and community zone"
  },
  {
    "id": "diepkloof-zone-4",
    "name": "Diepkloof Zone 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Well-established residential neighborhood"
  },
  {
    "id": "diepkloof-zone-5",
    "name": "Diepkloof Zone 5",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential area near main arterials"
  },
  {
    "id": "diepkloof-zone-6",
    "name": "Diepkloof Zone 6",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "High-density residential zone"
  },
  {
    "id": "diepkloof-extension",
    "name": "Diepkloof Extension",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Affluent residential enclave often termed Diepkloof Ext"
  },
  {
    "id": "meadowlands-east-zone-1",
    "name": "Meadowlands East Zone 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Historic Meadowlands residential zone"
  },
  {
    "id": "meadowlands-east-zone-2",
    "name": "Meadowlands East Zone 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential neighborhood"
  },
  {
    "id": "meadowlands-east-zone-3",
    "name": "Meadowlands East Zone 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "meadowlands-east-zone-4",
    "name": "Meadowlands East Zone 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "meadowlands-east-zone-5",
    "name": "Meadowlands East Zone 5",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential neighborhood"
  },
  {
    "id": "meadowlands-west-zone-6",
    "name": "Meadowlands West Zone 6",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "meadowlands-west-zone-7",
    "name": "Meadowlands West Zone 7",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential area"
  },
  {
    "id": "meadowlands-west-zone-8",
    "name": "Meadowlands West Zone 8",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "meadowlands-west-zone-9",
    "name": "Meadowlands West Zone 9",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential sector"
  },
  {
    "id": "meadowlands-west-zone-10",
    "name": "Meadowlands West Zone 10",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Western Meadowlands sector"
  },
  {
    "id": "dobsonville-ext-1",
    "name": "Dobsonville Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential section of Dobsonville"
  },
  {
    "id": "dobsonville-ext-2",
    "name": "Dobsonville Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential section"
  },
  {
    "id": "dobsonville-ext-3",
    "name": "Dobsonville Ext 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "dobsonville-gardens",
    "name": "Dobsonville Gardens",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Middle-class suburb in Dobsonville"
  },
  {
    "id": "pimville-zone-1",
    "name": "Pimville Zone 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Historic section near Soweto Country Club"
  },
  {
    "id": "pimville-zone-2",
    "name": "Pimville Zone 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "pimville-zone-3",
    "name": "Pimville Zone 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "pimville-zone-4",
    "name": "Pimville Zone 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "pimville-zone-5",
    "name": "Pimville Zone 5",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "pimville-zone-6",
    "name": "Pimville Zone 6",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "pimville-zone-7",
    "name": "Pimville Zone 7",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "klipspruit",
    "name": "Klipspruit",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Oldest formal township section of Soweto"
  },
  {
    "id": "klipspruit-west",
    "name": "Klipspruit West",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential area adjacent to Klipspruit"
  },
  {
    "id": "dube",
    "name": "Dube",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Historically affluent and prominent section of Soweto"
  },
  {
    "id": "jabavu",
    "name": "Jabavu",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Central Soweto neighborhood"
  },
  {
    "id": "central-western-jabavu",
    "name": "Central Western Jabavu",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Site of Morris Isaacson High School"
  },
  {
    "id": "jabulani",
    "name": "Jabulani",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Civic hub with hospital theatre and mall"
  },
  {
    "id": "zola-north",
    "name": "Zola North",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Vibrant northern sector of Zola"
  },
  {
    "id": "zola-south",
    "name": "Zola South",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential section"
  },
  {
    "id": "emdeni-north",
    "name": "Emdeni North",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential community"
  },
  {
    "id": "emdeni-south",
    "name": "Emdeni South",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential zone"
  },
  {
    "id": "naledi",
    "name": "Naledi",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Western terminus of the Soweto commuter rail line"
  },
  {
    "id": "naledi-ext-1",
    "name": "Naledi Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential extension"
  },
  {
    "id": "tladi",
    "name": "Tladi",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Established residential section"
  },
  {
    "id": "moletsane",
    "name": "Moletsane",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential area in central-west Soweto"
  },
  {
    "id": "mapetla",
    "name": "Mapetla",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Established residential sector"
  },
  {
    "id": "phiri",
    "name": "Phiri",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential section adjacent to Mapetla"
  },
  {
    "id": "senaoane",
    "name": "Senaoane",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential neighborhood"
  },
  {
    "id": "chiawelo-ext-1",
    "name": "Chiawelo Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential section of Chiawelo"
  },
  {
    "id": "chiawelo-ext-2",
    "name": "Chiawelo Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential section"
  },
  {
    "id": "chiawelo-ext-3",
    "name": "Chiawelo Ext 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential section"
  },
  {
    "id": "chiawelo-ext-4",
    "name": "Chiawelo Ext 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential section"
  },
  {
    "id": "dhlamini",
    "name": "Dhlamini",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential area"
  },
  {
    "id": "moroka",
    "name": "Moroka",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Historic township section"
  },
  {
    "id": "moroka-north",
    "name": "Moroka North",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential section"
  },
  {
    "id": "protea-glen-ext-1",
    "name": "Protea Glen Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto / West",
    "notes": "Fast-growing residential extension"
  },
  {
    "id": "protea-glen-ext-2",
    "name": "Protea Glen Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto / West",
    "notes": "Residential extension"
  },
  {
    "id": "protea-glen-ext-3",
    "name": "Protea Glen Ext 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto / West",
    "notes": "Residential extension"
  },
  {
    "id": "protea-glen-ext-4",
    "name": "Protea Glen Ext 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto / West",
    "notes": "Residential extension"
  },
  {
    "id": "protea-glen-ext-11",
    "name": "Protea Glen Ext 11",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto / West",
    "notes": "Residential extension"
  },
  {
    "id": "protea-glen-ext-16",
    "name": "Protea Glen Ext 16",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto / West",
    "notes": "Residential extension"
  },
  {
    "id": "protea-glen-ext-20",
    "name": "Protea Glen Ext 20",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto / West",
    "notes": "Residential extension"
  },
  {
    "id": "protea-north",
    "name": "Protea North",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Middle-class residential suburb"
  },
  {
    "id": "protea-south",
    "name": "Protea South",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Residential and informal settlement area"
  },
  {
    "id": "protea-city",
    "name": "Protea City",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Commercial and residential zone"
  },
  {
    "id": "braamfischerville-ext-1",
    "name": "Braamfischerville Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort / Soweto",
    "notes": "Developing residential township extension"
  },
  {
    "id": "braamfischerville-ext-2",
    "name": "Braamfischerville Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort / Soweto",
    "notes": "Residential extension"
  },
  {
    "id": "braamfischerville-phase-2",
    "name": "Braamfischerville Phase 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort / Soweto",
    "notes": "Residential community"
  },
  {
    "id": "eldorado-park-ext-1",
    "name": "Eldorado Park Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Established residential extension"
  },
  {
    "id": "eldorado-park-ext-2",
    "name": "Eldorado Park Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Residential area"
  },
  {
    "id": "eldorado-park-ext-3",
    "name": "Eldorado Park Ext 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Residential section"
  },
  {
    "id": "eldorado-park-ext-4",
    "name": "Eldorado Park Ext 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Residential section"
  },
  {
    "id": "eldorado-park-ext-5",
    "name": "Eldorado Park Ext 5",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Residential section"
  },
  {
    "id": "eldorado-park-ext-6",
    "name": "Eldorado Park Ext 6",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Residential section"
  },
  {
    "id": "eldorado-park-ext-7",
    "name": "Eldorado Park Ext 7",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Residential section"
  },
  {
    "id": "eldorado-park-ext-8",
    "name": "Eldorado Park Ext 8",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Residential section"
  },
  {
    "id": "eldorado-park-ext-9",
    "name": "Eldorado Park Ext 9",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Residential section"
  },
  {
    "id": "kliptown",
    "name": "Kliptown",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Historic site of the Freedom Charter signing"
  },
  {
    "id": "freedom-park",
    "name": "Freedom Park",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Informal and formal settlement area"
  },
  {
    "id": "alexandra-old-township",
    "name": "Alexandra Old Township",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Alexandra",
    "notes": "Historic high-density grid township"
  },
  {
    "id": "east-bank",
    "name": "East Bank",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Alexandra",
    "notes": "Modern bonded housing extension east of Jukskei River"
  },
  {
    "id": "far-east-bank",
    "name": "Far East Bank",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Alexandra",
    "notes": "Newer residential development in Alexandra"
  },
  {
    "id": "tsutsumani",
    "name": "Tsutsumani",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Alexandra",
    "notes": "Former All Africa Games athletes village turned housing"
  },
  {
    "id": "marlboro-gardens",
    "name": "Marlboro Gardens",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Alexandra / Sandton",
    "notes": "Established suburb bordering Alexandra"
  },
  {
    "id": "diepsloot-west-ext-1",
    "name": "Diepsloot West Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Dense urban residential extension"
  },
  {
    "id": "diepsloot-west-ext-2",
    "name": "Diepsloot West Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Residential sector"
  },
  {
    "id": "diepsloot-ext-3",
    "name": "Diepsloot Ext 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Residential sector"
  },
  {
    "id": "diepsloot-ext-4",
    "name": "Diepsloot Ext 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Residential sector"
  },
  {
    "id": "diepsloot-ext-5",
    "name": "Diepsloot Ext 5",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Residential sector"
  },
  {
    "id": "diepsloot-reception-area",
    "name": "Diepsloot Reception Area",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Settlement area in Diepsloot"
  },
  {
    "id": "riverside-view",
    "name": "Riverside View",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "High-density modern affordable housing development"
  },
  {
    "id": "cosmo-city-ext-1",
    "name": "Cosmo City Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Integrated mixed-income housing node"
  },
  {
    "id": "cosmo-city-ext-2",
    "name": "Cosmo City Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Residential extension"
  },
  {
    "id": "cosmo-city-ext-3",
    "name": "Cosmo City Ext 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Residential extension"
  },
  {
    "id": "cosmo-city-ext-4",
    "name": "Cosmo City Ext 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Residential extension"
  },
  {
    "id": "cosmo-city-ext-5",
    "name": "Cosmo City Ext 5",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Residential extension"
  },
  {
    "id": "cosmo-city-ext-6",
    "name": "Cosmo City Ext 6",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Residential extension"
  },
  {
    "id": "cosmo-city-ext-7",
    "name": "Cosmo City Ext 7",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Residential extension"
  },
  {
    "id": "zandspruit-informal-settlement",
    "name": "Zandspruit Informal Settlement",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Rapidly growing informal and developing sector"
  },
  {
    "id": "itsoseng",
    "name": "Itsoseng",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Settlement near Cosmo City and Malibongwe Drive"
  },
  {
    "id": "orange-farm-ext-1",
    "name": "Orange Farm Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section of Orange Farm"
  },
  {
    "id": "orange-farm-ext-2",
    "name": "Orange Farm Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "orange-farm-ext-3",
    "name": "Orange Farm Ext 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "orange-farm-ext-4",
    "name": "Orange Farm Ext 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "orange-farm-ext-6",
    "name": "Orange Farm Ext 6",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "orange-farm-ext-7",
    "name": "Orange Farm Ext 7",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "orange-farm-ext-8",
    "name": "Orange Farm Ext 8",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "drieziek-ext-1",
    "name": "Drieziek Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential township section in Orange Farm cluster"
  },
  {
    "id": "drieziek-ext-2",
    "name": "Drieziek Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "drieziek-ext-3",
    "name": "Drieziek Ext 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "drieziek-ext-4",
    "name": "Drieziek Ext 4",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "drieziek-ext-5",
    "name": "Drieziek Ext 5",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "poortjie",
    "name": "Poortjie",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Township south of Orange Farm"
  },
  {
    "id": "ennerdale-ext-1",
    "name": "Ennerdale Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential sector of Ennerdale"
  },
  {
    "id": "ennerdale-ext-2",
    "name": "Ennerdale Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential sector"
  },
  {
    "id": "ennerdale-ext-3",
    "name": "Ennerdale Ext 3",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential sector"
  },
  {
    "id": "ennerdale-ext-5",
    "name": "Ennerdale Ext 5",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential sector"
  },
  {
    "id": "ennerdale-ext-8",
    "name": "Ennerdale Ext 8",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential sector"
  },
  {
    "id": "ennerdale-ext-9",
    "name": "Ennerdale Ext 9",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential sector"
  },
  {
    "id": "mid-ennerdale",
    "name": "Mid-Ennerdale",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Central area of Ennerdale"
  },
  {
    "id": "lawley",
    "name": "Lawley",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential township north of Ennerdale"
  },
  {
    "id": "lawley-ext-1",
    "name": "Lawley Ext 1",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "lawley-ext-2",
    "name": "Lawley Ext 2",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Deep South JHB",
    "notes": "Residential section"
  },
  {
    "id": "lenasia-ext-1",
    "name": "Lenasia Ext 1",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Established suburban area"
  },
  {
    "id": "lenasia-ext-2",
    "name": "Lenasia Ext 2",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-ext-3",
    "name": "Lenasia Ext 3",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-ext-4",
    "name": "Lenasia Ext 4",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-ext-5",
    "name": "Lenasia Ext 5",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-ext-6",
    "name": "Lenasia Ext 6",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-ext-7",
    "name": "Lenasia Ext 7",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-ext-8",
    "name": "Lenasia Ext 8",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-ext-9",
    "name": "Lenasia Ext 9",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-ext-10",
    "name": "Lenasia Ext 10",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-ext-11",
    "name": "Lenasia Ext 11",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Residential suburb"
  },
  {
    "id": "lenasia-south-ext-1",
    "name": "Lenasia South Ext 1",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia South",
    "notes": "Residential area in Lenasia South"
  },
  {
    "id": "lenasia-south-ext-2",
    "name": "Lenasia South Ext 2",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia South",
    "notes": "Residential area"
  },
  {
    "id": "lenasia-south-ext-4",
    "name": "Lenasia South Ext 4",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia South",
    "notes": "Residential area"
  },
  {
    "id": "zakariyya-park",
    "name": "Zakariyya Park",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Lenasia South",
    "notes": "Suburban residential development"
  },
  {
    "id": "vlakfontein",
    "name": "Vlakfontein",
    "type": "township",
    "municipality": "City of Johannesburg",
    "region": "Lenasia / South JHB",
    "notes": "Developing residential township"
  },
  {
    "id": "johannesburg-cbd",
    "name": "Johannesburg CBD",
    "type": "city",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "Financial judicial and historic centre of Johannesburg"
  },
  {
    "id": "braamfontein",
    "name": "Braamfontein",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "Commercial civic arts and university precinct"
  },
  {
    "id": "newtown",
    "name": "Newtown",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "Cultural museum and theatre district"
  },
  {
    "id": "fordsburg",
    "name": "Fordsburg",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "Commercial and cultural hub with famed spice markets"
  },
  {
    "id": "marshalltown",
    "name": "Marshalltown",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "Historic corporate mining and banking head office district"
  },
  {
    "id": "hillbrow",
    "name": "Hillbrow",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "High-density residential flatland"
  },
  {
    "id": "berea",
    "name": "Berea",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "High-density residential suburb"
  },
  {
    "id": "yeoville",
    "name": "Yeoville",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "Multicultural vibrant suburb famous for Rockey Street"
  },
  {
    "id": "bellevue",
    "name": "Bellevue",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "Residential suburb east of Yeoville"
  },
  {
    "id": "observatory",
    "name": "Observatory",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central/East JHB",
    "notes": "Leafy historic residential suburb on the ridge"
  },
  {
    "id": "kensington",
    "name": "Kensington",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "East JHB",
    "notes": "Historic leafy suburb with Victorian architecture"
  },
  {
    "id": "malvern",
    "name": "Malvern",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "East JHB",
    "notes": "Long-standing eastern residential suburb"
  },
  {
    "id": "troyeville",
    "name": "Troyeville",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "East JHB",
    "notes": "Artistic and heritage-rich inner suburb"
  },
  {
    "id": "jeppestown",
    "name": "Jeppestown",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central/East JHB",
    "notes": "Historic industrial and residential suburb"
  },
  {
    "id": "maboneng-precinct",
    "name": "Maboneng Precinct",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central/East JHB",
    "notes": "Urban renewal cultural arts and culinary precinct"
  },
  {
    "id": "doornfontein",
    "name": "Doornfontein",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "Home to UJ Doornfontein campus and Ellis Park Stadium"
  },
  {
    "id": "auckland-park",
    "name": "Auckland Park",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "West-Central JHB",
    "notes": "Media hub home to SABC and University of Johannesburg"
  },
  {
    "id": "melville",
    "name": "Melville",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "West-Central JHB",
    "notes": "Bohemian suburb known for restaurants cafes and 7th Street"
  },
  {
    "id": "westdene",
    "name": "Westdene",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "West-Central JHB",
    "notes": "Leafy residential suburb near Westdene Dam"
  },
  {
    "id": "richmond",
    "name": "Richmond",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "West-Central JHB",
    "notes": "Small residential and office suburb"
  },
  {
    "id": "parktown",
    "name": "Parktown",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central JHB",
    "notes": "Historic mansions hospitals and Wits campuses"
  },
  {
    "id": "parktown-north",
    "name": "Parktown North",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Trendy dining and affluent residential suburb"
  },
  {
    "id": "parkhurst",
    "name": "Parkhurst",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Vibrant sidewalk cafe culture and boutique shopping along 4th Avenue"
  },
  {
    "id": "parkwood",
    "name": "Parkwood",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Art gallery strip on Jan Smuts and quiet residential streets"
  },
  {
    "id": "parkview",
    "name": "Parkview",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Leafy family suburb bordering Zoo Lake and George Hay Park"
  },
  {
    "id": "saxonwold",
    "name": "Saxonwold",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Affluent suburb home to the Johannesburg Zoo"
  },
  {
    "id": "forest-town",
    "name": "Forest Town",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Historic wooded suburb near the Zoo"
  },
  {
    "id": "westcliff",
    "name": "Westcliff",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Prestigious ridge suburb with historic stone mansions"
  },
  {
    "id": "houghton-estate",
    "name": "Houghton Estate",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Affluent suburb former residence of Nelson Mandela"
  },
  {
    "id": "killarney",
    "name": "Killarney",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Art Deco apartment suburb surrounding Killarney Mall"
  },
  {
    "id": "riviera",
    "name": "Riviera",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Quiet residential and medical node near Killarney"
  },
  {
    "id": "norwood",
    "name": "Norwood",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "North-Eastern Suburbs",
    "notes": "Vibrant Grant Avenue high street and dining"
  },
  {
    "id": "orange-grove",
    "name": "Orange Grove",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "North-Eastern Suburbs",
    "notes": "Established residential and commercial corridor on Louis Botha"
  },
  {
    "id": "sydenham",
    "name": "Sydenham",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "North-Eastern Suburbs",
    "notes": "Quiet residential suburb"
  },
  {
    "id": "highlands-north",
    "name": "Highlands North",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "North-Eastern Suburbs",
    "notes": "Established residential neighborhood"
  },
  {
    "id": "waverley-jhb",
    "name": "Waverley (JHB)",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "North-Eastern Suburbs",
    "notes": "Affluent tranquil residential enclave"
  },
  {
    "id": "bramley",
    "name": "Bramley",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Residential and light commercial suburb near M1"
  },
  {
    "id": "melrose",
    "name": "Melrose",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Affluent residential suburb bordering Melrose Arch"
  },
  {
    "id": "melrose-arch",
    "name": "Melrose Arch",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "High-end mixed-use precinct with open-air streets"
  },
  {
    "id": "illovo",
    "name": "Illovo",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Sports and commercial hub home to Wanderers Stadium"
  },
  {
    "id": "inanda",
    "name": "Inanda",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Ultra-exclusive equestrian and residential suburb"
  },
  {
    "id": "sandhurst",
    "name": "Sandhurst",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "One of Africa's most prestigious and wealthy suburbs"
  },
  {
    "id": "sandown",
    "name": "Sandown",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "Commercial and high-density residential suburb in Sandton CBD"
  },
  {
    "id": "sandton-cbd",
    "name": "Sandton CBD",
    "type": "city",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "Major financial hub of South Africa Africa's richest square mile"
  },
  {
    "id": "morningside",
    "name": "Morningside",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "Affluent residential suburb with gated estates"
  },
  {
    "id": "morningside-manor",
    "name": "Morningside Manor",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "Quiet residential suburb"
  },
  {
    "id": "riverclub",
    "name": "Riverclub",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "Leafy residential suburb with River Club Golf Course"
  },
  {
    "id": "duxberry",
    "name": "Duxberry",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "Enclosed secure residential suburb"
  },
  {
    "id": "hurlingham",
    "name": "Hurlingham",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "Affluent residential suburb"
  },
  {
    "id": "craighall",
    "name": "Craighall",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Leafy suburb bordering Braamfontein Spruit"
  },
  {
    "id": "craighall-park",
    "name": "Craighall Park",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Popular residential suburb with artisanal bistros"
  },
  {
    "id": "hyde-park",
    "name": "Hyde Park",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Exclusive luxury suburb home to Hyde Park Corner"
  },
  {
    "id": "dunkeld",
    "name": "Dunkeld",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Affluent leafy and tranquil suburb"
  },
  {
    "id": "dunkeld-west",
    "name": "Dunkeld West",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Boutique shopping and upmarket living"
  },
  {
    "id": "rosebank",
    "name": "Rosebank",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Major commercial artistic and pedestrian transit hub"
  },
  {
    "id": "bryanston-east",
    "name": "Bryanston East",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Bryanston",
    "notes": "Sprawling wealthy residential area"
  },
  {
    "id": "bryanston-west",
    "name": "Bryanston West",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Bryanston",
    "notes": "Large residential suburb with top schools and offices"
  },
  {
    "id": "mill-hill",
    "name": "Mill Hill",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Bryanston",
    "notes": "Secure gated community in Bryanston"
  },
  {
    "id": "rivonia",
    "name": "Rivonia",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Commercial retail and dining node along Rivonia Boulevard"
  },
  {
    "id": "edenburg",
    "name": "Edenburg",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Rivonia",
    "notes": "Commercial office park and residential area"
  },
  {
    "id": "woodmead",
    "name": "Woodmead",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Major retail value marts and golf club"
  },
  {
    "id": "gallo-manor",
    "name": "Gallo Manor",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Enclosed residential suburb near Wendywood"
  },
  {
    "id": "wendywood",
    "name": "Wendywood",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Established residential suburb"
  },
  {
    "id": "kelvin",
    "name": "Kelvin",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Sandton / East",
    "notes": "Residential suburb near Marlboro"
  },
  {
    "id": "sunninghill",
    "name": "Sunninghill",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "IT corporate headquarters and modern townhouse estates"
  },
  {
    "id": "paulshof",
    "name": "Paulshof",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Quiet leafy residential suburb near Rietfontein Ridge"
  },
  {
    "id": "petervale",
    "name": "Petervale",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Residential area bordering Bryanston"
  },
  {
    "id": "lonehill",
    "name": "Lonehill",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Secure residential suburb famous for Lonehill Koppie"
  },
  {
    "id": "beverley",
    "name": "Beverley",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Affluent residential estate suburb"
  },
  {
    "id": "pineslopes",
    "name": "Pineslopes",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Commercial and residential complex hub"
  },
  {
    "id": "fourways",
    "name": "Fourways",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Major entertainment commercial and retail hub"
  },
  {
    "id": "fourways-gardens",
    "name": "Fourways Gardens",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Pioneering secure lifestyle estate"
  },
  {
    "id": "dainfern",
    "name": "Dainfern",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Prestige golf estate and residential community"
  },
  {
    "id": "dainfern-valley",
    "name": "Dainfern Valley",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Upmarket gated residential community"
  },
  {
    "id": "broadacres",
    "name": "Broadacres",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Rapidly expanding residential and shopping node"
  },
  {
    "id": "cedar-lakes",
    "name": "Cedar Lakes",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Secure residential lifestyle estate"
  },
  {
    "id": "craigavon",
    "name": "Craigavon",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Far North JHB",
    "notes": "Townhouse and cluster home suburb"
  },
  {
    "id": "witkoppen",
    "name": "Witkoppen",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Residential area near Montecasino"
  },
  {
    "id": "magaliessig",
    "name": "Magaliessig",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Quiet suburb adjacent to Design Quarter"
  },
  {
    "id": "douglasdale",
    "name": "Douglasdale",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Fourways / Bryanston",
    "notes": "Popular family suburb with bustling dining nodes"
  },
  {
    "id": "jukskei-park",
    "name": "Jukskei Park",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg North",
    "notes": "Family residential suburb along the Jukskei"
  },
  {
    "id": "johannesburg-north",
    "name": "Johannesburg North",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg North",
    "notes": "Established suburb"
  },
  {
    "id": "olivedale",
    "name": "Olivedale",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg North",
    "notes": "Home to Olivedale Hospital and quiet suburbs"
  },
  {
    "id": "sharonlea",
    "name": "Sharonlea",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg North",
    "notes": "Enclosed safe family community"
  },
  {
    "id": "northriding",
    "name": "Northriding",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg North",
    "notes": "Fast-growing suburb with multiple gated complexes"
  },
  {
    "id": "northgate",
    "name": "Northgate",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg North",
    "notes": "Commercial and residential hub around Northgate Mall"
  },
  {
    "id": "sundowner",
    "name": "Sundowner",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg North",
    "notes": "Quiet leafy residential suburb"
  },
  {
    "id": "bromhof",
    "name": "Bromhof",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg North",
    "notes": "Popular family suburb"
  },
  {
    "id": "boskruin",
    "name": "Boskruin",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Affluent suburb famous for Boschkop koppie"
  },
  {
    "id": "randpark-ridge",
    "name": "Randpark Ridge",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Expansive leafy family suburb"
  },
  {
    "id": "randpark",
    "name": "Randpark",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Golf course suburb bordering Randpark Club"
  },
  {
    "id": "robin-hills",
    "name": "Robin Hills",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Leafy established residential suburb"
  },
  {
    "id": "robindale",
    "name": "Robindale",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Popular family suburb with excellent schools"
  },
  {
    "id": "jacanlee",
    "name": "Jacanlee",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Small quiet residential suburb"
  },
  {
    "id": "cresta",
    "name": "Cresta",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Major retail and commercial node"
  },
  {
    "id": "blackheath",
    "name": "Blackheath",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Residential suburb adjacent to Cresta"
  },
  {
    "id": "northcliff",
    "name": "Northcliff",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Affluent suburb situated on Northcliff Ridge with panoramic views"
  },
  {
    "id": "berario",
    "name": "Berario",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Quiet residential neighborhood"
  },
  {
    "id": "fairland",
    "name": "Fairland",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "North-West JHB",
    "notes": "Leafy family suburb home to major corporate offices"
  },
  {
    "id": "linden",
    "name": "Linden",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Trendy established suburb known for eateries and schools"
  },
  {
    "id": "victory-park",
    "name": "Victory Park",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Suburban area bordering Delta Park"
  },
  {
    "id": "greenside",
    "name": "Greenside",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Renowned restaurant strip and leafy homes"
  },
  {
    "id": "emmarentia",
    "name": "Emmarentia",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Northern Suburbs",
    "notes": "Famous for Emmarentia Dam and JHB Botanical Gardens"
  },
  {
    "id": "ferndale",
    "name": "Ferndale",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Commercial and residential spine of Randburg"
  },
  {
    "id": "blairgowrie",
    "name": "Blairgowrie",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Popular family-friendly suburb bordering Delta Park"
  },
  {
    "id": "bordeaux",
    "name": "Bordeaux",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Quiet enclosed residential community"
  },
  {
    "id": "kensington-b",
    "name": "Kensington 'B'",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Randburg",
    "notes": "Residential suburb near Bryanston"
  },
  {
    "id": "midrand-cbd",
    "name": "Midrand CBD",
    "type": "town",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Commercial hub along Old Pretoria Road"
  },
  {
    "id": "halfway-house",
    "name": "Halfway House",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Historic commercial and light industrial hub"
  },
  {
    "id": "waterfall-city",
    "name": "Waterfall City",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Smart city corporate headquarters and Mall of Africa"
  },
  {
    "id": "waterfall-country-estate",
    "name": "Waterfall Country Estate",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Prestige luxury lifestyle estate"
  },
  {
    "id": "waterfall-equestrian-estate",
    "name": "Waterfall Equestrian Estate",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Exclusive equestrian residential estate"
  },
  {
    "id": "carlswald",
    "name": "Carlswald",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Rapidly developing residential and lifestyle area"
  },
  {
    "id": "carlswald-north-estate",
    "name": "Carlswald North Estate",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Secure lifestyle estate"
  },
  {
    "id": "kyalami",
    "name": "Kyalami",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Famous for Kyalami Grand Prix Circuit and equestrian properties"
  },
  {
    "id": "kyalami-estates",
    "name": "Kyalami Estates",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Premier secure gated estate"
  },
  {
    "id": "kyalami-hills",
    "name": "Kyalami Hills",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Residential cluster development"
  },
  {
    "id": "barbeque-downs",
    "name": "Barbeque Downs",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Popular suburb close to Sunninghill and Waterfall"
  },
  {
    "id": "vorna-valley",
    "name": "Vorna Valley",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Established residential suburb adjacent to Waterfall"
  },
  {
    "id": "noordwyk",
    "name": "Noordwyk",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Large residential and commercial node"
  },
  {
    "id": "country-view",
    "name": "Country View",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Suburban area bordering Centurion"
  },
  {
    "id": "blue-hills",
    "name": "Blue Hills",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Equestrian estates and modern residential developments"
  },
  {
    "id": "crowthorne",
    "name": "Crowthorne",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Agricultural holdings and modern cluster developments"
  },
  {
    "id": "glen-austin",
    "name": "Glen Austin",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Tranquil smallholdings and bird sanctuary"
  },
  {
    "id": "grand-central",
    "name": "Grand Central",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Airport node and logistics hub"
  },
  {
    "id": "roodepoort-cbd",
    "name": "Roodepoort CBD",
    "type": "town",
    "municipality": "City of Johannesburg",
    "region": "West Rand / Roodepoort",
    "notes": "Administrative and historic town centre"
  },
  {
    "id": "florida",
    "name": "Florida",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Historic suburb with Florida Lake"
  },
  {
    "id": "florida-hills",
    "name": "Florida Hills",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Affluent hillside suburb"
  },
  {
    "id": "florida-park",
    "name": "Florida Park",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Established residential area"
  },
  {
    "id": "florida-glen",
    "name": "Florida Glen",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Quiet residential enclave near N1 highway"
  },
  {
    "id": "maraisburg",
    "name": "Maraisburg",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Historic mining town suburb"
  },
  {
    "id": "discovery",
    "name": "Discovery",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Established family residential area"
  },
  {
    "id": "horison",
    "name": "Horison",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Suburban residential neighborhood"
  },
  {
    "id": "horison-view",
    "name": "Horison View",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Residential suburb near Westgate"
  },
  {
    "id": "ontdekkerspark",
    "name": "Ontdekkerspark",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Residential suburb along Ontdekkers corridor"
  },
  {
    "id": "helderkruin",
    "name": "Helderkruin",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Scenic hillside suburb overlooking Kloofendal"
  },
  {
    "id": "kloofendal",
    "name": "Kloofendal",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Bordering Kloofendal Nature Reserve"
  },
  {
    "id": "roodekrans",
    "name": "Roodekrans",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Scenic suburb near Walter Sisulu Botanical Gardens"
  },
  {
    "id": "wilro-park",
    "name": "Wilro Park",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Popular family residential suburb"
  },
  {
    "id": "constantia-kloof",
    "name": "Constantia Kloof",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Hilltop corporate office node and affluent residences"
  },
  {
    "id": "weltevredenpark",
    "name": "Weltevredenpark",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Expansive family-focused residential area"
  },
  {
    "id": "allens-nek",
    "name": "Allens Nek",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Suburban area surrounding Clearwater Mall"
  },
  {
    "id": "strubens-valley",
    "name": "Strubens Valley",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Modern residential and retail node"
  },
  {
    "id": "little-falls",
    "name": "Little Falls",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Scenic residential area near the ridge"
  },
  {
    "id": "ruimsig",
    "name": "Ruimsig",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Upmarket suburb with golf course and botanical gardens"
  },
  {
    "id": "poortview",
    "name": "Poortview",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Exclusive luxury smallholdings and mansions"
  },
  {
    "id": "amorosa",
    "name": "Amorosa",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Growing residential townhouse sector"
  },
  {
    "id": "honeydew-ridge",
    "name": "Honeydew Ridge",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Modern residential townhouse development"
  },
  {
    "id": "radiokop",
    "name": "Radiokop",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Townhouse and family estate suburb"
  },
  {
    "id": "laser-park",
    "name": "Laser Park",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Key light industrial and commercial park"
  },
  {
    "id": "mondeor",
    "name": "Mondeor",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Scenic southern suburb in the Klipriviersberg valley"
  },
  {
    "id": "glenvista",
    "name": "Glenvista",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Affluent hillside suburb with golf course"
  },
  {
    "id": "bassonia",
    "name": "Bassonia",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Prestigious hillside suburb with luxury homes"
  },
  {
    "id": "mulbarton",
    "name": "Mulbarton",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Popular family suburb near Netcare Mulbarton"
  },
  {
    "id": "oakdene",
    "name": "Oakdene",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Suburban area home to The Glen Shopping Centre"
  },
  {
    "id": "winchester-hills",
    "name": "Winchester Hills",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Hilly residential suburb with panoramic views"
  },
  {
    "id": "suideroord",
    "name": "Suideroord",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Quiet residential neighborhood"
  },
  {
    "id": "ridgeway",
    "name": "Ridgeway",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Established southern residential suburb"
  },
  {
    "id": "robertsham",
    "name": "Robertsham",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Established multicultural suburb"
  },
  {
    "id": "rosettenville",
    "name": "Rosettenville",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Historic southern Johannesburg suburb"
  },
  {
    "id": "turffontein",
    "name": "Turffontein",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Home to the historic Turffontein Racecourse"
  },
  {
    "id": "kenilworth",
    "name": "Kenilworth",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Historic residential suburb"
  },
  {
    "id": "boomtown-booysens",
    "name": "Boomtown / Booysens",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Major industrial and warehousing node"
  },
  {
    "id": "crown-mines",
    "name": "Crown Mines",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "Central / South JHB",
    "notes": "Commercial wholesale and mining heritage area"
  },
  {
    "id": "aeroton",
    "name": "Aeroton",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Major manufacturing and logistics hub"
  },
  {
    "id": "aspen-lakes-aspen-hills-nature-estate",
    "name": "Aspen Lakes / Aspen Hills Nature Estate",
    "type": "suburb",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Luxury gated nature estate near Mall of the South"
  },
  {
    "id": "eye-of-africa",
    "name": "Eye of Africa",
    "type": "suburb",
    "municipality": "Sedibeng",
    "region": "Midvaal / South JHB",
    "notes": "Prestige golf and residential estate"
  },
  {
    "id": "pretoria-cbd",
    "name": "Pretoria CBD",
    "type": "city",
    "municipality": "City of Tshwane",
    "region": "Central Pretoria",
    "notes": "Administrative capital of South Africa"
  },
  {
    "id": "arcadia",
    "name": "Arcadia",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Central Pretoria",
    "notes": "Home to Union Buildings and embassies"
  },
  {
    "id": "sunnyside",
    "name": "Sunnyside",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Central Pretoria",
    "notes": "High-density residential and student hub"
  },
  {
    "id": "brooklyn",
    "name": "Brooklyn",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Affluent leafy suburb near UP"
  },
  {
    "id": "waterkloof",
    "name": "Waterkloof",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Prestigious diplomatic residential suburb"
  },
  {
    "id": "waterkloof-ridge",
    "name": "Waterkloof Ridge",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Upscale suburb overlooking the city"
  },
  {
    "id": "hatfield",
    "name": "Hatfield",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Central Pretoria",
    "notes": "Major student culture and university hub"
  },
  {
    "id": "lynnwood",
    "name": "Lynnwood",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Established affluent eastern suburb"
  },
  {
    "id": "menlo-park",
    "name": "Menlo Park",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Trendy established residential and dining node"
  },
  {
    "id": "menlyn",
    "name": "Menlyn",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Major commercial retail and lifestyle precinct"
  },
  {
    "id": "menlyn-maine",
    "name": "Menlyn Maine",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Green mixed-use smart city precinct"
  },
  {
    "id": "faerie-glen",
    "name": "Faerie Glen",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Large upmarket residential suburb"
  },
  {
    "id": "garsfontein",
    "name": "Garsfontein",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Popular family-friendly eastern suburb"
  },
  {
    "id": "moreleta-park",
    "name": "Moreleta Park",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Sprawling eastern suburb with nature reserve"
  },
  {
    "id": "silver-lakes",
    "name": "Silver Lakes",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Premier secure golf and wildlife estate"
  },
  {
    "id": "equestria",
    "name": "Equestria",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Modern townhouse and cluster home suburb"
  },
  {
    "id": "mamelodi-east",
    "name": "Mamelodi East",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "East Tshwane",
    "notes": "Eastern section of the expansive township"
  },
  {
    "id": "mamelodi-west",
    "name": "Mamelodi West",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "East Tshwane",
    "notes": "Western historic section of Mamelodi"
  },
  {
    "id": "nelmapius",
    "name": "Nelmapius",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "East Tshwane",
    "notes": "Township bordering Mamelodi and Silverton"
  },
  {
    "id": "silverton",
    "name": "Silverton",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "East Pretoria",
    "notes": "Industrial and residential hub"
  },
  {
    "id": "atteridgeville",
    "name": "Atteridgeville",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "West Tshwane",
    "notes": "Historic township west of Pretoria"
  },
  {
    "id": "saulsville",
    "name": "Saulsville",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "West Tshwane",
    "notes": "Section adjacent to Atteridgeville"
  },
  {
    "id": "pretoria-west",
    "name": "Pretoria West",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "West Pretoria",
    "notes": "Industrial and established residential node"
  },
  {
    "id": "danville",
    "name": "Danville",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "West Pretoria",
    "notes": "Established residential area"
  },
  {
    "id": "soshanguve-north",
    "name": "Soshanguve North",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "North Tshwane",
    "notes": "Northern block of the massive township"
  },
  {
    "id": "soshanguve-south",
    "name": "Soshanguve South",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "North Tshwane",
    "notes": "Southern residential area near TUT"
  },
  {
    "id": "soshanguve-block-h",
    "name": "Soshanguve Block H",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "North Tshwane",
    "notes": "Residential block"
  },
  {
    "id": "soshanguve-block-l",
    "name": "Soshanguve Block L",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "North Tshwane",
    "notes": "Residential block"
  },
  {
    "id": "mabopane",
    "name": "Mabopane",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "North Tshwane",
    "notes": "Major township hub on northern border"
  },
  {
    "id": "ga-rankuwa",
    "name": "Ga-Rankuwa",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "North-West Tshwane",
    "notes": "Industrial and academic (SMU) township"
  },
  {
    "id": "winterveld",
    "name": "Winterveld",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "North Tshwane",
    "notes": "Vast semi-rural settlement"
  },
  {
    "id": "hammanskraal",
    "name": "Hammanskraal",
    "type": "town",
    "municipality": "City of Tshwane",
    "region": "North Tshwane",
    "notes": "Large urban and rural northern node"
  },
  {
    "id": "temba",
    "name": "Temba",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "North Tshwane",
    "notes": "Township section within Hammanskraal"
  },
  {
    "id": "montana",
    "name": "Montana",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "North Pretoria",
    "notes": "Rapidly expanding northern suburb"
  },
  {
    "id": "sinoville",
    "name": "Sinoville",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "North Pretoria",
    "notes": "Established family suburb"
  },
  {
    "id": "annlin",
    "name": "Annlin",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "North Pretoria",
    "notes": "Popular residential suburb"
  },
  {
    "id": "wonderboom",
    "name": "Wonderboom",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "North Pretoria",
    "notes": "Suburb located south of the Magaliesberg"
  },
  {
    "id": "wonderboom-south",
    "name": "Wonderboom South",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "North Pretoria",
    "notes": "Established residential neighborhood"
  },
  {
    "id": "pretoria-north",
    "name": "Pretoria North",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "North Pretoria",
    "notes": "Historic northern hub"
  },
  {
    "id": "rietfontein",
    "name": "Rietfontein",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Pretoria Moot",
    "notes": "Central neighborhood in the Moot"
  },
  {
    "id": "waverley-pta",
    "name": "Waverley (PTA)",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Pretoria Moot",
    "notes": "Leafy suburb along the mountain base"
  },
  {
    "id": "queenswood",
    "name": "Queenswood",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Pretoria Moot",
    "notes": "Centrally located quiet suburb"
  },
  {
    "id": "villieria",
    "name": "Villieria",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Pretoria Moot",
    "notes": "Established family-oriented neighborhood"
  },
  {
    "id": "centurion-cbd",
    "name": "Centurion CBD",
    "type": "town",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Commercial center surrounding Centurion Mall and Lake"
  },
  {
    "id": "irene",
    "name": "Irene",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Historic village with famous dairy farm"
  },
  {
    "id": "lyttelton",
    "name": "Lyttelton",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "One of Centurion's oldest suburbs"
  },
  {
    "id": "highveld",
    "name": "Highveld",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Commercial and residential technology park node"
  },
  {
    "id": "wierdapark",
    "name": "Wierdapark",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Large popular residential family suburb"
  },
  {
    "id": "rooihuiskraal",
    "name": "Rooihuiskraal",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Historic and well-established family suburb"
  },
  {
    "id": "eldoraigne",
    "name": "Eldoraigne",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Affluent and sought-after residential suburb"
  },
  {
    "id": "clubview",
    "name": "Clubview",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Established residential area with golf club"
  },
  {
    "id": "zwartkop",
    "name": "Zwartkop",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Residential and commercial hub near highway"
  },
  {
    "id": "doringkloof",
    "name": "Doringkloof",
    "type": "suburb",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Quiet family neighborhood"
  },
  {
    "id": "olievenhoutbosch",
    "name": "Olievenhoutbosch",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "Centurion South",
    "notes": "Fast-growing high-density township near Midrand"
  },
  {
    "id": "cullinan",
    "name": "Cullinan",
    "type": "town",
    "municipality": "City of Tshwane",
    "region": "East Tshwane",
    "notes": "Historic diamond mining town"
  },
  {
    "id": "refilwe",
    "name": "Refilwe",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "East Tshwane",
    "notes": "Township serving Cullinan"
  },
  {
    "id": "bronkhorstspruit",
    "name": "Bronkhorstspruit",
    "type": "town",
    "municipality": "City of Tshwane",
    "region": "East Tshwane",
    "notes": "Agricultural and cultural hub (Nan Hua Temple)"
  },
  {
    "id": "zithobeni",
    "name": "Zithobeni",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "East Tshwane",
    "notes": "Township north of Bronkhorstspruit"
  },
  {
    "id": "ekangala",
    "name": "Ekangala",
    "type": "township",
    "municipality": "City of Tshwane",
    "region": "East Tshwane",
    "notes": "Large township east of Bronkhorstspruit"
  },
  {
    "id": "germiston-cbd",
    "name": "Germiston CBD",
    "type": "town",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Administrative headquarters of Ekurhuleni"
  },
  {
    "id": "bedfordview",
    "name": "Bedfordview",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Highly affluent residential and corporate suburb"
  },
  {
    "id": "edenvale",
    "name": "Edenvale",
    "type": "town",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Established residential and commercial town"
  },
  {
    "id": "greenstone-hill",
    "name": "Greenstone Hill",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Modern rapidly developing residential and retail hub"
  },
  {
    "id": "modderfontein",
    "name": "Modderfontein",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Historic explosive factory town turning into smart city"
  },
  {
    "id": "kempton-park-cbd",
    "name": "Kempton Park CBD",
    "type": "town",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Commercial and logistics hub near OR Tambo Airport"
  },
  {
    "id": "aston-manor",
    "name": "Aston Manor",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Quiet leafy residential suburb in Kempton"
  },
  {
    "id": "glen-marais",
    "name": "Glen Marais",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Popular residential suburb with estates"
  },
  {
    "id": "norkem-park",
    "name": "Norkem Park",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Established family residential area"
  },
  {
    "id": "birchleigh",
    "name": "Birchleigh",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Suburban neighborhood in Kempton Park"
  },
  {
    "id": "boksburg-cbd",
    "name": "Boksburg CBD",
    "type": "town",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Historic mining and industrial town"
  },
  {
    "id": "sunward-park",
    "name": "Sunward Park",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Upmarket residential suburb in Boksburg"
  },
  {
    "id": "parkrand",
    "name": "Parkrand",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Family-friendly residential area"
  },
  {
    "id": "bartlett",
    "name": "Bartlett",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Commercial and residential node in Boksburg"
  },
  {
    "id": "beyers-park",
    "name": "Beyers Park",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Established residential suburb"
  },
  {
    "id": "benoni-cbd",
    "name": "Benoni CBD",
    "type": "town",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Known for lakes and historic commercial center"
  },
  {
    "id": "farrarmere",
    "name": "Farrarmere",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Affluent family suburb in Benoni"
  },
  {
    "id": "rynfield",
    "name": "Rynfield",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Popular residential suburb with equestrian holdings"
  },
  {
    "id": "lakefield",
    "name": "Lakefield",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Upmarket suburb near the golf course and lakes"
  },
  {
    "id": "brakpan-cbd",
    "name": "Brakpan CBD",
    "type": "town",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Historic mining and manufacturing town"
  },
  {
    "id": "dalpark",
    "name": "Dalpark",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Residential suburb near Mall @ Carnival"
  },
  {
    "id": "springs-cbd",
    "name": "Springs CBD",
    "type": "town",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Art Deco architecture and historic mining town"
  },
  {
    "id": "selcourt",
    "name": "Selcourt",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Affluent leafy residential area in Springs"
  },
  {
    "id": "strubenvale",
    "name": "Strubenvale",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Established family suburb"
  },
  {
    "id": "nigel",
    "name": "Nigel",
    "type": "town",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Heavy industry and mining town on the far East Rand"
  },
  {
    "id": "alberton-cbd",
    "name": "Alberton CBD",
    "type": "town",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Industrial and residential town south of JHB"
  },
  {
    "id": "brackenhurst",
    "name": "Brackenhurst",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Expansive family-friendly residential suburb"
  },
  {
    "id": "brackendowns",
    "name": "Brackendowns",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Popular residential neighborhood"
  },
  {
    "id": "meyersdal",
    "name": "Meyersdal",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Affluent hillside suburb and nature estate"
  },
  {
    "id": "randhart",
    "name": "Randhart",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Quiet family residential area"
  },
  {
    "id": "new-redruth",
    "name": "New Redruth",
    "type": "suburb",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Centrally located modern residential suburb"
  },
  {
    "id": "tembisa",
    "name": "Tembisa",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand / North",
    "notes": "Second largest township in Gauteng"
  },
  {
    "id": "tembisa-winnie-mandela-section",
    "name": "Tembisa Winnie Mandela Section",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Large residential section"
  },
  {
    "id": "tembisa-hospital-view",
    "name": "Tembisa Hospital View",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Residential area near the hospital"
  },
  {
    "id": "katlehong",
    "name": "Katlehong",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand / South",
    "notes": "Massive high-density township"
  },
  {
    "id": "vosloorus",
    "name": "Vosloorus",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand / South",
    "notes": "Established township adjacent to Boksburg"
  },
  {
    "id": "thokoza",
    "name": "Thokoza",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand / South",
    "notes": "Township near Alberton and Katlehong"
  },
  {
    "id": "daveyton",
    "name": "Daveyton",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Prominent cultural township near Benoni"
  },
  {
    "id": "etwatwa",
    "name": "Etwatwa",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Township northeast of Daveyton"
  },
  {
    "id": "kwathema",
    "name": "KwaThema",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Township southwest of Springs"
  },
  {
    "id": "tsakane",
    "name": "Tsakane",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Large residential township south of Brakpan"
  },
  {
    "id": "duduza",
    "name": "Duduza",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Township west of Nigel"
  },
  {
    "id": "reiger-park",
    "name": "Reiger Park",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Historic Coloured residential community in Boksburg"
  },
  {
    "id": "wattville",
    "name": "Wattville",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand",
    "notes": "Historic township near Benoni"
  },
  {
    "id": "ivory-park",
    "name": "Ivory Park",
    "type": "township",
    "municipality": "Ekurhuleni",
    "region": "East Rand / Midrand Border",
    "notes": "Densely populated township near Midrand"
  },
  {
    "id": "krugersdorp-cbd",
    "name": "Krugersdorp CBD",
    "type": "town",
    "municipality": "West Rand",
    "region": "West Rand",
    "notes": "Administrative capital of the West Rand (Mogale City)"
  },
  {
    "id": "monument",
    "name": "Monument",
    "type": "suburb",
    "municipality": "West Rand",
    "region": "Krugersdorp",
    "notes": "Established residential area near the Paardekraal Monument"
  },
  {
    "id": "noordheuwel",
    "name": "Noordheuwel",
    "type": "suburb",
    "municipality": "West Rand",
    "region": "Krugersdorp",
    "notes": "Affluent hillside residential suburb"
  },
  {
    "id": "rangeview",
    "name": "Rangeview",
    "type": "suburb",
    "municipality": "West Rand",
    "region": "Krugersdorp",
    "notes": "Popular family suburb bordering the Walter Sisulu botanical gardens"
  },
  {
    "id": "kagiso",
    "name": "Kagiso",
    "type": "township",
    "municipality": "West Rand",
    "region": "Krugersdorp",
    "notes": "Major township serving Mogale City"
  },
  {
    "id": "munsieville",
    "name": "Munsieville",
    "type": "township",
    "municipality": "West Rand",
    "region": "Krugersdorp",
    "notes": "One of the oldest historic townships in Gauteng"
  },
  {
    "id": "muldersdrift",
    "name": "Muldersdrift",
    "type": "town",
    "municipality": "West Rand",
    "region": "Krugersdorp / Cradle",
    "notes": "Scenic semi-rural area known for wedding venues"
  },
  {
    "id": "magaliesburg",
    "name": "Magaliesburg",
    "type": "town",
    "municipality": "West Rand",
    "region": "West Rand",
    "notes": "Tourist agricultural and getaway village"
  },
  {
    "id": "randfontein-cbd",
    "name": "Randfontein CBD",
    "type": "town",
    "municipality": "West Rand",
    "region": "West Rand",
    "notes": "Mining and industrial town (Rand West City)"
  },
  {
    "id": "greenhills",
    "name": "Greenhills",
    "type": "suburb",
    "municipality": "West Rand",
    "region": "Randfontein",
    "notes": "Established residential suburb"
  },
  {
    "id": "helikon-park",
    "name": "Helikon Park",
    "type": "suburb",
    "municipality": "West Rand",
    "region": "Randfontein",
    "notes": "Quiet family neighborhood"
  },
  {
    "id": "mohlakeng",
    "name": "Mohlakeng",
    "type": "township",
    "municipality": "West Rand",
    "region": "Randfontein",
    "notes": "Township situated south of Randfontein"
  },
  {
    "id": "westonaria-cbd",
    "name": "Westonaria CBD",
    "type": "town",
    "municipality": "West Rand",
    "region": "West Rand",
    "notes": "Gold mining town"
  },
  {
    "id": "bekkersdal",
    "name": "Bekkersdal",
    "type": "township",
    "municipality": "West Rand",
    "region": "Westonaria",
    "notes": "Mining community and informal/formal township"
  },
  {
    "id": "carletonville-cbd",
    "name": "Carletonville CBD",
    "type": "town",
    "municipality": "West Rand",
    "region": "West Rand",
    "notes": "Center of the Merafong City local municipality"
  },
  {
    "id": "blybank",
    "name": "Blybank",
    "type": "suburb",
    "municipality": "West Rand",
    "region": "Carletonville",
    "notes": "Residential suburb serving mine workers"
  },
  {
    "id": "khutsong",
    "name": "Khutsong",
    "type": "township",
    "municipality": "West Rand",
    "region": "Carletonville",
    "notes": "Township serving the deep gold mining sector"
  },
  {
    "id": "fochville",
    "name": "Fochville",
    "type": "town",
    "municipality": "West Rand",
    "region": "West Rand",
    "notes": "Agricultural and mining town in Merafong"
  },
  {
    "id": "kokosi",
    "name": "Kokosi",
    "type": "township",
    "municipality": "West Rand",
    "region": "Fochville",
    "notes": "Township adjacent to Fochville"
  },
  {
    "id": "vereeniging-cbd",
    "name": "Vereeniging CBD",
    "type": "town",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Major industrial commercial and administrative hub (Emfuleni)"
  },
  {
    "id": "three-rivers",
    "name": "Three Rivers",
    "type": "suburb",
    "municipality": "Sedibeng",
    "region": "Vereeniging",
    "notes": "Affluent residential suburb near the river"
  },
  {
    "id": "three-rivers-proper",
    "name": "Three Rivers Proper",
    "type": "suburb",
    "municipality": "Sedibeng",
    "region": "Vereeniging",
    "notes": "Prestigious riverside living"
  },
  {
    "id": "falcon-ridge",
    "name": "Falcon Ridge",
    "type": "suburb",
    "municipality": "Sedibeng",
    "region": "Vereeniging",
    "notes": "Quiet family residential area"
  },
  {
    "id": "vanderbijlpark-cbd",
    "name": "Vanderbijlpark CBD",
    "type": "town",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Industrial town built around the Iscor steelworks"
  },
  {
    "id": "se1-vanderbijlpark",
    "name": "SE1 (Vanderbijlpark)",
    "type": "suburb",
    "municipality": "Sedibeng",
    "region": "Vanderbijlpark",
    "notes": "Residential zone in Vanderbijlpark"
  },
  {
    "id": "se2-vanderbijlpark",
    "name": "SE2 (Vanderbijlpark)",
    "type": "suburb",
    "municipality": "Sedibeng",
    "region": "Vanderbijlpark",
    "notes": "Residential zone in Vanderbijlpark"
  },
  {
    "id": "sw1-vanderbijlpark",
    "name": "SW1 (Vanderbijlpark)",
    "type": "suburb",
    "municipality": "Sedibeng",
    "region": "Vanderbijlpark",
    "notes": "Residential zone in Vanderbijlpark"
  },
  {
    "id": "sw5-vanderbijlpark",
    "name": "SW5 (Vanderbijlpark)",
    "type": "suburb",
    "municipality": "Sedibeng",
    "region": "Vanderbijlpark",
    "notes": "Upmarket residential neighborhood"
  },
  {
    "id": "sebokeng",
    "name": "Sebokeng",
    "type": "township",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Extensive township zone consisting of multiple blocks"
  },
  {
    "id": "sebokeng-zone-7",
    "name": "Sebokeng Zone 7",
    "type": "township",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Residential section of Sebokeng"
  },
  {
    "id": "sebokeng-zone-10",
    "name": "Sebokeng Zone 10",
    "type": "township",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Residential section of Sebokeng"
  },
  {
    "id": "sebokeng-zone-14",
    "name": "Sebokeng Zone 14",
    "type": "township",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Residential section of Sebokeng"
  },
  {
    "id": "evaton",
    "name": "Evaton",
    "type": "township",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Historic and vast township in Emfuleni"
  },
  {
    "id": "sharpeville",
    "name": "Sharpeville",
    "type": "township",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Historic township of immense national significance"
  },
  {
    "id": "boipatong",
    "name": "Boipatong",
    "type": "township",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Residential township near Vanderbijlpark"
  },
  {
    "id": "bophelong",
    "name": "Bophelong",
    "type": "township",
    "municipality": "Sedibeng",
    "region": "Vaal Triangle",
    "notes": "Township southwest of Vanderbijlpark"
  },
  {
    "id": "meyerton",
    "name": "Meyerton",
    "type": "town",
    "municipality": "Sedibeng",
    "region": "Midvaal",
    "notes": "Administrative center of Midvaal municipality"
  },
  {
    "id": "henley-on-klip",
    "name": "Henley on Klip",
    "type": "suburb",
    "municipality": "Sedibeng",
    "region": "Midvaal",
    "notes": "Picturesque village along the Klip River"
  },
  {
    "id": "heidelberg-cbd",
    "name": "Heidelberg CBD",
    "type": "town",
    "municipality": "Sedibeng",
    "region": "Lesedi",
    "notes": "Historic town and agricultural hub of Lesedi municipality"
  },
  {
    "id": "ratanda",
    "name": "Ratanda",
    "type": "township",
    "municipality": "Sedibeng",
    "region": "Heidelberg",
    "notes": "Township serving Heidelberg"
  },
  {
    "id": "devon",
    "name": "Devon",
    "type": "town",
    "municipality": "Sedibeng",
    "region": "Lesedi",
    "notes": "Small farming town on the eastern edge of Gauteng"
  },
  {
    "id": "sandton-city-nelson-mandela-square",
    "name": "Sandton City & Nelson Mandela Square",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "One of Africa's premier flagship luxury shopping malls"
  },
  {
    "id": "mall-of-africa",
    "name": "Mall of Africa",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Waterfall City (Midrand)",
    "notes": "Largest single-phase retail mall built in South Africa"
  },
  {
    "id": "menlyn-park-shopping-centre",
    "name": "Menlyn Park Shopping Centre",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Menlyn (Pretoria)",
    "notes": "Massive super-regional retail and entertainment center"
  },
  {
    "id": "eastgate-shopping-centre",
    "name": "Eastgate Shopping Centre",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Bedfordview",
    "notes": "Historic regional mall serving East Rand and eastern JHB"
  },
  {
    "id": "fourways-mall",
    "name": "Fourways Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Expansive super-regional mall and entertainment hub"
  },
  {
    "id": "cresta-shopping-centre",
    "name": "Cresta Shopping Centre",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Randburg / Cresta",
    "notes": "Long-standing prominent regional shopping center"
  },
  {
    "id": "rosebank-mall-the-zone-rosebank",
    "name": "Rosebank Mall & The Zone @ Rosebank",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Rosebank",
    "notes": "Connected urban retail leisure and open-air pedestrian zone"
  },
  {
    "id": "hyde-park-corner",
    "name": "Hyde Park Corner",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Hyde Park",
    "notes": "Boutique luxury center famous for designer brands"
  },
  {
    "id": "clearwater-mall",
    "name": "Clearwater Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort / Strubens Valley",
    "notes": "Major regional lifestyle and shopping destination"
  },
  {
    "id": "brooklyn-mall",
    "name": "Brooklyn Mall",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Brooklyn (Pretoria)",
    "notes": "Classic upscale shopping mall in Pretoria East"
  },
  {
    "id": "the-grove-mall",
    "name": "The Grove Mall",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Pretoria East (Equestria)",
    "notes": "Retail centre featuring Gauteng's standard ice rink"
  },
  {
    "id": "woodlands-boulevard",
    "name": "Woodlands Boulevard",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Pretoria East",
    "notes": "Regional shopping and cinema centre"
  },
  {
    "id": "centurion-mall",
    "name": "Centurion Mall",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Centurion CBD",
    "notes": "Sprawling open-air and covered waterfront retail centre"
  },
  {
    "id": "east-rand-mall",
    "name": "East Rand Mall",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Boksburg",
    "notes": "Key retail and entertainment anchor of the East Rand"
  },
  {
    "id": "lakeside-mall",
    "name": "Lakeside Mall",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Benoni",
    "notes": "Waterfront mall themed around a Mississippi steamboat"
  },
  {
    "id": "mall-of-the-south",
    "name": "Mall of the South",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Aspen Hills / JHB South",
    "notes": "Modern regional mall serving southern Johannesburg"
  },
  {
    "id": "the-glen-shopping-centre",
    "name": "The Glen Shopping Centre",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Oakdene / JHB South",
    "notes": "Major regional retail destination in the south"
  },
  {
    "id": "key-west-shopping-centre",
    "name": "Key West Shopping Centre",
    "type": "mall",
    "municipality": "West Rand",
    "region": "Krugersdorp",
    "notes": "Major retail and lifestyle mall in the West Rand"
  },
  {
    "id": "cradlestone-mall",
    "name": "Cradlestone Mall",
    "type": "mall",
    "municipality": "West Rand",
    "region": "Mogale City / Krugersdorp",
    "notes": "Large regional mall near the Cradle of Humankind"
  },
  {
    "id": "vaal-mall",
    "name": "Vaal Mall",
    "type": "mall",
    "municipality": "Sedibeng",
    "region": "Vanderbijlpark",
    "notes": "Premier shopping destination of the Vaal Triangle"
  },
  {
    "id": "maponya-mall",
    "name": "Maponya Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Klipspruit (Soweto)",
    "notes": "Landmark super-regional mall in Soweto"
  },
  {
    "id": "jabulani-mall",
    "name": "Jabulani Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Jabulani (Soweto)",
    "notes": "Key community and civic shopping centre in Soweto"
  },
  {
    "id": "irene-village-mall",
    "name": "Irene Village Mall",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Open-air lifestyle centre with a village feel"
  },
  {
    "id": "southgate-mall",
    "name": "Southgate Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "JHB South",
    "notes": "Long-standing regional mall in the south"
  },
  {
    "id": "westgate",
    "name": "Westgate",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Roodepoort",
    "notes": "Major established super-regional mall in the West Rand"
  },
  {
    "id": "kolonnade-shopping-centre",
    "name": "Kolonnade Shopping Centre",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Montana (Pretoria)",
    "notes": "Large shopping and entertainment centre in the north"
  },
  {
    "id": "wonderpark-shopping-centre",
    "name": "Wonderpark Shopping Centre",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Karenpark (Pretoria)",
    "notes": "Major retail hub serving northern Pretoria"
  },
  {
    "id": "greenstone-shopping-mall",
    "name": "Greenstone Shopping Mall",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Edenvale / Greenstone Hill",
    "notes": "Large modern mall serving Edenvale and Modderfontein"
  },
  {
    "id": "bedford-centre",
    "name": "Bedford Centre",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Bedfordview",
    "notes": "Upscale mall with a European-style square"
  },
  {
    "id": "killarney-mall",
    "name": "Killarney Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Killarney",
    "notes": "One of Johannesburg's earliest established shopping centres"
  },
  {
    "id": "nicolway-bryanston",
    "name": "Nicolway Bryanston",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Bryanston",
    "notes": "Boutique food-focused upmarket lifestyle centre"
  },
  {
    "id": "design-quarter",
    "name": "Design Quarter",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Decor design and lifestyle retail hub"
  },
  {
    "id": "montecasino",
    "name": "Montecasino",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Tuscan-themed entertainment casino and retail complex"
  },
  {
    "id": "the-marc",
    "name": "The Marc",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Sandton",
    "notes": "Modern retail centre in the Sandton CBD"
  },
  {
    "id": "mall-reds",
    "name": "Mall @ Reds",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Popular community and regional shopping destination"
  },
  {
    "id": "forest-hill-city",
    "name": "Forest Hill City",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Centurion / Monavoni",
    "notes": "Large regional shopping mall with ice rink and wave pool"
  },
  {
    "id": "atterbury-value-mart",
    "name": "Atterbury Value Mart",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Pretoria East",
    "notes": "Expansive value and lifestyle center"
  },
  {
    "id": "parkview-shopping-centre",
    "name": "Parkview Shopping Centre",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Pretoria East",
    "notes": "Convenient lifestyle and retail destination"
  },
  {
    "id": "sunnypark-shopping-centre",
    "name": "Sunnypark Shopping Centre",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Sunnyside (Pretoria)",
    "notes": "Key retail destination in central Pretoria"
  },
  {
    "id": "soshanguve-crossing",
    "name": "Soshanguve Crossing",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Soshanguve",
    "notes": "Major modern retail centre for the northern townships"
  },
  {
    "id": "quagga-centre",
    "name": "Quagga Centre",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Pretoria West",
    "notes": "Established regional shopping centre"
  },
  {
    "id": "sammy-marks-square",
    "name": "Sammy Marks Square",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Pretoria Central",
    "notes": "Landmark inner-city retail and office complex"
  },
  {
    "id": "zambezi-junction",
    "name": "Zambezi Junction",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Montana",
    "notes": "Convenience and lifestyle shopping hub"
  },
  {
    "id": "montana-crossing",
    "name": "Montana Crossing",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Montana",
    "notes": "Community shopping destination in the north"
  },
  {
    "id": "jubilee-mall",
    "name": "Jubilee Mall",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Hammanskraal",
    "notes": "Central retail hub for Hammanskraal and surrounds"
  },
  {
    "id": "bougainville-shopping-centre",
    "name": "Bougainville Shopping Centre",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Daspoort",
    "notes": "Community retail center in western Pretoria"
  },
  {
    "id": "centurion-lifestyle-centre",
    "name": "Centurion Lifestyle Centre",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Centurion",
    "notes": "Large value retail and lifestyle center"
  },
  {
    "id": "castle-walk-shopping-centre",
    "name": "Castle Walk Shopping Centre",
    "type": "mall",
    "municipality": "City of Tshwane",
    "region": "Erasmuskloof",
    "notes": "Neighborhood convenience retail centre"
  },
  {
    "id": "balfour-mall",
    "name": "Balfour Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Highlands North",
    "notes": "One of the older shopping centres in Johannesburg"
  },
  {
    "id": "boulders-shopping-centre",
    "name": "Boulders Shopping Centre",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Well-established retail hub near the Midrand CBD"
  },
  {
    "id": "carlswald-lifestyle-centre",
    "name": "Carlswald Lifestyle Centre",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Open-air community and lifestyle shopping center"
  },
  {
    "id": "san-ridge-square",
    "name": "San Ridge Square",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Midrand",
    "notes": "Modern convenient community shopping destination"
  },
  {
    "id": "china-mall",
    "name": "China Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Amalgam (JHB)",
    "notes": "Major wholesale and retail trade mall"
  },
  {
    "id": "oriental-plaza",
    "name": "Oriental Plaza",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Fordsburg",
    "notes": "Famous historical retail hub known for bargains"
  },
  {
    "id": "dobsonville-mall",
    "name": "Dobsonville Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "First major shopping mall built in Soweto"
  },
  {
    "id": "protea-glen-mall",
    "name": "Protea Glen Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Soweto",
    "notes": "Key retail destination for deep Soweto"
  },
  {
    "id": "trade-route-mall",
    "name": "Trade Route Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Lenasia",
    "notes": "Large regional mall serving Lenasia and surrounds"
  },
  {
    "id": "randridge-mall",
    "name": "Randridge Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Randpark Ridge",
    "notes": "Established suburban convenience mall"
  },
  {
    "id": "northgate-shopping-centre",
    "name": "Northgate Shopping Centre",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Northriding",
    "notes": "Major regional mall famously associated with the Ticketpro Dome"
  },
  {
    "id": "broadacres-lifestyle-centre",
    "name": "Broadacres Lifestyle Centre",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Broadacres",
    "notes": "Upscale open-air lifestyle and garden centre"
  },
  {
    "id": "cedar-square",
    "name": "Cedar Square",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Upmarket open-air retail and entertainment center"
  },
  {
    "id": "pineslopes-shopping-centre",
    "name": "Pineslopes Shopping Centre",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Fourways",
    "notes": "Community lifestyle shopping center"
  },
  {
    "id": "kyalami-corner",
    "name": "Kyalami Corner",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Kyalami",
    "notes": "Modern upscale lifestyle and convenience retail"
  },
  {
    "id": "bryanston-shopping-centre",
    "name": "Bryanston Shopping Centre",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Bryanston",
    "notes": "Upmarket community shopping centre"
  },
  {
    "id": "morning-glen-mall",
    "name": "Morning Glen Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Kelvin / Morningside",
    "notes": "Local convenience and specialty retail mall"
  },
  {
    "id": "norwood-mall",
    "name": "Norwood Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Norwood",
    "notes": "Boutique suburban mall with strong anchor tenants"
  },
  {
    "id": "melrose-arch-mall",
    "name": "Melrose Arch",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Melrose",
    "notes": "High-end open-air retail dining and lifestyle precinct"
  },
  {
    "id": "campus-square",
    "name": "Campus Square",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Auckland Park",
    "notes": "Retail hub catering to surrounding student population"
  },
  {
    "id": "newtown-junction",
    "name": "Newtown Junction",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Newtown",
    "notes": "Inner-city retail mall integrated into a cultural precinct"
  },
  {
    "id": "village-view-shopping-centre",
    "name": "Village View Shopping Centre",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Bedfordview",
    "notes": "Boutique upscale suburban shopping destination"
  },
  {
    "id": "meadowdale-mall",
    "name": "Meadowdale Mall",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Edenvale",
    "notes": "Large value and lifestyle center"
  },
  {
    "id": "festival-mall",
    "name": "Festival Mall",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Kempton Park",
    "notes": "Large regional mall known for its indoor ice rink"
  },
  {
    "id": "bonaero-park-shopping-centre",
    "name": "Bonaero Park Shopping Centre",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Bonaero Park",
    "notes": "Convenience retail serving local community and airport"
  },
  {
    "id": "mall-carnival",
    "name": "Mall @ Carnival",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Brakpan",
    "notes": "Massive super-regional mall and entertainment destination"
  },
  {
    "id": "springs-mall",
    "name": "Springs Mall",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Springs",
    "notes": "Modern regional mall serving the far East Rand"
  },
  {
    "id": "tsakane-mall",
    "name": "Tsakane Mall",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Tsakane",
    "notes": "Central community retail hub in the township"
  },
  {
    "id": "alberton-city-shopping-centre",
    "name": "Alberton City Shopping Centre",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Alberton",
    "notes": "Established regional mall in the heart of Alberton"
  },
  {
    "id": "newmarket-mall",
    "name": "Newmarket Mall",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Alberton",
    "notes": "Modern retail center built on the old racecourse"
  },
  {
    "id": "lemon-tree-shopping-centre",
    "name": "Lemon Tree Shopping Centre",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Alberton",
    "notes": "Popular community and convenience shopping node"
  },
  {
    "id": "tambotie-mall",
    "name": "Tambotie Mall",
    "type": "mall",
    "municipality": "West Rand",
    "region": "Randfontein",
    "notes": "Key regional mall for the Randfontein area"
  },
  {
    "id": "president-square",
    "name": "President Square",
    "type": "mall",
    "municipality": "West Rand",
    "region": "Krugersdorp",
    "notes": "Community shopping center in the West Rand"
  },
  {
    "id": "village-square",
    "name": "Village Square",
    "type": "mall",
    "municipality": "West Rand",
    "region": "Randfontein",
    "notes": "Central shopping destination for Randfontein"
  },
  {
    "id": "evaton-mall",
    "name": "Evaton Mall",
    "type": "mall",
    "municipality": "Sedibeng",
    "region": "Evaton",
    "notes": "Major retail mall serving the Vaal townships"
  },
  {
    "id": "mark-park-shopping-centre",
    "name": "Mark Park Shopping Centre",
    "type": "mall",
    "municipality": "Sedibeng",
    "region": "Vereeniging",
    "notes": "Convenience and community shopping destination"
  },
  {
    "id": "river-square-shopping-centre",
    "name": "River Square Shopping Centre",
    "type": "mall",
    "municipality": "Sedibeng",
    "region": "Three Rivers (Vereeniging)",
    "notes": "Prominent regional mall in the Vaal area"
  },
  {
    "id": "phumulani-mall",
    "name": "Phumulani Mall",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Tembisa",
    "notes": "Convenience shopping serving the Tembisa community"
  },
  {
    "id": "alex-mall",
    "name": "Alex Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Alexandra",
    "notes": "Modern retail hub servicing the Alexandra township"
  },
  {
    "id": "kagiso-mall",
    "name": "Kagiso Mall",
    "type": "mall",
    "municipality": "West Rand",
    "region": "Kagiso",
    "notes": "Community shopping center in Kagiso township"
  },
  {
    "id": "chris-hani-crossing",
    "name": "Chris Hani Crossing",
    "type": "mall",
    "municipality": "Ekurhuleni",
    "region": "Vosloorus",
    "notes": "Major retail node in Vosloorus"
  },
  {
    "id": "eyethu-orange-farm-mall",
    "name": "Eyethu Orange Farm Mall",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Orange Farm",
    "notes": "Major shopping hub for the deep south"
  },
  {
    "id": "pan-africa-shopping-centre",
    "name": "Pan Africa Shopping Centre",
    "type": "mall",
    "municipality": "City of Johannesburg",
    "region": "Alexandra",
    "notes": "Integrated retail and taxi rank node"
  }
];
