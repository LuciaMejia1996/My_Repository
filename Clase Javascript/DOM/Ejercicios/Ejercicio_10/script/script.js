'use strict';

const hamburger = document.querySelector('.menu > button');
const menu = document.querySelector('nav.navegation');

console.log(menu);

menu.setAttribute('style', 'display: none;');

function Onclick() {
    if (hamburger.classList.contains('is-active') === false) {
        hamburger.className += ' is-active';
        menu.setAttribute('style', '');
    } else {
        hamburger.classList.remove('is-active');
        menu.setAttribute('style', 'display: none;');
    }
}

hamburger.addEventListener('click', Onclick);
