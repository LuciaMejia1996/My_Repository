/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba.
 *
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 *
 *  - Generar un nº aleatorio del 1 al 10. Existe una función en JavaScript que
 *    nos permite generar un nº al azar, ¿por qué no investigas un poco?
 *
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averiguar el nº en cuestión.
 *
 *  - Si acierta detenemos el bucle (con un break) y mostramos un mensaje que indica
 *    que la bomba ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
 */

'use strict';

let selecter = Math.floor(Math.random() * 10);
let tryed = 5;
console.log('Numero secreto: ' + selecter);
let num;

do {
    num = Number(prompt('Ingrese un numero, para ver si acierta'));

    if (selecter === num) {
        alert('Ha desactivado la bomba');
        break;
    } else {
        tryed -= 1;
        alert('Error de numero, intento: ' + tryed);
        if (tryed === 0) {
            alert('BOOM, la bomba ha explotado, you die');
        }
    }
} while (num !== selecter && tryed > 0);
