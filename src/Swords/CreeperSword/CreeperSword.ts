import { MCFunction, MCFunctionInstance, Selector, execute } from "sandstone";
import { self } from "../../Tick";
import { applyCreeperPowers } from "./Effects";
import { particles } from "./Particles";
import { isHoldingThis } from "./Predicates";

export const CreeperSword: MCFunctionInstance = MCFunction(
  "swords/creeper_sword/tick",
  () => {
    execute
      .as(Selector("@a", { predicate: isHoldingThis }))
      .at(self)
      .run(() => {
        particles();
        applyCreeperPowers();
      });
  }
);
