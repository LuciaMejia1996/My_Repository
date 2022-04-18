'use strict';

//Seleccionando divs principales
const div_1 = document.querySelector('div:nth-child(1)');
const div_2 = document.querySelector('div:nth-child(2)');
const div_3 = document.querySelector('div:nth-child(3)');

//console.log(div_1, div_2, div_3);
//modo por defecto light
div_1.setAttribute('class', 'light');
div_2.setAttribute('class', 'light');
div_3.setAttribute('class', 'light');

//Creando el primer h1 del nombre
const h1_Lucia = document.createElement('h1');
h1_Lucia.textContent = 'Lucia Alejandra Mejia Alonzo';
h1_Lucia.setAttribute('class', 'name');

div_1.appendChild(h1_Lucia);

//Creando botones de modo noche y modo dia
const lihgt = document.createElement('button');
const night = document.createElement('button');
lihgt.textContent = 'Modo dia';
night.textContent = 'Modo noche';
lihgt.addEventListener('click', dia);
night.addEventListener('click', noche);
lihgt.disabled = true;

//añadiendo los botones a la cabezera
div_1.appendChild(lihgt);
div_1.appendChild(night);

//funcion de dia
function dia() {
    div_1.setAttribute('class', 'light');
    div_2.setAttribute('class', 'light');
    div_3.setAttribute('class', 'light');
    lihgt.disabled = true;
    night.disabled = false;
}

//funcion de noche
function noche() {
    div_1.setAttribute('class', 'night');
    div_2.setAttribute('class', 'night');
    div_3.setAttribute('class', 'night');
    lihgt.disabled = false;
    night.disabled = true;
}
