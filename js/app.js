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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('[data-nav]');
const uList = document.querySelector('ul');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function navigationBuild()
{
    sections.forEach(function (element, index, nodes)
    {
        const list = document.createElement('li');
        // list.innerHTML = '<a href="#section + nodes + 1">section 1</a>';
        let indexPlus1 = index +1;
        let a = document.createElement('a');
        let link = document.createTextNode("Section " + indexPlus1);
        a.appendChild(link);
        a.href = "#section"+ indexPlus1;
        // a.title = "Section " + indexPlus1;
        list.appendChild(a);
        uList.appendChild(list);
    })    
    
}

// build the nav
// changing the text color of the whole nav menu

navigationBuild();

// const list = document.createElement('li');
// ulist.setAttribute('style', '.menu__link');
// uList.style.color = 'black';
// list.textContent = 'Section 1';
// uList.appendChild(list);
// uList.innerHTML = '<li> <a href = "#section1"> Section 1 <a/> <li/> <li><a href = "#section2"> Section 2 <a/></li> <li> <a href = "#section3"> Section 3 </a></li>'
// const sectionsTitle = ['#section1', '#section2', '#section3'];
// for (let linkTitle = 0; linkTitle < sectionsTitle.length; linkTitle ++ )
// uList.innerHTML = '<li> <a href = sectionsTitle[linkTitle] > Section   <a/> <li/> ';



                   







// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


