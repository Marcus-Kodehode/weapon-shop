const baseImageUrl = (potion) =>
  `../public/images/potions/${potion}-potion.webp`;

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
  manaPotion: { herbs: 1, berries: 2, water: 1, mushrooms: 0, flowers: 1 },
  speedPotion: { herbs: 0, berries: 1, water: 1, mushrooms: 2, flowers: 1 },
  stealthPotion: { herbs: 1, berries: 0, water: 2, mushrooms: 1, flowers: 0 },
  antidote: { herbs: 2, berries: 1, water: 1, mushrooms: 0, flowers: 0 },
  lovePotion: { herbs: 1, berries: 2, water: 0, mushrooms: 0, flowers: 2 },
  nightVisionPotion: {
    herbs: 1,
    berries: 0,
    water: 0,
    mushrooms: 2,
    flowers: 1,
  },
  fireResistancePotion: {
    herbs: 2,
    berries: 0,
    water: 1,
    mushrooms: 1,
    flowers: 1,
  },
  frostResistancePotion: {
    herbs: 0,
    berries: 1,
    water: 2,
    mushrooms: 1,
    flowers: 1,
  },
  lightningResistancePotion: {
    herbs: 1,
    berries: 1,
    water: 1,
    mushrooms: 2,
    flowers: 0,
  },
  energyPotion: { herbs: 1, berries: 2, water: 1, mushrooms: 0, flowers: 0 },
  focusPotion: { herbs: 2, berries: 1, water: 0, mushrooms: 0, flowers: 2 },
};

function findPotionByIngredients() {}
