/**
 * ################
 * ## Pirámide 2 ##
 * ################
 *
 * Crea una función que reciba una altura y dibuje una figura
 * como la que sigue:
 *
 *    1
 *    22
 *    333
 *    4444
 *    55555
 *
 */

'use strict';

const height = 5;

for (let i = 0; i < height; i++) {
    let linecontent = '';

    for (let x = i + 1; x > 0; x--) {
        linecontent += i + 1;
    }
    console.log(linecontent);
}
