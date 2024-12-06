// const addHerbs = document.getElementById("addHerbs");
// const addBerries = document.getElementById("addBerries");
// const addMushrooms = document.getElementById("addMushrooms");
// const addWater = document.getElementById("addWater");
// const addFlowers = document.getElementById("addFlowers");

const ingredientsButtons = document.getElementById("ingredients");

import checkAllIngredientsAmount, {
  checkIfIngredientsMatchPotion,
  checkPotionIngredients,
  currentPotion,
  getPotion,
} from "./compare.js";
import {
  increaseAmount,
  ingredients,
  resetIngredients,
} from "./ingredients.js";
import { potions } from "./potions.js";

const brew = document.getElementById("brew");
const reset = document.getElementById("reset");
const potionResultText = document.getElementById("potionResultText");
const potionResultImage = document.getElementById("potionResultImage");

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
  for (const potionName in potions) {
    if (checkIfIngredientsMatchPotion(potionName)) {
      matchingPotion = potions[potionName];
      break;
    }
  }

  //TODO 2 fiks here videre etter todo1

  console.log(matchingPotion);
  console.log(getPotion(matchingPotion));
  console.log(potionResultText);
  console.log(potionResultText.textContent);
  console.log(potionResultImage);
  console.log(potionResultImage.src);
  console.log(currentPotion);

  console.log(getPotion(matchingPotion).image);

  if (matchingPotion) {
    potionResultText.textContent = getPotion(matchingPotion).name;
    potionResultImage.src = getPotion(matchingPotion).image;
  }
});

console.log(getPotion("healingPotion"));
// reset.addEventListener("click", () => {
//   resetIngredients();
//   potionResultText.textContent = currentPotion.name;
//   potionResultImage.src = currentPotion.image;
// });

// console.log(checkPotionIngredients("strengthPotion"));
// console.log(checkAllIngredientsAmount());

// console.log(checkIfIngredientsMatchPotion("strengthPotion"));
