import { MCFunction, MCFunctionInstance, Selector } from "sandstone";
import { HorseSword } from "./Swords/HorseSword/HorseSword";
import { BlazeSword } from "./Swords/BlazeSword/BlazeSword";

// Self Context
export const self = Selector("@s");

const Tick: MCFunctionInstance = MCFunction(
  "tick",
  () => {
    HorseSword();
    BlazeSword();
  },
  {
    runEachTick: true,
  }
);
