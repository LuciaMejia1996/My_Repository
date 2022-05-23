/**
 * ################
 * ## Pirámide 3 ##
 * ################
 *
 * Crea una función que reciba una altura y dibuje una figura
 * como la que sigue:
 *
 *    1
 *    12
 *    123
 *    1234
 *    12345
 *
 */

'use strict';

const height = 5;
let b = '';

for (let i = 1; i <= height; i++) {
    b += i;
    console.log(b);
}
