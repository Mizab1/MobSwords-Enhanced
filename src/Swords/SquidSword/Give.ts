import { MCFunction, MCFunctionInstance, NBT, give } from "sandstone";
import { self } from "../../Tick";
import { i } from "../../Utils/Functions";

const Give: MCFunctionInstance = MCFunction("swords/squid_sword/give", () => {
  give(
    self,
    i("minecraft:diamond_sword", {
      display: {
        Name: '{"text":"Squid Sword","color":"#ABD8FF","italic":false}',
        Lore: [
          '{"text":"Blindness Attack+", "color":"blue"}',
          '{"text":"Underwater Power+", "color":"blue"}',
        ],
      },
      CustomModelData: 110010,
    })
  );
});
