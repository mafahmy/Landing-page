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
const navigationList = document.querySelector('ul');                     // selecting the unordered list
const windowHeight = visualViewport.height;                              // getting the view height
const toTheTop = document.querySelector('button');                       // selecting the button

/**
 * Creates an anchor element for the section with the given index.
 * @param {number} index - The index of the section.
 * @returns {HTMLAnchorElement} The created anchor element.
 */
function createSectionLink(index) {
    // Create the anchor element
    const sectionLink = document.createElement('a');
    // Create the link text
    const linkText = document.createTextNode(`Section ${index + 1}`);
    // Append the link text to the anchor element
    sectionLink.appendChild(linkText);
    // Set the href attribute of the anchor element
    sectionLink.href = `#section${index + 1}`;
    // Add a class to the anchor element
    sectionLink.classList.add('section-link');
    // Add a click event listener to the anchor element
    sectionLink.addEventListener('click', smoothScroll);
    // Return the created anchor element
    return sectionLink;
}

/**
 * Smoothly scrolls to the target of the clicked anchor element.
 * @param {Event} e - The click event.
 */
function smoothScroll(e) {
    // Prevent the default action of the click event
    e.preventDefault();
    // Get the href attribute of the clicked anchor element
    const href = this.getAttribute('href');
    // Get the offsetTop of the target element
    const offsetTop = document.querySelector(href).offsetTop;
    // Scroll to the target element with a smooth behavior
    scrollTo({
        behavior: 'smooth',
        top: offsetTop
    });
}
/**
 * A function to build the navigation based on the sections in the HTML
 */
function navigationBuild() {
    sections.forEach((element, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-nav', element.getAttribute('data-nav'));
        const sectionLink = createSectionLink(index);
        listItem.appendChild(sectionLink);
        navigationList.appendChild(listItem);
    })
}
navigationBuild();

document.addEventListener('scroll', function ()                    //scroll event to set and unset the class to active
{
    sections.forEach(function (element) {
        const boundry = element.getBoundingClientRect();
        const listItem = document.querySelector(`li[data-nav = "${element.getAttribute('data-nav')}"]`);
        if (boundry.top + (boundry.height / 1.4) <= windowHeight && boundry.top + (boundry.height / 3) >= 0) {
            element.classList.add('your-active-class');
            listItem.classList.add('active');
        }
        else {
            element.classList.remove('your-active-class');
            listItem.classList.remove('active');
        }
    });
});
toTheTop.addEventListener('click', function ()                         // adding a click event to scroll to the top button
{
    scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    );
});

