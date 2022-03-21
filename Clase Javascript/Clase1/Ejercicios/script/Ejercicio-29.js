/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Crea una función que interprete el contenido entre paréntisis de
 * un string dado.
 *
 *      - El programa debe devolver el texto rodeando por paréntisis.
 *
 *      - Si no hay paréntisis se devolverá un string vacío. x
 *
 *      - Si existe paréntisis de apertura pero no de cierre se devolverá x
 *        el contenido desde el primer paréntisis hasta el final del string.x
 *
 *      - Si existe paréntisis de cierre pero no de apertura se devolverá
 *        el contenido desde el inicio hasta el paréntisis de cierre. (no lo quiere el parentesis de cierre) x
 *
 * Por ejemplo, si el string fuera "Hola (que) tal" se mostrará el "que".
 *
 * Si fuera "Hola (que tal" se devolvería "que tal".
 *
 */

'use strict';
const text = prompt('ingrese una cadena de texto');

Cadena(text);

function Cadena(texto) {
    let array = [];
    //Entre parentesis de un String dado.
    // Si no hay paréntisis se devolverá un string vacío.
    for (let i = 0; i < texto.length; i++) {
        //parentesis de apertura y de cierre existiendo
        if (texto.includes('(') === true && texto.includes(')') === true) {
            //En que posicion esta el parentesis de apertura y de cierre
            if (i > texto.indexOf('(') && i < texto.indexOf(')')) {
                array.push(texto[i]);
            }
        }
        //Solo paretesis de apertura
        else if (texto.includes('(') === true) {
            //En que posicion esta el parentesis de apertura
            if (i > texto.indexOf('(')) {
                array.push(texto[i]);
            }
        }
        //solo parentesis de cierre
        else if (texto.includes(')') === true) {
            //En que posicion esta el parentesis de cierre
            if (i < texto.indexOf(')')) {
                array.push(texto[i]);
            }
        }
    }
    console.log(array.join(''));
}
