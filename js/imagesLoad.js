import { potions } from "./potions.js";

export const imagesToPreload = () => {
    for (const potion in potions) {
        const img = new Image();
        img.src = potions[potion].image
        document.body.appendChild(img);
        img.style.display = 'none';
    }
}

