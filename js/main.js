// const addHerbs = document.getElementById("addHerbs");
// const addBerries = document.getElementById("addBerries");
// const addMushrooms = document.getElementById("addMushrooms");
// const addWater = document.getElementById("addWater");
// const addFlowers = document.getElementById("addFlowers");

import { checkIfIngredientsMatchPotion, getPotion } from "./compare.js";
import { imagesToPreload } from "./imagesLoad.js";
import {
  decreaseAmount,
  increaseAmount,
  ingredients,
  resetIngredients,
} from "./ingredients.js";
import { basePotionImageUrl, potions } from "./potions.js";

// Load in all dynamic images so they are included in the build:
document.addEventListener("DOMContentLoaded", () => {
  imagesToPreload();
});

// Get all the DOM elements needed:
const ingredientArea = document.getElementById("ingredients");
const brew = document.getElementById("brew");
const reset = document.getElementById("reset");
const potionResultText = document.getElementById("potionResultText");
const potionResultImage = document.getElementById("potionResultImage");

// initialy set the image to an empty potion:
potionResultImage.src = basePotionImageUrl("empty");

export const baseIngredientImageUrl = (ingredient) => {
  return `./public/images/ingredients/${ingredient}-ingredient.webp`;
};

// Loop through the ingredients and add them to the DOM as buttons:
Object.keys(ingredients).forEach((ingredient) => {
  console.log("ingredientName", ingredients[ingredient].ingredientName);
  ingredientArea.insertAdjacentHTML(
    "beforeend",
    `
  <div class="ingredient-wrapper" id="${ingredients[ingredient].ingredientName}-ingredient">
    <p>
    ${ingredients[ingredient].ingredientName}
    </p>
    <div class="ingredients-buttons">
      <button class="add-button" id="${ingredients[ingredient].id}-add">
      +
      </button>
      <p id="${ingredients[ingredient].id}-amount" class="ingredient-amount">${ingredients[ingredient].amount}</p>
      <button class="subtract-button" id="${ingredients[ingredient].id}-subtract">
      -
      </button>
  </div>
    
  </div>
  `
  );

  const ingredientElement = document.getElementById(
    `${ingredients[ingredient].ingredientName}-ingredient`
  );

  ingredientElement.style.backgroundImage = `url("./public/images/ingredients/${ingredients[ingredient].ingredientName}-ingredient.webp")`;

  const addButton = document.getElementById(
    `${ingredients[ingredient].id}-add`
  );
  const subtractButton = document.getElementById(
    `${ingredients[ingredient].id}-subtract`
  );

  addButton.addEventListener("click", () => {
    increaseAmount(ingredient);
    const amountElement = document.getElementById(
      `${ingredients[ingredient].id}-amount`
    );
    amountElement.textContent = ingredients[ingredient].amount;
  });
  subtractButton.addEventListener("click", () => {
    decreaseAmount(ingredient);
    const amountElement = document.getElementById(
      `${ingredients[ingredient].id}-amount`
    );
    amountElement.textContent = ingredients[ingredient].amount;
  });
});

brew.addEventListener("click", () => {
  let matchingPotion = null;
  let matchingPotionName = null;
  for (const potionName in potions) {
    if (checkIfIngredientsMatchPotion(potionName)) {
      matchingPotion = potions[potionName];
      matchingPotionName = potionName;
    }
  }

  if (matchingPotion) {
    potionResultText.textContent = getPotion(matchingPotionName).name;
    potionResultImage.src = getPotion(matchingPotionName).image;
  }
  resetIngredients();
});

console.log(getPotion("healingPotion"));
reset.addEventListener("click", () => {
  resetIngredients();
  potionResultText.textContent = "Results of your brew:";
  potionResultImage.src = basePotionImageUrl("empty");
});
