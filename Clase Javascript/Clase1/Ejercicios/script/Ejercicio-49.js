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
