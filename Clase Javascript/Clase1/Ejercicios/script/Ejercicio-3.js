/* eslint-disable no-inner-declarations */
/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Escribir un programa que dados 2 valores de entrada imprima siempre la división
 * del mayor entre el menor.
 *
 * Bonus point: en caso de que el número menor sea 0 muestra un mensaje que indique
 *              que no se puede dividir entre 0.
 *
 */

'use strict';

let num_a = 0;
let num_b = 0;

num_a = prompt('Introduzca numero 1');
num_b = prompt('Introduzca numero 2');

if (num_a > num_b) {
    if (parseInt(num_b) === 0) {
        console.log('no se puede dividir entre cero');
    } else {
        console.log(num_a % num_b);
    }
} else {
    if (parseInt(num_a) === 0) {
        console.log('no se puede dividir entre cero');
    } else {
        console.log(num_b % num_a);
    }
}
