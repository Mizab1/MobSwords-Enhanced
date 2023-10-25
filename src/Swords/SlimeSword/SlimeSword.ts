import { MCFunction, MCFunctionInstance, Selector, execute } from "sandstone";
import { isHoldingThis } from "./Predicates";
import { self } from "../../Tick";
import { particles } from "./Particles";
import { applyJumpBoost } from "./Effects";

export const SlimeSword: MCFunctionInstance = MCFunction(
  "swords/slime_sword/tick",
  () => {
    execute
      .as(Selector("@a", { predicate: isHoldingThis }))
      .at(self)
      .run(() => {
        particles();
        applyJumpBoost();
      });
  }
);
