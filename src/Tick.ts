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
import { SlimeSword } from "./Swords/SlimeSword/SlimeSword";
import { SlimeHurtEffect } from "./Swords/SlimeSword/HurtEffect";
import { EndermanSword } from "./Swords/EndermanSword/EndermanSword";
import { EndermanHurtEffect } from "./Swords/EndermanSword/HurtEffect";

// Self Context
export const self = Selector("@s");

const Tick: MCFunctionInstance = MCFunction(
  "tick",
  () => {
    // Main Logic
    HorseSword();
    BlazeSword();
    SquidSword();
    SlimeSword();
    EndermanSword();

    // Execute when a player hurts another player
    execute
      .as(
        Selector("@e", {
          type: "#aestd1:living_base",
          nbt: { HurtTime: NBT.short(10) },
        })
      )
      .at(self)
      .run(() => {
        SquidHurtEffect();
        SlimeHurtEffect();
        EndermanHurtEffect();
      });
  },
  {
    runEachTick: true,
  }
);
