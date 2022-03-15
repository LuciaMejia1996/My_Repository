/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función "showInfo()" con los parámetros nombre y edad:
 *
 *      - La función deve devolver un string del tipo: "Eres Pablo y tienes 33 años". Recuerda
 *        que el nombre y la edad son parámetros, pueden variar en cada llamado.
 *
 *      - Muestra lo que devuelva la función por consola. Aplica lo aprendido sobre "template
 *        strings" (template literals).
 *
 *      - Llama a la función tres veces pasándole argumentos distintos.
 *
 */

'use strict';

/**
 *  #Ejercicio 1#
 * @param {String} nombre
 * @param {number} edad
 * @returns String
 */
function showInfo(nombre, edad) {
    console.log(`Eres ${nombre} y tienes ${edad} años`);
}

showInfo('Lucia', 26);
showInfo('Marte', 23);
showInfo('Andrea', 27);
