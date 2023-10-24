import { MCFunction, MCFunctionInstance, Selector } from "sandstone";
import { HorseSword } from "./Swords/HorseSword/HorseSword";

// Self Context
export const self = Selector("@s");

const Tick: MCFunctionInstance = MCFunction(
  "tick",
  () => {
    // Horse Sword
    HorseSword();
  },
  {
    runEachTick: true,
  }
);
