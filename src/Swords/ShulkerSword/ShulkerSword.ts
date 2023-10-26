import { MCFunction, MCFunctionInstance, Selector, execute } from "sandstone";
import { self } from "../../Tick";
import { particles } from "./Particles";
import { isHoldingThis } from "./Predicates";
import { applyResistance } from "./Effects";

export const ShulkerSword: MCFunctionInstance = MCFunction(
  "swords/shulker_sword/tick",
  () => {
    execute
      .as(Selector("@a", { predicate: isHoldingThis }))
      .at(self)
      .run(() => {
        particles();
        applyResistance();
      });
  }
);
