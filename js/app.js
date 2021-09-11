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
const sections = document.querySelectorAll('[data-nav]');                // getting the all sections in one variable
const uList = document.querySelector('ul');                              // selecting the unordered list
const windowHeight = visualViewport.height;                              // getting the view height
const toTheTop = document.querySelector('button');                       // selecting the button 
/**
 * Define Global Variables
 * 
*//**
 * End Helper Functions
 * Begin Main Functions
 * The function to build the navigation once the node list [data-nav] updated
*/
// looping the sections list
function navigationBuild() {
    sections.forEach(function (element, index ) 
    {
        const boundry = element.getBoundingClientRect();                 //getting the boundry details of each section
        const list = document.createElement('li');
        let indexPlus1 = index + 1;                                      // adding 1 to the index starting with zero                   
        let a = document.createElement('a');                             // creating the anchor element           
        let link = document.createTextNode("Section " + indexPlus1);     // applying the section data-nav 
        a.appendChild(link);                                             // linking the data-nav to the anchor
        a.href = "#section" + indexPlus1;                                // setting the anchor href
        a.style.textDecoration = 'none';                                 // getting rid of the underline
        a.style.color = 'black';                                         // setting the style to black
        a.addEventListener('click',smooth);                              // adding a click event to fire the smooth function
        list.appendChild(a);                                             // adding the anchor to the list
        uList.appendChild(list);                                         // adding the list to the unordered list

        function smooth(e)                                               // function to sctroll smoothly
        {
            e.preventDefault();                                          // prevent the link default action
            const href = this.getAttribute('href');                        
            const offsetTop = document.querySelector(href).offsetTop;
            scrollTo(
                {
                    behavior: 'smooth',
                    top : offsetTop
                }
            )
        };   
    });   
}    
// build the nav

navigationBuild();

document.addEventListener('scroll',function()                    //scroll event to set and unset the class to active
{
    sections.forEach(function (element)
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
toTheTop.addEventListener('click', function()                            // adding a click event to scroll to the top button
    {
    scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
        );
     });

