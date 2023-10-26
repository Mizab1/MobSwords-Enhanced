import { MCFunction, MCFunctionInstance, effect } from "sandstone";
import { self } from "../../Tick";

export const applyCreeperPowers: MCFunctionInstance = MCFunction(
  "swords/creeper_sword/apply_creeper_powers",
  () => {
    effect.give(self, "minecraft:resistance", 3, 1, true);
  }
);
