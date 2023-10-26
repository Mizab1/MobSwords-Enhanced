import {
  MCFunction,
  MCFunctionInstance,
  NBT,
  Selector,
  execute,
} from "sandstone";
import { BlazeSword } from "./Swords/BlazeSword/BlazeSword";
import { CreeperSword } from "./Swords/CreeperSword/CreeperSword";
import { CreeperHurtEffect } from "./Swords/CreeperSword/HurtEffect";
import { EndermanSword } from "./Swords/EndermanSword/EndermanSword";
import { EndermanHurtEffect } from "./Swords/EndermanSword/HurtEffect";
import { HorseSword } from "./Swords/HorseSword/HorseSword";
import { SlimeHurtEffect } from "./Swords/SlimeSword/HurtEffect";
import { SlimeSword } from "./Swords/SlimeSword/SlimeSword";
import { SquidHurtEffect } from "./Swords/SquidSword/HurtEffect";
import { SquidSword } from "./Swords/SquidSword/SquidSword";
import { ShulkerSword } from "./Swords/ShulkerSword/ShulkerSword";
import { ShulkerHurtEffect } from "./Swords/ShulkerSword/HurtEffect";

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
    CreeperSword();
    ShulkerSword();

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
        CreeperHurtEffect();
        ShulkerHurtEffect();
      });
  },
  {
    runEachTick: true,
  }
);
