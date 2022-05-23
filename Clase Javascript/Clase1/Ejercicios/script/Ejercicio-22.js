/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 *
 */

'use strict';

const nums = [1, 3, 9, 14, 17, 22];
let oth = [];

let x = 0;

console.log('mostrando con bucle while');
while (x < nums.length) {
    console.log(nums[x] + ' Bucle while');
    x++;
}

console.log('mostrando con bucle for');
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] + ' Bucle for');
}

console.log('mostrando con bucle for of');
for (const a of nums) {
    console.log(a + ' Bucle for of');
}

console.log('Sumando +1 a todos los elementos del array');
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] + 1);
}

console.log('Sumando +1 a todos los elementos del array y colocandolo en otro');
for (let i = 0; i < nums.length; i++) {
    oth.push(nums[i] + 1);
}
console.log(oth);

let pro = 0;

for (let i = 0; i < oth.length; i++) {
    pro += oth[i];
}
console.log('Suma de todos los elementos: ' + pro);
console.log('Promedio: ' + pro / oth.length);
