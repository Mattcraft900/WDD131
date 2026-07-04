import { characterList } from './characters.js';

const partyGallery = document.getElementById('party-gallery');
const npcGallery = document.getElementById('opc-gallery');
const opcGallery = document.getElementById('npc-gallery');


// Add all the characters to the page in the appropriate spots
document.addEventListener('DOMContentLoaded', e => {
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
});

// Helper function for building a character card
export function buildCharacterCard(character) {
    if (character === undefined) {
        return "";
    }

    let newCard = `<a href="character-bio.html?id=${character.id}">`;
    if (character.category === "party") {
        newCard += `
            <div class="character-card party-character-card">
                <img src="${character.img}" alt="Image of ${character.name}" class="character-img">
        `
    } else if (character.category === "opc") {
        newCard += `<div class="character-card opc-character-card">`
    } else {
        newCard += `<div class="character-card npc-character-card">`
    }
    newCard += `
            <h3 class="character-name">${character.name}</h3>
            <p class="character-snippet">${character.snippet}</p>
        </div></a>
    `
    return newCard;
}

