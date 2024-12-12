import { checkIfIngredientsMatchPotion } from "./compare.js";
import { potionImagesToPreload } from "./imagesLoad.js";
import {
  decreaseAmount,
  increaseAmount,
  ingredients,
  resetIngredients,
} from "./ingredients.js";
import { basePotionImageUrl, getPotion, potions } from "./potions.js";

// Load in all dynamic images so they are included in the build:
document.addEventListener("DOMContentLoaded", () => {
  potionImagesToPreload();
});

// Get all the DOM elements needed:
const ingredientArea = document.getElementById("ingredients");
const brew = document.getElementById("brew");
const reset = document.getElementById("reset");
const potionResultText = document.getElementById("potionResultText");
const potionResultImage = document.getElementById("potionResultImage");

// initialy set the image to an empty potion:
potionResultImage.src = basePotionImageUrl("empty");

// Function that can be called to get the ingredient image url
export const baseIngredientImageUrl = (ingredient) => {
  return `./public/images/ingredients/${ingredient}-ingredient.webp`;
};

// Loop through the ingredients and add them to the DOM as HTML:

// Object.keys is used to iterate over the keys of the ingredients object since it's not an array
Object.keys(ingredients).forEach((ingredient) => {
  // Add the HTML for each ingredient dynamically to the DOM, using insertAdjacentHTML for better performance than innerHTML
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

  // get the div wrapper element that was just created so we can set the background image:
  const ingredientElement = document.getElementById(
    `${ingredients[ingredient].ingredientName}-ingredient`
  );

  // set the background image:
  ingredientElement.style.backgroundImage = `url("./public/images/ingredients/${ingredients[ingredient].ingredientName}-ingredient.webp")`;

  // get the add button and giving it an event listener (for increasing the amount of ingredients):
  const addButton = document.getElementById(
    `${ingredients[ingredient].id}-add`
  );
  addButton.addEventListener("click", () => {
    increaseAmount(ingredient);
    const amountElement = document.getElementById(
      `${ingredients[ingredient].id}-amount`
    );
    amountElement.textContent = ingredients[ingredient].amount;
  });

  // get the subtract button and giving it an event listener (for decreasing the amount of ingredients):
  const subtractButton = document.getElementById(
    `${ingredients[ingredient].id}-subtract`
  );
  subtractButton.addEventListener("click", () => {
    decreaseAmount(ingredient);
    const amountElement = document.getElementById(
      `${ingredients[ingredient].id}-amount`
    );
    amountElement.textContent = ingredients[ingredient].amount;
  });
});

// Add an event listener to the "brew" button to check if the current ingredients match a potion
brew.addEventListener("click", () => {
  let matchingPotion;
  let matchingPotionName;
  // Iterate through all potion names to check if the current ingredients match any potion
  for (const potionName in potions) {
    if (checkIfIngredientsMatchPotion(potionName)) {
      matchingPotion = potions[potionName]; // Save the matching potion object
      matchingPotionName = potionName; // Save the name of the matching potion
    }
  }

  // If a matching potion is found, update the result text and image
  if (matchingPotion) {
    potionResultText.textContent = getPotion(matchingPotionName).name; // Set the potion name in the result text
    potionResultImage.src = getPotion(matchingPotionName).image; // Set the corresponding image for the potion
  }

  // Reset the ingredient amounts after brewing
  resetIngredients();
});

// Add an event listener to the "reset" button to reset the ingredients and UI
reset.addEventListener("click", () => {
  resetIngredients(); // Reset all ingredient amounts to their initial values
  potionResultText.textContent = "Brew a potion:"; // Reset the result text to the default message
  potionResultImage.src = basePotionImageUrl("empty"); // Set the result image to an empty potion image
});
