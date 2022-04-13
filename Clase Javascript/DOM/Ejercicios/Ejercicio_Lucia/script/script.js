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
        if (i <= 10) {
            piso[i].setAttribute('class', `casilla_6`);
        } else if (i >= 11 && i <= 21) {
            piso[i].setAttribute('class', `casilla_2`);
        } else if (i >= 22 && i <= 32) {
            piso[i].setAttribute('class', `casilla_0`);
        } else if (i >= 33 && i <= 43) {
            piso[i].setAttribute('class', `casilla_2`);
        } else {
            piso[i].setAttribute('class', `casilla_6`);
        }
    }
}, 250);
