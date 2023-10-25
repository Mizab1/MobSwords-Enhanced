import { MCFunction, MCFunctionInstance, effect } from "sandstone";
import { self } from "../../Tick";

export const applyAquaticPowers: MCFunctionInstance = MCFunction(
  "swords/aquatic_sword/apply_aquatic_powers",
  () => {
    effect.give(self, "minecraft:water_breathing", 3, 4, true);
    effect.give(self, "minecraft:dolphins_grace", 2, 4, true);
  }
);
