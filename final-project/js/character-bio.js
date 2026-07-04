import { characterList } from './characters.js';

const charName = document.getElementById('character-name');
const charImg = document.getElementById('character-img');
const charStatsSection = document.getElementById('stats-section');
const charFullName = document.getElementById('full-name');
const charAge = document.getElementById('age');
const charSpecies = document.getElementById('species');
const charGender = document.getElementById('gender');
const charDesc = document.getElementById('character-description');
const formatDropdown = document.getElementById('format-dropdown');

const parsedUrl = new URL(window.location.href);
const charID = parsedUrl.searchParams.get("id");
const character = characterList.find((character) => {
    return character.id == charID;
});

// Upon page load, populate the data
document.addEventListener('DOMContentLoaded', e => {
    if (character == undefined) {
        document.querySelector('main').innerHTML = '<p id="char-not-found">Oops! Looks like this record doesn\'t exist.</p>';
        return;
    }

    // Populate stat fields if they are known; otherwise, hide them.
    // Name (This one is required)
    charName.innerText = character.name;
    // Image 
    if (character.img == null || character.img == "") {
        charImg.classList.append('hidden');
    } else { 
        charImg.setAttribute('src', `images/${character.img}`);
        charImg.setAttribute('alt', `Image of ${character.name}`);
    }
    // Full Name
    if (character.img == "" || character.full_name == character.name) {
        charFullName.parentElement.classList.append('hidden');
    } else { charFullName.innerText = character.full_name; }
    // Age
    if (character.age == "") {
        charAge.parentElement.classList.append('hidden');
    } else { charAge.innerText = character.age; }
    // Species
    if (character.species == "") {
        charSpecies.parentElement.classList.append('hidden');
    } else { charSpecies.innerText = character.species; }
    // Gender
    if (character.gender == "") {
        charGender.parentElement.classList.append('hidden');
    } else { charGender.innerText = character.gender; }

    // If the character is a party member or an old player character, populate some additional fields as well
    if (character.category === "party") {
        charStatsSection.innerHTML += `
            <div class="stat-div">
                <label for="player" class="stat-name">Player: </label>
                <p id="player" class="stat-value">${character.player}</p>
            </div>
            <div class="stat-div">
                <label for="dnd-class" class="stat-name">Class: </label>
                <p id="dnd-class" class="stat-value">${classesToString(character.classes)}</p>
            </div>
        `;
    } else if (character.category === "opc") {
        charStatsSection.innerHTML += `
            <div class="stat-div">
                <label for="player" class="stat-name">Original Player: </label>
                <p id="player" class="stat-value">${character.player}</p>
            </div>
        `;
    } 

    // Populate the character description, if it exists
    if (character.description != null) {
        const fullDesc = character.description.join('\n').trim();
        if (fullDesc != "") {
            charDesc.innerHTML = parseLucyToHTML(fullDesc);
        } else {
            charDesc.parentElement.classList.append('hidden');
        }
    } else {
        charDesc.parentElement.classList.append('hidden');
    }
})

// Event listener for the formatting dropdown
formatDropdown.addEventListener('change', () => {
    const lucyText = charDesc.getElementsByClassName('lucy-text');
    const nemahText = charDesc.getElementsByClassName('nemah-text');
    if (formatDropdown.value === "simple") {
        lucyText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'lucy-text simple');
        });
        nemahText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'nemah-text simple');
        });
    } else {
        lucyText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'lucy-text stylized');
        });
        nemahText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'nemah-text stylized');
        });
    }
})

// Helper function for displaying character classes
function classesToString(classes) {
    let classString = "";
    classes.forEach((c) => {
        if (classString != "") {
            classString += "/";
        }
        classString += classes[c].class + " " + classes[c].level;
    });
}

// Helper function for formatting Lucy's notes/entries into HTML elements
// Format the entry text into something that's both delineated for CSS and sanitized for the DOM
function parseLucyToHTML(rawText) {
    // This is extremely jank but it works and I don't want to talk about it
    let newText = '<p class="lucy-text stylized">'
                + rawText.replace('<', '{').replace('>', '}')
                         .replace('{', '</p><p class="nemah-text stylized">\<')
                         .replace('}', '\></p><p class="lucy-text stylized">')
                         .replace('\n', '<br>')
                + '</p>';
    return newText;
}