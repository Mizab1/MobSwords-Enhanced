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

export const SquidHurtEffect: MCFunctionInstance = MCFunction(
  "swords/squid_sword/hurt_effect",
  () => {
    execute.if
      .entity(Selector("@a", { distance: [1, 4], predicate: isHoldingThis }))
      .run(() => {
        effect.give(self, "minecraft:blindness", 4, 1, true);
        particle(
          // @ts-ignore
          "minecraft:squid_ink",
          rel(0, 1, 0),
          [0.5, 0.5, 0.5],
          0.1,
          50
        );
      });
  }
);
