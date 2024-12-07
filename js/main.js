// const addHerbs = document.getElementById("addHerbs");
// const addBerries = document.getElementById("addBerries");
// const addMushrooms = document.getElementById("addMushrooms");
// const addWater = document.getElementById("addWater");
// const addFlowers = document.getElementById("addFlowers");

import checkAllIngredientsAmount, {
  checkIfIngredientsMatchPotion,
  checkPotionIngredients,
  currentPotion,
  getPotion,
} from "./compare.js";
import { imagesToPreload } from "./imagesLoad.js";
import {
  increaseAmount,
  ingredients,
  resetIngredients,
} from "./ingredients.js";
import { baseImageUrl, potions } from "./potions.js";

document.addEventListener('DOMContentLoaded', () => {
  imagesToPreload();
});

const ingredientsButtons = document.getElementById("ingredients");
const brew = document.getElementById("brew");
const reset = document.getElementById("reset");
const potionResultText = document.getElementById("potionResultText");
const potionResultImage = document.getElementById("potionResultImage");

potionResultImage.src = baseImageUrl("empty")

Object.keys(ingredients).forEach((ingredient) => {
  ingredientsButtons.insertAdjacentHTML(
    "beforeend",
    `
  <div class="ingredient">
  <button id="${ingredients[ingredient].id}">
  ${ingredients[ingredient].ingredientName}
  </button>
  <p id="${ingredients[ingredient].id}-amount" class="ingredient-amount">${ingredients[ingredient].amount}</p>
  </div>
  `
  );

  const button = document.getElementById(ingredients[ingredient].id);
  if (button) {
    button.addEventListener("click", () => {
      increaseAmount(ingredient);
      const amountElement = document.getElementById(
        `${ingredients[ingredient].id}-amount`
      );
      if (amountElement) {
        amountElement.textContent = ingredients[ingredient].amount;
      }
    });
  }
});

brew.addEventListener("click", () => {
  let matchingPotion = null;
  let matchingPotionName = null;
  for (const potionName in potions) {
    if (checkIfIngredientsMatchPotion(potionName)) {
      matchingPotion = potions[potionName];
      matchingPotionName = potionName;
      break;
    }
  }


  if (matchingPotion) {
    potionResultText.textContent = getPotion(matchingPotionName).name;
    potionResultImage.src = getPotion(matchingPotionName).image;
  }
});

console.log(getPotion("healingPotion"));
reset.addEventListener("click", () => {
  resetIngredients();
  potionResultText.textContent = "Results of your brew:";
  potionResultImage.src = baseImageUrl("empty")
});


