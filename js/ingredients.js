export const ingredients = {
  herbs: { ingredientName: "herbs", amount: 0, id: "addHerbs" },
  berries: { ingredientName: "berries", amount: 0, id: "addBerries" },
  mushrooms: { ingredientName: "mushrooms", amount: 0, id: "addMushrooms" },
  water: { ingredientName: "water", amount: 0, id: "addWater" },
  flowers: { ingredientName: "flowers", amount: 0, id: "addFlowers" },
};

export default function ingredientAmount(ingredient) {
  return ingredients[ingredient].amount;
}

// console.log(ingredients["herbs"]);

export function increaseAmount(ingredient) {
  return ingredients[ingredient].amount++;
}

export function resetIngredients() {
  Object.keys(ingredients).forEach((ingredient) => {
    ingredients[ingredient].amount = 0;

    const amountElement = document.getElementById(
      `${ingredients[ingredient].id}-amount`
    );
    if (amountElement) {
      amountElement.textContent = ingredients[ingredient].amount;
    }
    // amountElement
    // ? (amountElement.textContent = ingredients[ingredient].amount)
    // : null;
  });
}
