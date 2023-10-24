import { MCFunction, MCFunctionInstance, NBT, give } from "sandstone";
import { self } from "../../Tick";
import { i } from "../../Utils/Functions";

const Give: MCFunctionInstance = MCFunction("swords/horse_sword/give", () => {
  give(
    self,
    i("minecraft:diamond_sword", {
      display: {
        Name: '{"text":"Horse Sword","color":"#ABD8FF","italic":false}',
        Lore: [
          '{"text":"Knockback+", "color":"blue"}',
          '{"text":"Speed+", "color":"blue"}',
        ],
      },
      CustomModelData: 110001,
      AttributeModifiers: [
        {
          AttributeName: "generic.movement_speed",
          Name: "generic.movement_speed",
          Amount: 0.1,
          Operation: 0,
          UUID: NBT.intArray([-1523225609, 412306935, -1597740971, -15377870]),
          Slot: "mainhand",
        },
      ],
      HideFlags: 255,
      Enchantments: [{ id: "minecraft:knockback", lvl: NBT.short(3) }],
    })
  );
});
