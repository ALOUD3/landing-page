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

const sections = document.querySelectorAll('section'); //make an array aand put all sections though it
const navArray = document.getElementById('navbar__list'); 






/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



function listItems(){
  for(i=0; i<sections.length; i++){
    let list=document.createElement("li");
    let navLinks=document.createElement("a");
    navLinks.textContent=section[i].id;
    navLinks.setAttribute("href", section[i].dataset.nav);
    list.appendChild(navLinks)
    navArray.appendChild(list)
  }
}





function youActiveClass(){
  for (const section of sections ){
      const containers = section.getBoundingClientRect();
      if (containers.top <= 150 && containers.bottom >= 150){
          section.classList.add('your-active-class');
      } else {
          section.classList.remove('your-active-class');
      }
  }
}





document.addEventListener("scroll", function() {
  youActiveClass();
});


listItems()

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


