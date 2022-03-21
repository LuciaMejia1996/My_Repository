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
 * De la misma manera, si las dos mitades son iguales (ej: carbonara y carbonara) no
 * sería una combinación, sino una pizza normal. ¿Serías capáz de solucionar eso, sin
 * añadir ninguna línea de código? ¡Es más fácil de lo que puede parecer!
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
