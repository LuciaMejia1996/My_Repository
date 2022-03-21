/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea un programa que compruebe si un string es palíndromo, es decir, que se lee igual
 * del derecho que del revés. Por ejemplo, "Arriba la birra" es un palíndromo.
 *
 */

'use strict';

const text = 'Arriba la birra';

cadena(text);

// No terminado
function cadena(texto) {
    //1. pasar el string a miniscula y eliminar los espacios
    let coso_2 = text.split(' ').reverse().join('').toLowerCase();

    //2. crear un nuevo string pero a la inversa.
    let coso = texto.split(' ').reverse().join('').toLowerCase();

    //3. comparar los dos string con === si returna true es valido si no no lo es
    if (coso === coso_2) {
        console.log('la palabra es un palindromo');
    } else {
        console.log('la palabra No, es un palindromo');
    }
}
