/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Escribir un programa que, dados tres valores, se indique cual es el mayor
 * de ellos.
 *
 */

'use strict';

let num_a = 0;
let num_b = 0;
let num_c = 0;

num_a = prompt('Introduzca numero 1');
num_b = prompt('Introduzca numero 2');
num_c = prompt('Introduzca numero 3');

if (parseInt(num_a) > parseInt(num_b) && parseInt(num_a) > parseInt(num_c)) {
    console.log('El numero mayo es: ' + num_a);
} else if (
    parseInt(num_b) > parseInt(num_a) &&
    parseInt(num_b) > parseInt(num_c)
) {
    console.log('El numero mayor es: ' + num_b);
} else {
    console.log('El numero mayor es: ' + num_c);
}
