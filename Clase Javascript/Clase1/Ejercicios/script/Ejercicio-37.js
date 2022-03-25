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
//LLenando el objeto de frutas
//fruitBasket.forEach((fru) => {
//    frutas[`${fru}`] = 0;
//});

for (let i = 0; i < fruitBasket.length; i++) {
    if (frutas[fruitBasket[i]]) {
        frutas[fruitBasket[i]] = 0;
    } else {
        frutas[fruitBasket[i]] = fruitBasket[i] + i;
    }
}

console.log(frutas);

/**
 * for (let x = 1; x < fruitBasket.length; x++) {
        if (fruitBasket[i] !== fruitBasket[x]) {
            console.log(fruitBasket[i] + ' ' + fruitBasket[x]);
            //frutas[fruitBasket[i]] = x;
        }
    }
 */
