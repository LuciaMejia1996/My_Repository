/* 

Crear un suelo de discoteca (maya de minimo 4 x 4 cuadrdos).
Cada cuadrado cambiará a un color aleatorio periódicamente

*/

'use strict';
//coso que es un array de div
const piso = document.querySelectorAll('.piso > div');
//console.log(piso);

setInterval(() => {
    for (let i = 0; i < piso.length; i++) {
        //Seleccionando un numero al azar de entre 1 - 10, la cantidad de colores que tengo
        const random = Math.ceil(Math.random() * 10);

        //Usando las clases previamente creadas en el CSS
        piso[i].setAttribute('class', `casilla_${random}`);
    }
}, 250);
