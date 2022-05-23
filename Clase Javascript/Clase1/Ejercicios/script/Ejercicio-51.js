/**
 * #################
 * ## Ejercicio  4##
 * #################
 *
 *  Haz un bucle que acumule y cuando sea stop pare de acmular
 *
 */

'use strict';
let palabra = '';
let palabra_tmp;

while (palabra_tmp !== 'STOP') {
    palabra_tmp = prompt('Ingrese una palabra').toUpperCase();
    if (palabra_tmp !== 'STOP') {
        palabra += ' ' + palabra_tmp;
    }
}

console.log(palabra);
