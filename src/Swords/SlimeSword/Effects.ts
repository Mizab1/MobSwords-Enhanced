import { effect } from "sandstone";
import { self } from "../../Tick";

export const applyJumpBoost = () => {
  effect.give(self, "minecraft:jump_boost", 2, 3, true);
};
