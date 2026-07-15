import { characterList } from './characters.js';
import { buildCharacterCard } from './character-card.js';

const partyGallery = document.getElementById('party-gallery');
const opcGallery = document.getElementById('opc-gallery');
const npcGallery = document.getElementById('npc-gallery');
const allGalleries = [...document.getElementsByClassName('character-gallery')];


// As soon as the page loads,
document.addEventListener('DOMContentLoaded', e => {
    // Add all the characters to the page in the appropriate spots
    characterList.forEach((character) => {
        if (character != undefined) {
            const charCard = buildCharacterCard(character);
            if (character.category === "party") {
                partyGallery.innerHTML += charCard;
            } else if (character.category === "opc") {
                opcGallery.innerHTML += charCard;
            } else {
                npcGallery.innerHTML += charCard;
            }
        }
    });
    // If any section is empty, put a default message in it instead
    const emptyMessage = document.createElement('p');
    emptyMessage.classList.add('empty-message', 'lucy-text', 'stylized');
    emptyMessage.innerText = "No characters here yet. :)";
    allGalleries.forEach(gallery => {
        if ([...gallery.querySelectorAll('*')].length === 0) {
            gallery.appendChild(emptyMessage);
        }
    });
});


