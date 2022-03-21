/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que pida una cadena de texto y la devuelva al revés.
 * Es decir, si tecleo "hola que tal" deberá mostrar "lat euq aloh".
 *
 */

'use strict';

const text = prompt('Ingrese una cadena de texto');
let coso = '';

Cadena(text);

function Cadena(texto) {
    for (let i = texto.length; i >= 0; i--) {
        coso = coso + texto.charAt(i);
    }
    console.log(coso);
}
