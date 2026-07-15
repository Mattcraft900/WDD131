// Helper function for building a character card
export function buildCharacterCard(character) {
    if (character === undefined) {
        return "";
    }

    let newCard = `<a href="character-bio.html?id=${character.id}">`;
    if (character.category === "party") {
        newCard += `
            <div class="character-card party-character-card">
                <img src="images/${character.name.trim().toLowerCase()}-small.jpg" alt="Image of ${character.name}" class="character-img">
        `
    } else if (character.category === "opc") {
        newCard += `<div class="character-card opc-character-card">`
    } else {
        newCard += `<div class="character-card npc-character-card">`
    }
    newCard += `
            <h3 class="character-name">${character.name}</h3>
            <p class="character-snippet">${character.snippet}</p>
        </div>
        </a>
    `
    return newCard;
}
