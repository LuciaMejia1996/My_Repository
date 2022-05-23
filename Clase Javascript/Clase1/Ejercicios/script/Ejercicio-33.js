/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Ordena el siguiente array numérico de menor a mayor: [4, 10, 7, 1, 2]
 *
 * ¡No se puede usar el método sort()!
 *
 */

'use strict';

const nums = [4, 10, 7, 1, 2];
//const mayor = nums.find((element) => element >= 10);

// Recorriendo N veces -1 para que el codigo del segundo bucle se repita
for (let x = 0; x < nums.length - 1; x++) {
    //Bucle secundario
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            const tmp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = tmp;
        }
    }
}

console.log(nums);
