import { checkAllIngredientsAmount } from "./ingredients.js";
import { checkPotionIngredients, getPotion, potions } from "./potions.js";

// Function that can be called to get the amount for all ingredients:

// Function that can be called to check if the current ingredients match a potion
export function checkIfIngredientsMatchPotion(potionName) {
  const currentIngredients = checkAllIngredientsAmount().toString();
  const potionIngredients = checkPotionIngredients(potionName).toString();
  if (currentIngredients === potionIngredients) {
    return getPotion(potionName);
  }
  return false;
}
