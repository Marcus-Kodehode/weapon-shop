// creating an object for the ingredients:
export const ingredients = {
  ironOre: { ingredientName: "ironOre", amount: 0, id: "addIronOre" },
  wood: { ingredientName: "wood", amount: 0, id: "addWood" },
  leatherStraps: { ingredientName: "water", amount: 0, id: "addWater" },
  steel: { ingredientName: "leatherStraps", amount: 0, id: "addLeatherStraps" },
  water: { ingredientName: "steel", amount: 0, id: "addSteel" },
  crystals: { ingredientName: "crystals", amount: 0, id: "addCrystals" },
};

// Function that can be called to get the amount of an ingredient
export default function ingredientAmount(ingredient) {
  console.log(ingredient)
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
  console.log(ingredients)
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
  Object.keys(ingredients).forEach((ingredient) => {
    ingredients[ingredient].amount = 0;
    const amountElement = document.getElementById(
      `${ingredients[ingredient].id}-amount`
    );
    if (amountElement) {
      amountElement.textContent = ingredients[ingredient].amount;
    }
  });
}

