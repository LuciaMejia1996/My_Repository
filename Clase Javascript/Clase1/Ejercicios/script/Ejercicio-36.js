/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea el objeto coche y asígnale las propiedades modelo, marca y color.
 *
 * - Muestra el objeto por medio de un "console.log".
 *
 * - Modifica el valor de la propiedad color y agrega la propiedad año de
 *   matriculación.
 *
 * - Utiliza un "confirm" para mostrar por consola las propiedades, o los
 *   valores. Si la persona acepta el "confirm" se mostrarán las propiedades,
 *   de lo contrario, se mostrarán los valores.
 *
 */

'use strict';

let coche = {
    model: 'Toyota',
    marca: 'AX600',
    color: 'Rojo',
};

console.log(coche);

coche.color = 'Amarillo';
coche.ano = '1995';

console.log(coche);

if (confirm('Desea ver las propiedades del objeto')) {
    console.table(Object.keys(coche));
} else {
    console.table(Object.values(coche));
}
