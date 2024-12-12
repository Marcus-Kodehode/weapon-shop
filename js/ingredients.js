// creating an object for the ingredients:
export const ingredients = {
  herbs: { ingredientName: "herbs", amount: 0, id: "addHerbs" },
  berries: { ingredientName: "berries", amount: 0, id: "addBerries" },
  water: { ingredientName: "water", amount: 0, id: "addWater" },
  mushrooms: { ingredientName: "mushrooms", amount: 0, id: "addMushrooms" },
  flowers: { ingredientName: "flowers", amount: 0, id: "addFlowers" },
  crystals: { ingredientName: "crystals", amount: 0, id: "addCrystals" },
};

// Function that can be called to get the amount of an ingredient
export default function ingredientAmount(ingredient) {
  return ingredients[ingredient].amount;
}

// Function that can be called to get the amount for all ingredients
export function checkAllIngredientsAmount() {
  return Object.keys(ingredients).map(
    (ingredient) => ingredients[ingredient].amount
  );
}

// Function that can be called to increase the amount of an ingredient. Preventing amount over 10:
export function increaseAmount(ingredient) {
  if (ingredients[ingredient].amount >= 10) {
    return ingredients[ingredient].amount;
  } else {
    return ingredients[ingredient].amount++;
  }
}

// Function that can be called to decrease the amount of an ingredient. Preventing negative amount:
export function decreaseAmount(ingredient) {
  if (ingredients[ingredient].amount <= 0) {
    return ingredients[ingredient].amount;
  } else {
    return ingredients[ingredient].amount--;
  }
}

// Function that can be called to reset the amount of all ingredients:
export function resetIngredients() {
  // Loop through the ingredients and reset their amounts, using Object.keys because ingredients not an array
  Object.keys(ingredients).forEach((ingredient) => {
    // Sets each amount to 0:
    ingredients[ingredient].amount = 0;

    // Get the amount element so the UI can be updated:
    const amountElement = document.getElementById(
      `${ingredients[ingredient].id}-amount`
    );
    // Updated (resets back to 0) the amount in the UI if amountElement exists
    if (amountElement) {
      amountElement.textContent = ingredients[ingredient].amount;
    }
  });
}
