import { buildCharacterCard } from "./bio-selection.js";
import { partyCharacters } from "./characters.js";

const mugsGallery = document.getElementById('mugs-gallery');

document.addEventListener('DOMContentLoaded', (e) => {
    partyCharacters.forEach((character) => {
        mugsGallery.innerHTML += buildCharacterCard(character);
    });
    // If there are an odd number of party members, give the last one an extra class that will center it on a 2-column grid layout
    if (partyCharacters.length % 2 === 1) {
        const lastChild = mugsGallery.getElementsByClassName('character-card')[partyCharacters.length-1];
        if (lastChild != undefined) {
            lastChild.parentElement.classList.add('centered');
        }
    }
});
