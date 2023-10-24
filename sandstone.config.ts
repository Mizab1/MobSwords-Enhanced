import type { SandstoneConfig } from "sandstone";

export default {
  name: "MobSwords",
  description: ["A Datapack Made by: ", { text: "Mizab", color: "gold" }],
  formatVersion: 15,
  namespace: "default",
  packUid: "4yY09ABP",
  saveOptions: { path: "./.sandstone/output/datapack" },
  // saveOptions: { world: "Testing 4" },
  onConflict: {
    default: "warn",
  },
} as SandstoneConfig;
