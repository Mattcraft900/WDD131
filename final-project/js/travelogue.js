import { travelogue } from "./travelogue-entries.js";

const sessionCheckbox = document.getElementById('session-check');
const datesCheckbox = document.getElementById('game-date-check');
const formatDropdown = document.getElementById('format-dropdown');
const travelogueText = document.getElementById('travelogue-text');

// On page load, fill in the page with the travelogue content
document.addEventListener("DOMContentLoaded", (e) => {
    travelogue.forEach((entry) => {
        if (entry != undefined) {
            if (entry.session_date != null && entry.session_date.trim() != "") {
                const sessionHeading = document.createElement('h3');
                sessionHeading.classList.add('session-title', 'stylized');
                sessionHeading.innerText = entry.session_date;
                travelogueText.appendChild(sessionHeading);
            }
            entry.content.forEach((gamedate) => {
                if (gamedate != undefined) {
                    if (gamedate.game_date != null && gamedate.game_date.trim() != "") {
                        const gameDate = document.createElement('h4');
                        gameDate.classList.add('game-date', 'stylized');
                        gameDate.innerText = gamedate.game_date;
                        travelogueText.appendChild(gameDate);
                    }
                    const entryText = gamedate.text.join('\n').trim();
                    travelogueText.innerHTML += parseLucyToHTML(entryText);
                }
            });
        }
    });
});

// Event listeners for the date-heading checkboxes
sessionCheckbox.addEventListener('click', (e) => {
    const sessionTitles = [...travelogueText.getElementsByClassName('session-title')];
    sessionTitles.forEach((title) => {
        title.classList.toggle('hidden');
    });
})
datesCheckbox.addEventListener('click', (e) => {
    const gameDates = [...travelogueText.getElementsByClassName('game-date')];
    gameDates.forEach((date) => {
        date.classList.toggle('hidden');
    });
})

// Event listener for the formatting dropdown
formatDropdown.addEventListener('change', (e) => {
    const lucyText = [...travelogueText.getElementsByClassName('lucy-text')];
    const nemahText = [...travelogueText.getElementsByClassName('nemah-text')];
    const gameDates = [...travelogueText.getElementsByClassName('game-date')];
    // If simple is selected, update the elements' classes to match
    if (formatDropdown.value === "simple") {
        lucyText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'lucy-text simple');
        });
        nemahText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'nemah-text simple');
        });
        gameDates.forEach((textPiece) => {
            textPiece.setAttribute('class', 'game-date simple');
        });
    // If stylized is selected, update the elements' classes to match
    } else {
        lucyText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'lucy-text stylized');
        });
        nemahText.forEach((textPiece) => {
            textPiece.setAttribute('class', 'nemah-text stylized');
        });
        gameDates.forEach((textPiece) => {
            textPiece.setAttribute('class', 'game-date stylized');
        });
    }
});

// Helper function for formatting Lucy/Nemah's entries into HTML elements
// Format the entry text into something that's both delineated for CSS and sanitized for the DOM
export function parseLucyToHTML(rawText) {
    // This is extremely jank but it works and I don't want to talk about it, lol
    let newText = '<p class="lucy-text stylized">'
                + rawText.replaceAll('<', '{').replaceAll('>', '}')
                         .replaceAll('{', '</p><p class="nemah-text stylized">&lt;')
                         .replaceAll('}', '&gt;</p><p class="lucy-text stylized">')
                         .replaceAll('\n', '<br><br>')
                + '</p>';
    return newText;
}