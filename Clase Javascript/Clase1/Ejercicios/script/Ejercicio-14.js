/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Escribe un programa que permita al usuario concatenar elementos en un string.
 * El programa finalizará cuando el usuario introduzca el string "fin", y se
 * mostrará por consola el contenido de la variable.
 *
 */

'use strict';
let introduccion;
let Palabra = '';

do {
    introduccion = prompt('Ingrese una palabra a concatenar');

    Palabra = Palabra + ' ' + introduccion;

    console.log(Palabra);
} while (introduccion !== 'fin');
