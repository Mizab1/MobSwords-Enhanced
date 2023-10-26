import {
  MCFunction,
  MCFunctionInstance,
  NBT,
  Selector,
  effect,
  execute,
  particle,
  rel,
  summon,
} from "sandstone";
import { isHoldingThis } from "./Predicates";
import { self } from "../../Tick";

export const ShulkerHurtEffect: MCFunctionInstance = MCFunction(
  "swords/shulker_sword/hurt_effect",
  () => {
    execute.if
      .entity(Selector("@a", { distance: [1, 4], predicate: isHoldingThis }))
      .run(() => {
        effect.give(self, "minecraft:levitation", 5, 4);
      });
  }
);
