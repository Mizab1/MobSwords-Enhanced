import {
  MCFunctionInstance,
  MCFunction,
  execute,
  Selector,
  effect,
  particle,
  rel,
  spreadplayers,
} from "sandstone";
import { isHoldingThis } from "./Predicates";
import { self } from "../../Tick";

export const EndermanHurtEffect: MCFunctionInstance = MCFunction(
  "swords/enderman_sword/hurt_effect",
  () => {
    execute.if
      .entity(
        Selector("@a", {
          distance: [1, 4],
          predicate: isHoldingThis,
        })
      )
      .run(() => {
        particle(
          "minecraft:reverse_portal",
          rel(0, 0, 0),
          [0.3, 0.1, 0.3],
          0.1,
          50
        );
        spreadplayers(rel(0, 0), 8, 20, false, self);
      });
  }
);
