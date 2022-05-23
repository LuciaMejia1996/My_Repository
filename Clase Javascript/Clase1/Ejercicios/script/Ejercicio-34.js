/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Una pizerría ofrece pizzas "mitad y mitad".Cada mitad debe corresponderse a una
 * pizza de su catálogo, pero éste cambia constantemente, por lo que el número de
 * combinaciones posibles, también.
 *
 * Escribe una función que reciba el catálogo de pizzas (un array de strings) y
 * devuelva una lista de las combinaciones. Seguramente en tu primera aproximación
 * devuelva pizzas con la misma combinación pero al revés (ej: carbonara y barbacoa,
 * barbacoa y carbonara) pero ¡son la misma pizza!
 *
 * Ejemplo input:
 *
 *      [
 *          "margarita",
 *          "cuatro quesos",
 *          "prosciutto",
 *          "carbonara",
 *          "barbacoa",
 *          "tropical",
 *      ];
 *
 * Ejemplo output:
 *
 *      [
 *          "margarita y cuatro quesos",
 *          "margarita y prosciutto",
 *          "margarita y carbonara",
 *          "margarita y barbacoa",
 *          "margarita y tropical",
 *          "cuatro quesos y prosciutto",
 *          "cuatro quesos y carbonara",
 *          "cuatro quesos y barbacoa",
 *          "cuatro quesos y tropical",
 *          "prosciutto y carbonara",
 *          "prosciutto y barbacoa",
 *          "prosciutto y tropical",
 *          "carbonara y barbacoa",
 *          "carbonara y tropical",
 *          "barbacoa y tropical",
 *      ];
 *
 */

'use strict';

const menu = [
    'margarita',
    'cuatro quesos',
    'prosciutto',
    'carbonara',
    'barbacoa',
    'tropical',
];
Cadena(menu);

function Cadena(Array_Recived) {
    let entera = [];
    let mitad = [];

    for (let z = 0; z < Array_Recived.length; z++) {
        entera.push('Pizza entera de ' + Array_Recived[z]);
    }

    for (let i = Array_Recived.length - 2; i > 2; i--) {
        for (let x = 0; x < Array_Recived.length; x++) {
            if (
                Array_Recived[i] !== Array_Recived[x] &&
                Array_Recived[x] !== Array_Recived[i]
            ) {
                mitad.push(
                    'Mitad ' + Array_Recived[i] + ' Y ' + Array_Recived[x]
                );
            }
        }
    }

    entera.forEach((pizza) => {
        console.error(pizza);
    });

    mitad.forEach((pizza) => {
        console.warn(pizza);
    });
}
