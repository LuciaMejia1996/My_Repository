/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 *  Haz un recorrido del siguiente objeto para que salga en pantalla
 *
 *  - 'La Manzana es roja'
 *  - 'El Platano es Amarillo'
 *  - 'La Pera es verde'
 *  - 'El Arandano es Azul'
 */

'use strict';

const arrEjercicio = [
    { fruta: 'manzana', color: 'roja' },
    { fruta: 'plátano', color: 'amarillo' },
    { fruta: 'pera', color: 'verde' },
    { fruta: 'arándano', color: 'azul' },
];

for (const key of Object.values(arrEjercicio)) {
    if (key.fruta.endsWith('a')) {
        console.log(`La ${key.fruta} es ${key.color}`);
    } else {
        console.log(`El ${key.fruta} es ${key.color}`);
    }
}
