/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Utiliza el método filter para filtrar a los estudiantes cuya nota sea igual
 * o superior a 11.
 *
 */

'use strict';

const students = [
    {
        name: 'Alvaro',
        score: 10,
    },
    {
        name: 'Daniel',
        score: 16,
    },
    {
        name: 'Alexys',
        score: 12,
    },
    {
        name: 'Rafa',
        score: 17,
    },
    {
        name: 'Alejandro',
        score: 8,
    },
    {
        name: 'Sofia',
        score: 9,
    },
];

const Array_filter = students.filter((nota) => nota.score >= 11);

console.log(Array_filter);
