/**
 * #################
 * ## Ejercicio  2##
 * #################
 *
 *  Haz un bucle que muestre por pantalla de consola la palabra intruducida y si es
 *  'Stop' se detenga
 *
 */

'use strict';

let palabra;
do {
    palabra = prompt('Ingrese una palabra').toUpperCase();
    console.log(palabra);
} while (palabra !== 'STOP');
