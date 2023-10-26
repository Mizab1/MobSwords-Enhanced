import { MCFunction, MCFunctionInstance, effect } from "sandstone";
import { self } from "../../Tick";

export const applyResistance: MCFunctionInstance = MCFunction(
  "swords/shulker_sword/apply_resistance",
  () => {
    effect.give(self, "minecraft:resistance", 2, 0, true);
  }
);
