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
    scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    );
});
/**
 * End Helper Functions
 * Begin Main Functions
 * The function to build the navigation once the node list [data-nav] updated
*/
function navigationBuild() {
    sections.forEach(function (element, index ) 
    {
        const boundry = element.getBoundingClientRect();
        const list = document.createElement('li');
        let indexPlus1 = index + 1;
        let a = document.createElement('a');
        let link = document.createTextNode("Section " + indexPlus1);
        
        a.appendChild(link);
        a.href = "#section" + indexPlus1;
        a.style.textDecoration = 'none';
        a.style.color = 'black';
        a.addEventListener('click',smooth);

        list.appendChild(a);
        uList.appendChild(list); 

        function smooth(e)
        {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;
            scrollTo(
                {
                    behavior: 'smooth',
                    top : offsetTop
                }
            )
        };
        document.addEventListener('scroll',function()
        {
            const boundry = element.getBoundingClientRect();
            if (boundry.top + (boundry.height / 1.4) <= windowHeight && boundry.top + (boundry.height / 3) >=0)
            {
                element.classList.add('your-active-class');
            }
            else {
                element.classList.remove('your-active-class');
            }
        });
    });

}
// build the nav
// changing the text color of the whole nav menu

navigationBuild();

// Add class 'active' to section when near top of viewport


    





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

    


// Build menu 

// Scroll to section on link click

// Set sections as active


