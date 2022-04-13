'use strict';

const header = document.querySelector('header');
header.querySelector('h1').innerHTML = 'Lucia Alejandra Mejia Alonzo';
header.querySelector('h1').setAttribute('style', 'color: #B100F9;');
document
    .querySelector('img')
    .setAttribute(
        'src',
        'https://static.wixstatic.com/media/4f6867_f7d8fb5d43bc4bdcacb08a49871b9610~mv2.jpg/v1/fill/w_1000,h_1043,al_c,q_90,usm_0.66_1.00_0.01/4f6867_f7d8fb5d43bc4bdcacb08a49871b9610~mv2.jpg'
    );

document.querySelector('img').setAttribute('width', '500');

document.querySelector('p').innerHTML =
    '<strong>Transexual Woman developer</strong><br>' +
    'Ella es una chica que se esfuerza mucho por ser aceptada en la sociedad';
