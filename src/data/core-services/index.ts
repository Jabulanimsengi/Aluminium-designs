import { ServiceObject } from '../../types/service';

// Aluminium Services
import { aluminiumWindowsService } from './aluminiumWindows';
import { aluminiumSlidingDoorsService } from './aluminiumSlidingDoors';
import { aluminiumStackingDoorsService } from './aluminiumStackingDoors';
import { aluminiumFrontDoorsService } from './aluminiumFrontDoors';
import { aluminiumFrenchDoorsService } from './aluminiumFrenchDoors';
import { aluminiumGarageDoorsService } from './aluminiumGarageDoors';
import { aluminiumSlidingWindowsService } from './aluminiumSlidingWindows';
import { doubleGlazedWindowsService } from './doubleGlazedWindows';
import { glassBalustradesService } from './glassBalustrades';
import { glassPatioEnclosuresService } from './glassPatioEnclosures';
import { aluminiumAwningsService } from './aluminiumAwnings';
import { aluminiumPergolasService } from './aluminiumPergolas';
import { aluminiumShopfrontsService } from './aluminiumShopfronts';
import { aluminiumSkylightsService } from './aluminiumSkylights';
import { seamlessAluminiumGuttersService } from './seamlessAluminiumGutters';
import { officeGlassPartitionsService } from './officeGlassPartitions';
import { framelessShowerDoorsService } from './framelessShowerDoors';
import { aluminiumFlyScreensService } from './aluminiumFlyScreens';
import { aluminiumRepairsService } from './aluminiumRepairs';
import { slidingDoorRepairsService } from './slidingDoorRepairs';
import { glassReplacementService } from './glassReplacement';
import { steelToAluminiumConversionsService } from './steelToAluminiumConversions';

// Steel & Security Services
import { burglarBarsService } from './burglarBars';
import { clearBurglarBarsService } from './clearBurglarBars';
import { trellisSecurityGatesService } from './trellisSecurityGates';
import { securityGatesService } from './securityGates';
import { drivewayGatesService } from './drivewayGates';
import { gateMotorsService } from './gateMotors';
import { palisadeFencingService } from './palisadeFencing';
import { meshFencingService } from './meshFencing';
import { steelCarportsService } from './steelCarports';
import { steelBalustradesService } from './steelBalustrades';
import { steelStaircasesService } from './steelStaircases';
import { steelShedsService } from './steelSheds';
import { customWeldingService } from './customWelding';
import { steelRepairsService } from './steelRepairs';
import { steelWorksService } from './steelWorks';

export const allCoreServices: ServiceObject[] = [
  // Aluminium, Glazing & Conversions (22 distinct services)
  aluminiumWindowsService,
  steelToAluminiumConversionsService,
  aluminiumSlidingDoorsService,
  aluminiumStackingDoorsService,
  aluminiumFrontDoorsService,
  aluminiumFrenchDoorsService,
  aluminiumGarageDoorsService,
  aluminiumSlidingWindowsService,
  doubleGlazedWindowsService,
  glassBalustradesService,
  glassPatioEnclosuresService,
  aluminiumSkylightsService,
  aluminiumAwningsService,
  aluminiumPergolasService,
  aluminiumShopfrontsService,
  seamlessAluminiumGuttersService,
  officeGlassPartitionsService,
  framelessShowerDoorsService,
  aluminiumFlyScreensService,
  aluminiumRepairsService,
  slidingDoorRepairsService,
  glassReplacementService,

  // Steel & Security (14 distinct services)
  burglarBarsService,
  clearBurglarBarsService,
  trellisSecurityGatesService,
  securityGatesService,
  drivewayGatesService,
  gateMotorsService,
  palisadeFencingService,
  meshFencingService,
  steelCarportsService,
  steelBalustradesService,
  steelStaircasesService,
  steelShedsService,
  customWeldingService,
  steelRepairsService,
  steelWorksService
];

export const coreServiceMapBySlug = new Map<string, ServiceObject>(
  allCoreServices.map(srv => [srv.slug, srv])
);

// Fallback aliases for legacy slug redirects
coreServiceMapBySlug.set("patio-enclosures", glassPatioEnclosuresService);
coreServiceMapBySlug.set("fly-screens", aluminiumFlyScreensService);
coreServiceMapBySlug.set("trellis-doors-security-gates", trellisSecurityGatesService);
coreServiceMapBySlug.set("trellis-security-gates", trellisSecurityGatesService);

export const getServicesByCategory = (category: string): ServiceObject[] => {
  return allCoreServices.filter(
    srv => srv.category.toLowerCase() === category.toLowerCase()
  );
};
