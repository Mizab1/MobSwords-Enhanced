import { Predicate, PredicateInstance } from "sandstone";

export const isHoldingThis: PredicateInstance = Predicate(
  "is_holding_squid_sword",
  {
    condition: "minecraft:entity_properties",
    entity: "this",
    predicate: {
      equipment: {
        mainhand: {
          //@ts-ignore
          item: "diamond_sword",
          nbt: "{CustomModelData:110010}",
        },
      },
    },
  }
);

export const isHurtingWithThis: PredicateInstance = Predicate(
  "is_hurting_with_squid_sword",
  {
    condition: "minecraft:damage_source_properties",
    predicate: {
      source_entity: {
        type: "minecraft:player",
        equipment: {
          mainhand: {
            items: ["minecraft:diamond_sword"],
            nbt: "{CustomModelData:110010}",
          },
        },
      },
    },
  }
);
