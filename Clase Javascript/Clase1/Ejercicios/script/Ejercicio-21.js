/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Define una función a la que le pases como argumento un número y nos diga
 * si dicho número es primo (true) o no (false).
 *
 * [Opcional]: crea una segunda función a la que le pases como parámetro un nº
 * máximo y nos muestre por consola todos los nº primos del 2 al nº que hemos
 * pasado como argumento. La función que creaste al principio comprueba si un
 * número es primo o no, quizás puedas hacer uso de ella.
 *
 */

'use strict';

function Esprimo(numUser) {
    if (((numUser % 2) + 2) % 2) {
        console.log(numUser + ' - Este numero es primo');
    } else {
        return false;
    }
}

function SeraPrimo(UserNumber) {
    for (let i = 2; i <= UserNumber; i++) {
        Esprimo(i);
    }
}

SeraPrimo(30);
