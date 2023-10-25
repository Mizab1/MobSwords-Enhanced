import {
  MCFunction,
  MCFunctionInstance,
  NBT,
  Selector,
  execute,
} from "sandstone";
import { HorseSword } from "./Swords/HorseSword/HorseSword";
import { BlazeSword } from "./Swords/BlazeSword/BlazeSword";
import { SquidSword } from "./Swords/SquidSword/SquidSword";
import { SquidHurtEffect } from "./Swords/SquidSword/HurtEffect";

// Self Context
export const self = Selector("@s");

const Tick: MCFunctionInstance = MCFunction(
  "tick",
  () => {
    // Main Logic
    HorseSword();
    BlazeSword();
    SquidSword();

    // Execute when a player hurts another player
    execute
      .as(Selector("@a", { nbt: { HurtTime: NBT.short(10) } }))
      .at(self)
      .run(() => {
        SquidHurtEffect();
      });
  },
  {
    runEachTick: true,
  }
);
