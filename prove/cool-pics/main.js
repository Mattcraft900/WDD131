/* --- GALLERY MODALS --- */
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const closeBtn = modal.querySelector('.close-btn');
const modalImg = modal.querySelector('img');

// Clicking an image opens a modal with its bigger version
gallery.addEventListener('click', openModal);

function openModal(e) {
    // Generate the big image's filepath based on what was clicked (even though they're all the same)
    let imgSrc = e.target.src;
    let bigImgSrc = imgSrc.replace('-sm', '-full');
    console.log(imgSrc, bigImgSrc);
    // Set the big image's filepath
    modalImg.src = bigImgSrc;
    // Open the modal
    modal.showModal();
}

// The close button closes the modal when clicked
closeBtn.addEventListener('click', (e) => modal.close())
// The modal closes if the user clicks outside the photo
modal.addEventListener('click', (e) => {
    if (e.target != modalImg) {
        modal.close();
    }
});


/* --- MENU BUTTON --- */
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// When the menu button is clicked, open/close the menu
menuBtn.addEventListener('click', (e) => {
    // Set the nav's display to "none if it was "flex" or vice versa
    // I used != flex because for some reason, the display field is marked as empty when the site first loads??
    menu.style.display = (menu.style.display != "flex") ? "flex" : "none";
});
// Had to google this one, but if this isn't here, 
//  then if you have the menu closed in a narrow window but expand to a wider one, the menu doesn't come back
window.addEventListener('resize', (e) => {
    menu.style.display = (window.innerWidth >= 1000) ? "flex" : "none";
})
