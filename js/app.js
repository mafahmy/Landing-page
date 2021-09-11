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
const windowHeight = visualViewport.height;
const toTheTop = document.querySelector('button');
const links = document.querySelectorAll('a ul li #navbar__list' );
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/ 
toTheTop.addEventListener('click', function()
{
    window.scrollTo(0,0);
});
/**
 * End Helper Functions
 * Begin Main Functions
 * The function to build the navigation once the node list [data-nav] updated
*/
function navigationBuild() {
    sections.forEach(function (element, index ) 
    {
        const list = document.createElement('li');
        let indexPlus1 = index + 1;
        let a = document.createElement('a');
        let link = document.createTextNode("Section " + indexPlus1);
        a.appendChild(link);
        a.href = "#section" + indexPlus1;
        a.style.textDecoration = 'none';
        a.style.color = 'black';
        
        list.appendChild(a);
        uList.appendChild(list); 
        a.addEventListener('click',smooth);   
    });
}
// build the nav
// changing the text color of the whole nav menu

navigationBuild();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', function () 
{
    const firstSection = document.getElementById('section1');
    const boundry1 = firstSection.getBoundingClientRect();
    
    if (boundry1.top + (boundry1.height / 1.4) <= windowHeight && (boundry1.top + (boundry1.height) / 3) >= 0) 
    {
        firstSection.classList.add('your-active-class');
    }
    else 
    {
        firstSection.classList.remove('your-active-class');
    }
});
document.addEventListener('scroll', function () 
{
    const secondSection = document.getElementById('section2');
    const boundry2 = secondSection.getBoundingClientRect();
    
    if (boundry2.top + (boundry2.height / 1.4) <= windowHeight && (boundry2.top + (boundry2.height) / 3) >= 0) 
    {
        secondSection.classList.add('your-active-class');
    }
    else 
    {
        secondSection.classList.remove('your-active-class');
    }
});
document.addEventListener('scroll', function () 
{
    const thirdSection = document.getElementById('section3');
    const boundry3 = thirdSection.getBoundingClientRect();
    
    if (boundry3.top + (boundry3.height / 1.4) <= windowHeight && (boundry3.top + (boundry3.height) / 3) >= 0) 
    {
        thirdSection.classList.add('your-active-class');
    }
    else 
    {
        thirdSection.classList.remove('your-active-class');
    }
});
document.addEventListener('scroll', function () 
{
    const forthSection = document.getElementById('section4');
    const boundry4 = forthSection.getBoundingClientRect();
    
    if (boundry4.top + (boundry4.height / 1.4) <= windowHeight && (boundry4.top + (boundry4.height) / 3) >= 0) 
    {
        forthSection.classList.add('your-active-class');   
    }    
    else 
    {
        forthSection.classList.remove('your-active-class');    
    }
});




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/
/*for (const link of links)
{
    link.addEventListener('click',smooth);
}*/
function smooth(e)
{
    e.preventDefault();
    console.log('mahmoud');
}
    


// Build menu 

// Scroll to section on link click

// Set sections as active


