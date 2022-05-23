/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea un programa que simule las tiradas de un dado:
 *
 *      - El dado debe generar en cada tirada un valor entre 1 y 6 (incluídos).
 *
 *      - En cada tirada mostrar el valor del dado y el total acumulado. Por ejemplo:
 *        "Tirada nº 4: ha salido un 6, tienes un total de 15 puntos"
 *
 *      - Cuando el total de tiradas supere o iguale los 100 puntos muestra
 *        un mensaje indicando que se han alcanzado los 100 puntos y que el juego
 *        ha finalizado.
 *
 */

'use strict';

let dado = 0;

for (let puntos = 0; puntos <= 100; ) {
    // el dado genera en cada tirada un valor entre 1 y 6 (incluídos).
    dado = Math.ceil(Math.random() * 6);
    // Mostrando el valor del dado
    console.info('Valor del dado: ' + dado);
    //Sumando los puntos del dado a la puntuacion
    puntos += dado;

    //verificando si la puntacion es mayor o igual a 100
    if (puntos >= 100) {
        console.error('Puntos acumulados ' + puntos + ', el juego ha acabado');
    } else {
        console.warn('Puntos acumulados: ' + puntos);
    }
}
