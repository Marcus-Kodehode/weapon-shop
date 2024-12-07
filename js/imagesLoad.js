import { potions } from "./potions.js";

export const imagesToPreload = () => {
    for (const potion in potions) {
        const img = new Image();
        img.src = potions[potion].image
        console.log(potions[potion].image)
        document.body.appendChild(img);
        img.style.display = 'none';

        console.log('Preloading:', img.src);

        img.onload = () => console.log(`Image loaded: ${img.src}`);
        img.onerror = () => console.error(`Failed to load: ${img.src}`)
    }
}

