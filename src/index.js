import './style.css';
import {createListItem} from './domTools';
import {home} from './home';
import {menu} from './menu';

console.log('working');
const content = document.querySelector('#content')

function nav() {
    const nav = document.createElement('div');
    nav.id = 'nav';

    // Create logo
    const logo = document.createElement('div');
    logo.innerHTML = '';
    logo.classList.add('logo');

    // Create list item with HOME MENU CONTACT
    const navItems = document.createElement('ul');
    navItems.id = 'navItems'
    
    const navHome = createListItem('Home');
    const navMenu = createListItem('Menu');
    const navContact = createListItem('Contact Us');

    // Add all list items to navbar list
    navItems.append(navHome, navMenu, navContact);

    nav.appendChild(logo);
    nav.appendChild(navItems);

    return nav;
}

content.appendChild(nav());

// Add body div to content
content.appendChild(home());

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact-us');

homeButton.addEventListener('click', () => {
	content.removeChild(content.children[1]);
	content.appendChild(home());
})

menuButton.addEventListener('click', () => {
	content.removeChild(content.children[1]);
	content.appendChild(menu());
});
