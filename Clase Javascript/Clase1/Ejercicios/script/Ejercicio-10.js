/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea un bucle "while" que recorra los números del 0 al 100 saltando de 10 en 10.
 *
 * - Posteriormente crea otro bucle "while" que recorra los números del 100 al 0 de
 *   25 en 25.
 */

'use strict';
let i = 0;
let a = 100;

console.log('primera parte ejercicio');
while (i <= 100) {
    console.log(i);
    i += 10;
}

console.log('Segunda parte ejercicio');
while (a >= 0) {
    console.log(a);
    a -= 25;
}
