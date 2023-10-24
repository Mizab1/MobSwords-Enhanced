import { effect } from "sandstone";
import { self } from "../../Tick";

export const applyFireProtection = () => {
  effect.give(self, "minecraft:fire_resistance", 2, 1, true);
};

export const applyLevitation = () => {
  effect.give(self, "minecraft:levitation", 1, 5, true);
  effect.give(self, "minecraft:resistance", 2, 4, true);
};
export const clearLevitation = () => {
  effect.clear(self, "minecraft:levitation");
};
