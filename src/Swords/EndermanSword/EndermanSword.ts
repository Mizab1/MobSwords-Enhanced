import { MCFunction, MCFunctionInstance, Selector, execute } from "sandstone";
import { isHoldingThis } from "./Predicates";
import { self } from "../../Tick";
import { particles } from "./Particles";

export const EndermanSword: MCFunctionInstance = MCFunction(
  "swords/enderman_sword/tick",
  () => {
    execute
      .as(Selector("@a", { predicate: isHoldingThis }))
      .at(self)
      .run(() => {
        particles();
      });
  }
);
