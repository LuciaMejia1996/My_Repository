'use strict';

/**
 * Completa la tabla de temperaturas tomando como referencia
 * este array de ciudades. Tendrás que usar las siguientes
 * clases para cambiar el color de fondo de cada temperatura.
 *
 *  - lower: temp. menor que 4 (fondo azul).
 *
 *  - low: temp. entre 4 y 20 (fondo verde).
 *
 *  - medium: temp. entre 20 y 30 (fondo naranja).
 *
 *  - high: temp. mayor de 30 (fondo rojo).
 *
 */

const cities = [
    {
        name: 'A Coruña',
        min: 17,
        max: 23,
    },
    {
        name: 'Ferrol',
        min: 15,
        max: 32,
    },
    {
        name: 'Lugo',
        min: -20,
        max: 31,
    },
    {
        name: 'Ourense',
        min: 18,
        max: 35,
    },
    {
        name: 'Pontevedra',
        min: 18,
        max: 29,
    },
];

//seleccionando elementos
//seleccionando al padrre
const table = document.querySelector('table#temperaturas');

//seleccionando al tbody del padre
const tbody = table.querySelector('tbody');

//creando clase medicion temperatua

function temperatura(tmp) {
    if (tmp < 4) {
        return 'lower';
    }
    if (tmp < 20) {
        return 'low';
    }
    if (tmp < 30) {
        return 'medium';
    } else {
        return 'high';
    }
}

//insertando coso al tbody
let Cuerpo_table = '';

for (const key of cities) {
    Cuerpo_table += `<tr><td>${key.name}</td><td class='${temperatura(
        Number(key.min)
    )}'>${key.min}</td>
    <td class='${temperatura(key.max)}'>${key.max}</td></tr>`;
}

tbody.innerHTML = Cuerpo_table;
