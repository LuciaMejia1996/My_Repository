'use strict';
//Obteniendo la cantidad de filas
const filas = document.querySelectorAll('tr:nth-of-type(n+1)');

//Cogiendo los td menos el de la Nota final (siguen siendo objetos html)
const longitud = filas[1].querySelectorAll('td:not(td:last-child)');

// Cogiendo las notas de las materias debi hacer esto mas simple
const Notas_lenguaje = filas[1].querySelectorAll('td:not(td:last-child)');
const Notas_matematicas = filas[2].querySelectorAll('td:not(td:last-child)');
const Notas_ingles = filas[3].querySelectorAll('td:not(td:last-child)');
const Notas_historia = filas[4].querySelectorAll('td:not(td:last-child)');
const Notas_ciencia = filas[5].querySelectorAll('td:not(td:last-child)');

/**
 *  ########################################################
 */

//Calculando promedio de Lenguaje
let tmp_1 = 0;
for (let i = 0; i < longitud.length; i++) {
    tmp_1 += Number(Notas_lenguaje[i].textContent);
}

//Colocando la nota de Lenguaje
filas[1].querySelector('td:last-child').textContent = Math.ceil(
    tmp_1 / longitud.length
);

//Agregando rojo o verde dependiendo si pasa o no
if (tmp_1 / longitud.length >= 5) {
    const color = filas[1].querySelector('td:last-child');
    color.style.cssText = 'background-color: #34FD03;';
} else {
    const color = filas[1].querySelector('td:last-child');
    color.style.cssText = 'background-color: #EC7344;';
}

/**
 *  ########################################################
 */

//Calculando promedio de Matematicas
let tmp_2 = 0;
for (let i = 0; i < longitud.length; i++) {
    tmp_2 += Number(Notas_matematicas[i].textContent);
}

//Agregando la nota al ultimo coso
filas[2].querySelector('td:last-child').textContent = Math.ceil(
    tmp_2 / longitud.length
);

//Agregando color si tiene o no mayor que 7
if (tmp_2 / longitud.length >= 5) {
    const color = filas[2].querySelector('td:last-child');
    color.style.cssText = 'background-color: #34FD03;';
} else {
    const color = filas[2].querySelector('td:last-child');
    color.style.cssText = 'background-color: #EC7344;';
}

/**
 *  ########################################################
 */

//Calculando promedio de Matematicas
let tmp_3 = 0;
for (let i = 0; i < longitud.length; i++) {
    tmp_3 += Number(Notas_ingles[i].textContent);
}

//Agregando la nota a la coso final
filas[3].querySelector('td:last-child').textContent = Math.ceil(
    tmp_3 / longitud.length
);

//coso que comproeba despues del 7
if (tmp_3 / longitud.length >= 5) {
    const color = filas[3].querySelector('td:last-child');
    color.style.cssText = 'background-color: #34FD03;';
} else {
    const color = filas[3].querySelector('td:last-child');
    color.style.cssText = 'background-color: red;';
}

/**
 *  ########################################################
 */

//Calculando promedio de Historia
let tmp_4 = 0;
for (let i = 0; i < longitud.length; i++) {
    tmp_4 += Number(Notas_historia[i].textContent);
}

//Agregando la nota a la coso final
filas[4].querySelector('td:last-child').textContent = Math.ceil(
    tmp_4 / longitud.length
);

//coso que comproeba despues del 7
if (tmp_4 / longitud.length >= 5) {
    const color = filas[4].querySelector('td:last-child');
    color.style.cssText = 'background-color: #34FD03;';
} else {
    const color = filas[4].querySelector('td:last-child');
    color.style.cssText = 'background-color: red;';
}

/**
 *  ########################################################
 */

//Calculando promedio de Matematicas
let tmp_5 = 0;
for (let i = 0; i < longitud.length; i++) {
    tmp_5 += Number(Notas_ciencia[i].textContent);
}

//Agregando la nota a la coso final
filas[5].querySelector('td:last-child').textContent = Math.ceil(
    tmp_5 / longitud.length
);

//coso que comproeba despues del 7
if (tmp_5 / longitud.length >= 5) {
    const color = filas[5].querySelector('td:last-child');
    color.style.cssText = 'background-color: #34FD03;';
} else {
    const color = filas[5].querySelector('td:last-child');
    color.style.cssText = 'background-color: red;';
}

/**
 *  ########################################################
 */
