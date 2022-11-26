function hamburgerMenuToggleStyle(x) {
    x.classList.toggle("change");
}

const menuButton = document.getElementById('hamMenuIcon');
const menuSpace = document.getElementById('menuSpace')
const body = document.getElementsByTagName('body')[0];
// Text inside the menu 👇
const itemOptions = document.querySelectorAll('.menuItemOption');
// Menu Background 👇
const menuBackground = document.getElementById("menuBackground");


// Menu already opened? 
// false = closed, true = open 👇
let menuButtonToggle = false; 



menuButton.onclick = (x) => {
    // Check whether the menu is already open (menuButtonToggle = false means closed)
    if (!menuButtonToggle) {
        // Disable Scrolling
        body.classList.add('disbleScrolling')

        // Delete ending classes if applied.
        // To items
        itemOptions.forEach(function(element) {
            element.classList.remove("menuItemOptionEnd");
        })
        // And background
        menuBackground.classList.remove("menuBackgroundEnd");

        //Remove menu icon background.
        document.getElementsByClassName('menu-icon')[0].classList.remove('menuBackground');

        // Make the menu appear
        menuSpace.classList.toggle ('invisible')
        // Set menuButtonToggle to true so the menu won't open again.
        menuButtonToggle = true;

        // If there's a light background behind the menu, text will turn black.
        if (lightSectionBehind) {
            itemOptions.forEach(function(element) {
                element.style.color = 'black';
            })
        } else {
            itemOptions.forEach(function(element) {
                element.style.color = 'white';
            })
        }
    } else if (menuButtonToggle) {
        closeMenu();
    }
}

function closeMenu() {
    // Ending animation to each element.
    // Items
    itemOptions.forEach(function(element) {
        element.classList.toggle("menuItemOptionEnd");
    })
    // Background
    menuBackground.classList.toggle("menuBackgroundEnd");
    // Make the menu icon get back to its normal state
    document.getElementsByClassName('menu-icon__cheeckbox')[0].checked = false;
    // Apply background to the menu icon.
    document.getElementsByClassName('menu-icon')[0].classList.add('menuBackground');
    // Set a timeout to let the animation be visible.
    setTimeout(() => {
        // Enable Scrolling
        body.classList.remove('disbleScrolling')
        // Make the menu dissapear 
        menuSpace.classList.toggle ('invisible')
        // Set menuButtonToggle to false so the menu can be opened again.
        menuButtonToggle = false;
    }, 500)
}
