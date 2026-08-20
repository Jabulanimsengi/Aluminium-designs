import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";

import { service as steelCarports, page as steelCarportsPage } from "./steel-carports";
import { service as securityGates, page as securityGatesPage } from "./security-gates";
import { service as drivewayGates, page as drivewayGatesPage } from "./driveway-gates";
import { service as gateMotors, page as gateMotorsPage } from "./gate-motors";
import { service as palisadeFencing, page as palisadeFencingPage } from "./palisade-fencing";
import { service as meshFencing, page as meshFencingPage } from "./mesh-fencing";
import { service as steelBalustrades, page as steelBalustradesPage } from "./steel-balustrades";
import { service as steelStaircases, page as steelStaircasesPage } from "./steel-staircases";
import { service as steelSheds, page as steelShedsPage } from "./steel-sheds";
import { service as customWelding, page as customWeldingPage } from "./custom-welding";
import { service as steelRepairs, page as steelRepairsPage } from "./steel-repairs";
import { service as aluminiumFrontDoors, page as aluminiumFrontDoorsPage } from "./aluminium-front-doors";
import { service as aluminiumFrenchDoors, page as aluminiumFrenchDoorsPage } from "./aluminium-french-doors";
import { service as aluminiumSlidingWindows, page as aluminiumSlidingWindowsPage } from "./aluminium-sliding-windows";
import { service as doubleGlazedWindows, page as doubleGlazedWindowsPage } from "./double-glazed-windows";
import { service as aluminiumAwnings, page as aluminiumAwningsPage } from "./aluminium-awnings";
import { service as glassReplacement, page as glassReplacementPage } from "./glass-replacement";

export const extraServices: Service[] = [
  steelCarports,
  securityGates,
  drivewayGates,
  gateMotors,
  palisadeFencing,
  meshFencing,
  steelBalustrades,
  steelStaircases,
  steelSheds,
  customWelding,
  steelRepairs,
  aluminiumFrontDoors,
  aluminiumFrenchDoors,
  aluminiumSlidingWindows,
  doubleGlazedWindows,
  aluminiumAwnings,
  glassReplacement,
];

export const extraServicePages: Record<string, ServicePageContent> = {
  "steel-carports": steelCarportsPage,
  "security-gates": securityGatesPage,
  "driveway-gates": drivewayGatesPage,
  "gate-motors": gateMotorsPage,
  "palisade-fencing": palisadeFencingPage,
  "mesh-fencing": meshFencingPage,
  "steel-balustrades": steelBalustradesPage,
  "steel-staircases": steelStaircasesPage,
  "steel-sheds": steelShedsPage,
  "custom-welding": customWeldingPage,
  "steel-repairs": steelRepairsPage,
  "aluminium-front-doors": aluminiumFrontDoorsPage,
  "aluminium-french-doors": aluminiumFrenchDoorsPage,
  "aluminium-sliding-windows": aluminiumSlidingWindowsPage,
  "double-glazed-windows": doubleGlazedWindowsPage,
  "aluminium-awnings": aluminiumAwningsPage,
  "glass-replacement": glassReplacementPage,
};
