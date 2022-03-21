/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado el array [3, 4, 13, 5, 6, 8], muestra por consola qué numeros son pares
 * y qué números son impares.
 *
 * Haz lo mismo pero en este caso indica qué números son primos y cuales no.
 *
 * Por último, crea un nuevo array en el que los valores sean el doble del array
 * original.
 *
 */

'use strict';

const nums = [3, 4, 13, 5, 6, 8];

function pares(numUser) {
    if (numUser % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function Primo(numUser) {
    if (((numUser % 2) + 2) % 2) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < nums.length; i++) {
    if (pares(nums[i]) != false) {
        console.log('Numero: ' + nums[i] + '- Es un numero par');
        if (Primo(nums[i]) === false) {
            console.log('Numero: ' + nums[i] + '- Es un numero no primo');
        }
    } else {
        console.log('Numero: ' + nums[i] + '- Es un numero impar');
        if (Primo(nums[i]) !== false) {
            console.log('Numero: ' + nums[i] + '- Es un numero primo');
        }
    }
}
