
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

// Code to show modal  - Use event parameter 'e'   
function openModal(e) {
    // .target accesses the DOM element that was clicked on (specifics pending, asked AI)
    // .src gives the 'src' attribute of that elemtn - which works for img's, a's, et.c because they have a 'src' attribute
    //      (the src returned is the full filepath)
    console.log(e.target.src);
    let imageSrc = e.target.src;

    // Manipulate the file name to get the bigger version of the clicked-on image
    let bigImageSrc = imageSrc.replace("-sm", "-full")

    // Remember that properties like '.src' works for both reading and writing
    modalImage.src = bigImageSrc;
    // Remember that the opposite of .showModal() is .close() [yeah it's silly]
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          