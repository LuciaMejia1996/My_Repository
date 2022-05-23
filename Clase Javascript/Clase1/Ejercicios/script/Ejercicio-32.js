/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que reciba como parámetro un array cualquiera y retorne
 * otro array con los elementos del primero en orden inverso.
 *
 * ¡No vale utilizar el método "reverse"!
 *
 */

'use strict';

const array_example = ['1', '2', '3', '4', '5'];

Inverso(array_example);

function Inverso(array_recived) {
    let array_result = [];

    for (let i = array_recived.length - 1; i >= 0; i--) {
        array_result.push(array_recived[i]);
    }
    console.log(array_result);
}
