const header = document.querySelector('header');
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav');
const menuList = document.getElementById('menu-list');


// Insert header HTML upon page load (happens on every page)
document.addEventListener('DOMContentLoaded', function insertHeader() {
    header.innerHTML = `
        <button id="menu-btn">=</button>
        <nav class="hidden">
            <ul id="menu-list">
                <li class="nav-link"><a href="index.html">Home</a></li>
                <li class="nav-link"><a href="bio-selection.html">Characters</a></li>
                <li class="nav-link"><a href="travelogue.html">Lucy's Travelogue</a></li>
            </ul>
        </nav>
    `
});

// When menu button is clicked, toggle sidebar menu options
menuBtn.addEventListener('click', e => {
    menuBtn.attributes.toggle('opened');
    nav.classList.toggle('hidden');
})
