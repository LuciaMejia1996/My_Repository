/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función que reciba una cadena de texto y la muestre poniendo
 * el signo "–" entre cada carácter sin usar el método replace ni replaceAll.
 *
 * Por ejemplo, si tecleo "hola qué tal", deberá salir "h-o-l-a- -q-u-e- -t-a-l".
 *
 */

'use strict';

function Cadena() {
    let text = prompt('Ingrese una cadena de texto');
    let resultado = text.split('').join('-');

    return resultado;
}

console.log(Cadena());

/*
let texto = prompt('Ingrese una cadena de texto');
let coso = '';
Cadena(texto);
*/
/**
function Cadena(textoCadena) {
    for (let i = 0; i < textoCadena.length; i++) {
        coso = coso + texto.charAt(i) + '-';
    }
    console.log(coso);
}

**/
