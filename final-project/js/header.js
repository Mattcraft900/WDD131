const header = document.querySelector('header');

// Insert header HTML upon page load (happens on every page)
document.addEventListener('DOMContentLoaded', function insertHeader() {
    // Build the header's inner DOM elements
    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu-btn';
    menuBtn.innerHTML = `
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    `;
    const navMenu = document.createElement('nav');
    const menuList = document.createElement('ul');
    menuList.id = 'menu-list';
    menuList.innerHTML = `
        <li class="nav-link"><a href="index.html">Home</a></li>
        <li class="nav-link"><a href="bio-selection.html">Characters</a></li>
        <li class="nav-link"><a href="travelogue.html">Lucy's Travelogue</a></li>
    `;

    // Add the event listener to the menu button
    menuBtn.addEventListener('click', e => {
        menuBtn.attributes.toggle('opened');
        navMenu.classList.toggle('hidden');
    });
    
    // Attach the elements to the DOM
    header.appendChild(menuBtn);
    header.appendChild(navMenu);
    navMenu.appendChild(menuList);
});
