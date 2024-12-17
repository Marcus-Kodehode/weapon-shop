import { checkAllIngredientsAmount } from "./ingredients.js";
import { monsters } from "./monsters.js";
import { getPotion, potions } from "./potions.js";

// export let currentPotion;

//TODO: This function is already made in potion.js. Figure out which to remove
export function getPotionIngredients(potion) {
  return Object.entries(potions[potion])
    .filter(([key]) => key !== "image" && key !== "name")
    .map(([, value]) => value);
}

export function getPotionIngredient(potion, ingredient) {
  return potions[potion][ingredient];
}

export function getMonsterIngredient(monster, ingredient) {
  return monsters[monster][ingredient];
}

// Function that can be called to check if the current ingredients match a potion
export function checkIfIngredientsMatchPotion(potionName) {
  const currentIngredients = checkAllIngredientsAmount().toString();
  const potionIngredients = getPotionIngredients(potionName).toString();
  if (currentIngredients === potionIngredients) {
    return getPotion(potionName);
  }
  return false;
}
