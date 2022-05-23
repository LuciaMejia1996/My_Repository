/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado un array de frutas, genera un nuevo objeto en el que cada fruta pase a ser una
 * nueva propiedad del objeto. El valor asignado a esta propiedad debe ser el nº de veces
 * que la fruta se repite en el array.
 *
 *      const fruitBasket = ['naranja', 'naranja', 'limón', 'pera', 'limón', 'plátano', 'naranja'];
 *
 * Para el array anterior, el objeto resultante debería ser:
 *
 *      const fruits = {
 *          naranja: 3,
 *          limón: 2,
 *          pera: 1,
 *          plátano: 1
 *      };
 */

'use strict';

const fruitBasket = [
    'naranja',
    'naranja',
    'limón',
    'pera',
    'limón',
    'plátano',
    'naranja',
];

// Objeto de frutas
let frutas = {};

//*Rellenando objeto frutas con las correspondientes
/*repeticiones dentro del arrat */
let contador = 1;

fruitBasket.forEach((fruta) => {
    if (fruta in frutas) {
        frutas[`${fruta}`] = contador;
        contador++;
    } else {
        frutas[`${fruta}`] = 1;
    }
});

console.log(frutas);
