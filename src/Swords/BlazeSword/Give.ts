import { MCFunction, MCFunctionInstance, NBT, give } from "sandstone";
import { self } from "../../Tick";
import { i } from "../../Utils/Functions";

const Give: MCFunctionInstance = MCFunction("swords/blaze_sword/give", () => {
  give(
    self,
    i("minecraft:diamond_sword", {
      display: {
        Name: '{"text":"Blaze Sword","color":"#ABD8FF","italic":false}',
        Lore: [
          '{"text":"Fire Aspect+", "color":"blue"}',
          '{"text":"Fire Resistance+", "color":"blue"}',
          '{"text":"Sneak to fly", "color":"blue"}',
        ],
      },
      CustomModelData: 110008,
      HideFlags: 255,
      Enchantments: [{ id: "minecraft:fire_aspect", lvl: NBT.short(1) }],
    })
  );
});
