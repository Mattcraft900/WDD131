import { characterList } from './characters.js';
import { parseLucyToHTML } from './travelogue.js';

const charName = document.getElementById('character-name');
const charImg = document.getElementById('character-img');
const charStatsList = document.getElementById('stats-list');
const charFullName = document.getElementById('full-name');
const charAge = document.getElementById('age');
const charSpecies = document.getElementById('species');
const charGender = document.getElementById('gender');
const charDesc = document.getElementById('character-description');
const formatDropdown = document.getElementById('format-dropdown');

// Read in the URL parameters to know which character to display
const parsedUrl = new URL(window.location.href);
const charID = parsedUrl.searchParams.get("id");
const character = characterList.find((character) => {
    return character.id == charID;
});

// Upon page load, populate the page data
document.addEventListener('DOMContentLoaded', e => {
    // If the URL gives invalid parameters, replace the whole page with a simple error message.
    if (character == undefined) {
        document.querySelector('main').innerHTML = `
            <div id="char-not-found">
                <p>Oops!<br>Looks like this record doesn\'t exist.</p>
                <a href="bio-selection.html" id="go-back">Back to Character List</a>
            </div>
        `;

        return;
    }

    // Populate stat fields if they are known; otherwise, hide them.
    // Name (This one is required)
    charName.innerText = character.name;
    // Image 
    if (character.img == null || character.img == "") {
        charImg.classList.add('hidden');
    } else { 
        charImg.setAttribute('src', `images/${character.img}`);
        charImg.setAttribute('alt', `Image of ${character.name}`);
    }
    // Full Name
    if (character.full_name == "" || character.full_name == character.name) {
        charFullName.parentElement.classList.add('hidden');
    } else { charFullName.innerText = character.full_name; }
    // Age
    if (character.age == "") {
        charAge.parentElement.classList.add('hidden');
    } else { charAge.innerText = character.age; }
    // Species
    if (character.species == "") {
        charSpecies.parentElement.classList.add('hidden');
    } else { charSpecies.innerText = character.species; }
    // Gender
    if (character.gender == "") {
        charGender.parentElement.classList.add('hidden');
    } else { charGender.innerText = character.gender; }

    // If the character is a party member or an old player character, populate some additional fields as well
    if (character.category === "party") {
        charStatsList.innerHTML += `
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
        charStatsList.innerHTML += `
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
            charDesc.parentElement.classList.add('hidden');
        }
    } else {
        charDesc.parentElement.classList.add('hidden');
    }
})

// Event listener for the formatting dropdown
formatDropdown.addEventListener('change', (e) => {
    const lucyText = [...charDesc.getElementsByClassName('lucy-text')];
    const nemahText = [...charDesc.getElementsByClassName('nemah-text')];
    // If simple is selected, update the elements' classes to match
    if (formatDropdown.value === "simple") {
        lucyText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'lucy-text simple');
        });
        nemahText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'nemah-text simple');
        });
    // If stylized is selected, update the elements' classes to match
    } else {
        lucyText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'lucy-text stylized');
        });
        nemahText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'nemah-text stylized');
        });
    }
});

// Helper function for displaying character classes
function classesToString(classes) {
    let classString = "";
    classes.forEach(c => {
        if (c != undefined) {
            if (classString != "") {
                classString += "/";
            }
            let className = c.class.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            classString += className + " " + c.level;
        }
    });
    return classString;
}