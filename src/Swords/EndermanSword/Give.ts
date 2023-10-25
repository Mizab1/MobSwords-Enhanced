import { MCFunction, MCFunctionInstance, NBT, give } from "sandstone";
import { self } from "../../Tick";
import { i } from "../../Utils/Functions";

const Give: MCFunctionInstance = MCFunction(
  "swords/enderman_sword/give",
  () => {
    give(
      self,
      i("minecraft:diamond_sword", {
        display: {
          Name: '{"text":"Enderman Sword","color":"#ABD8FF","italic":false}',
          Lore: [
            '{"text":"Health+", "color":"blue"}',
            '{"text":"Teleport Attack+", "color":"blue"}',
          ],
        },
        AttributeModifiers: [
          {
            AttributeName: "generic.max_health",
            Name: "generic.max_health",
            Amount: 10,
            Operation: 0,
            UUID: NBT.intArray([
              -753693481, -1090631127, -1910808374, 1324617867,
            ]),
            Slot: "mainhand",
          },
        ],
        HideFlags: 255,
        CustomModelData: 110003,
      })
    );
  }
);
