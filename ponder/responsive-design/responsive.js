let menuButton = document.querySelector('.menu-btn');

// event listener
//Remeber to only pass in the function name that should get called, no parentheses
menuButton.addEventListener("click", handleMenuButtonClicked);

// The optional 'event' parameter allows the function to access the "metadata" of the event 
//      (like the x- and y-coordinate of the mouse when clicked, for example)
//      This can be called anything -- but you should *really* use 'event', or some people use 'e'
function handleMenuButtonClicked(event) {
    // console.log(event);

    // Toggle on/off the menu display
    document.querySelector('nav').classList.toggle('show');

    // Change the menu button icon to an X
    document.querySelector('.menu-btn').classList.toggle('change')
};