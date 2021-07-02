import './sass/main.scss';
import './js/theme.js';
import menu from './menu.json';
import menuTemplate from './templates/menu.hbs';

const menuItems = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);
menuItems.insertAdjacentHTML('beforeend', menuMarkup);


function createMenuMarkup(menu) {
    return menuTemplate(menu);
}
// console.log(menu);
// console.log(menuTemplate);

