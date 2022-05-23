/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * - Cuenta el número de letras "r" en el siguiente fragmento de texto:
 *   "Tres tristes tigres tragan trigo en un trigal."
 *
 * - Ahora cuenta las "t". Debes contar las mayúsculas y las minúsculas.
 *
 * - Sustituye todas las "e" por "i".
 *
 */

'use strict';

const text = 'Tres tristes tigres tragan trigo en un trigal.';
let cont = 0;
let e = '';

Cadena(text);

function Cadena(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === 'T' || texto.charAt(i) === 't') {
            cont = cont + 1;
        }

        if (texto.charAt(i) === 'e' || texto.charAt(i) === 'E') {
            e = text.replaceAll(texto.charAt(i), 'i');
        }
    }
    console.log(e);
    console.log('El total de (T/t) en la frase es de: ' + cont);
}
