import { ingredients } from "./ingredients.js";
import { potions } from "./potions.js";

export let currentPotion;

export default function checkAllIngredientsAmount() {
  return Object.keys(ingredients).map(
    (ingredient) => ingredients[ingredient].amount
  );
}

export function getPotionIngredients(potion) {
  return Object.entries(potions[potion])
    .filter(([key]) => key !== "image" && key !== "name")
    .map(([, value]) => value);
}

export function getPotionIngredient(potion, ingredient) {
  return potions[potion][ingredient];
}

export function getPotion(potion) {
  return potions[potion];
}

export function checkIfIngredientsMatchPotion(potionName) {
  const currentIngredients = checkAllIngredientsAmount().toString();
  const potionIngredients = getPotionIngredients(potionName).toString();
  if (currentIngredients === potionIngredients) {
    return (currentPotion = potions[potionName]);
  }
  return false;
}
