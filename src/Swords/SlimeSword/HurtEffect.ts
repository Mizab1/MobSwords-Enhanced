import {
  MCFunctionInstance,
  MCFunction,
  execute,
  Selector,
  effect,
  particle,
  rel,
} from "sandstone";
import { isHoldingThis } from "./Predicates";
import { self } from "../../Tick";

export const SlimeHurtEffect: MCFunctionInstance = MCFunction(
  "swords/slime_sword/hurt_effect",
  () => {
    execute.if
      .entity(Selector("@a", { distance: [1, 4], predicate: isHoldingThis }))
      .run(() => {
        effect.give(self, "minecraft:slowness", 4, 3, true);
        particle(
          // @ts-ignore
          "minecraft:dust",
          [0, 0, 0],
          1,
          rel(0, 0, 0),
          [0.3, 0.1, 0.3],
          0.1,
          50
        );
      });
  }
);
