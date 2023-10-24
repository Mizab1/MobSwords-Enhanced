import {
  MCFunction,
  MCFunctionInstance,
  Selector,
  _,
  execute,
} from "sandstone";
import { self } from "../../Tick";
import { isSneaking } from "../../Utils/GlobalPred";
import { flyingParticles, particles } from "./Particles";
import { isHoldingThis } from "./Predicates";
import {
  applyFireProtection,
  applyLevitation,
  clearLevitation,
} from "./Effects";

export const BlazeSword: MCFunctionInstance = MCFunction(
  "swords/blaze_sword/tick",
  () => {
    execute
      .as(Selector("@a", { predicate: isHoldingThis }))
      .at(self)
      .run(() => {
        particles();
        applyFireProtection();

        _.if(Selector("@s", { predicate: isSneaking }), () => {
          flyingParticles();
          applyLevitation();
        }).else(() => {
          clearLevitation();
        });
      });
  }
);
