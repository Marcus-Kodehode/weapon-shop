export const ingredients = {
  herbs: { ingredientName: "herbs", amount: 0, id: "addHerbs" },
  berries: { ingredientName: "berries", amount: 0, id: "addBerries" },
  water: { ingredientName: "water", amount: 0, id: "addWater" },
  mushrooms: { ingredientName: "mushrooms", amount: 0, id: "addMushrooms" },
  flowers: { ingredientName: "flowers", amount: 0, id: "addFlowers" },
};

export default function ingredientAmount(ingredient) {
  return ingredients[ingredient].amount;
}

// console.log(ingredients["herbs"]);

export function increaseAmount(ingredient) {
  ingredients[ingredient].amount === 10 ? false : ingredients[ingredient].amount++;
}

export function decreaseAmount(ingredient) {
  ingredients[ingredient].amount === 0 ? false :ingredients[ingredient].amount--;
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
