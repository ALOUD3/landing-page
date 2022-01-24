/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = Array.from(document.querySelectorAll('section')); //make an array aand put all sections though it
const menu = document.getElementById('navbar__list'); 
let numberofListItems = sections.length;  //dont know use fo it yet





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function listItems() {
//     for (section of sections) {
//         sectionName = section.getAttribute('data-nav');
//         sectionLink = section.getAttribute('id');

//         listItem = document.createElement('li');

//         listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;

//         menu.appendChild(listItem);


//     }
// }

function listItems(section){
    for( let i=0; i< sections.length; i++){
      // rest of the code will be same here...
      sectionName = section.getAttribute('data-nav');
      sectionLink = section.getAttribute('id');

      listItem = document.createElement('li');

      listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;

      menu.appendChild(listItem);



    }
  }




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/





// build the nav








// Add class 'active' to section when near top of viewport


// document.addEventListener('scroll',toggleActiveClass);

//Calling the function we wrote




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


