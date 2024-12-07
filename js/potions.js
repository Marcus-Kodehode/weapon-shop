export const baseImageUrl = (potion) =>
  `./public/images/potions/${potion}-potion.webp`;



export const potions = {
  healingPotion: {
    herbs: 2,
    berries: 1,
    water: 0,
    mushrooms: 1,
    flowers: 0,
    image: baseImageUrl("healing"),
    name: "Healing Potion",
  },
  strengthPotion: {
    herbs: 1,
    berries: 1,
    mushrooms: 1,
    water: 0,
    flowers: 1,
    image: baseImageUrl("strength"),
    name: "Strength Potion",
  },
  manaPotion: {
    herbs: 1, berries: 2, water: 1, mushrooms: 0, flowers: 1, name: "Mana Potion", image: baseImageUrl("mana")
  },
  speedPotion: {
    herbs: 0, berries: 1, water: 1, mushrooms: 2, flowers: 1, name: "Speed Potion", image: baseImageUrl("speed")
  },
  stealthPotion: {
    herbs: 1, berries: 0, water: 2, mushrooms: 1, flowers: 0, name: "Stealth Potion", image: baseImageUrl("stealth")
  },
  antidote: {
    herbs: 2, berries: 1, water: 1, mushrooms: 0, flowers: 0, name: "Antidote", image: baseImageUrl("antidote")
  },
  lovePotion: {
    herbs: 1, berries: 2, water: 0, mushrooms: 0, flowers: 2, name: "Love Potion", image: baseImageUrl("love")
  },
  nightVisionPotion: {
    herbs: 1,
    berries: 0,
    water: 0,
    mushrooms: 2,
    flowers: 1,
    name: "Night Vision Potion",
    image: baseImageUrl("nightvision"),
  },
  fireResistancePotion: {
    herbs: 2,
    berries: 0,
    water: 1,
    mushrooms: 1,
    flowers: 1,
    name: "Fire Resistance Potion",
    image: baseImageUrl("fire-resistance"),
  },
  frostResistancePotion: {
    herbs: 0,
    berries: 1,
    water: 2,
    mushrooms: 1,
    flowers: 1,
    name: "Frost Resistance Potion",
    image: baseImageUrl("frost-resistance"),
  },
  lightningResistancePotion: {
    herbs: 1,
    berries: 1,
    water: 1,
    mushrooms: 2,
    flowers: 0,
    name: "Lightning Resistance Potion",
    image: baseImageUrl("lightning-resistance"),
  },
  energyPotion: {
    herbs: 1, berries: 2, water: 1, mushrooms: 0, flowers: 0, name: "Energy Potion", image: baseImageUrl("energy")
  },
  focusPotion: {
    herbs: 2, berries: 1, water: 0, mushrooms: 0, flowers: 2, name: "Focus Potion", image: baseImageUrl("focus")
  },
};
