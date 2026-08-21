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
import { patioEnclosuresService } from './patioEnclosures';
import { aluminiumAwningsService } from './aluminiumAwnings';
import { aluminiumPergolasService } from './aluminiumPergolas';
import { glassShopfrontsService } from './glassShopfronts';
import { officeGlassPartitionsService } from './officeGlassPartitions';
import { flyScreensService } from './flyScreens';
import { aluminiumRepairsService } from './aluminiumRepairs';
import { glassReplacementService } from './glassReplacement';

// Steel Services
import { burglarBarsService } from './burglarBars';
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

export const allCoreServices: ServiceObject[] = [
  // Aluminium
  aluminiumWindowsService,
  aluminiumSlidingDoorsService,
  aluminiumStackingDoorsService,
  aluminiumFrontDoorsService,
  aluminiumFrenchDoorsService,
  aluminiumGarageDoorsService,
  aluminiumSlidingWindowsService,
  doubleGlazedWindowsService,
  glassBalustradesService,
  patioEnclosuresService,
  aluminiumAwningsService,
  aluminiumPergolasService,
  glassShopfrontsService,
  officeGlassPartitionsService,
  flyScreensService,
  aluminiumRepairsService,
  glassReplacementService,

  // Steel
  burglarBarsService,
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
  steelRepairsService
];

export const coreServiceMapBySlug = new Map<string, ServiceObject>(
  allCoreServices.map(srv => [srv.slug, srv])
);

export const getServicesByCategory = (category: string): ServiceObject[] => {
  return allCoreServices.filter(
    srv => srv.category.toLowerCase() === category.toLowerCase()
  );
};
