/* #################
 * ## Ejercicio 7 ##
 * #################
 *
 * Crea una calculadora con "switch" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 *
 */

'use strict';

let num_1;
let num_2;
let operacion;

num_1 = parseInt(prompt('Ingrese un numero - 1'));
num_2 = parseInt(prompt('Ingrese un numero - 2'));
operacion = prompt(
    'Ingrese la oeracion que desea realizar' +
        '\n' +
        'suma' +
        '\n' +
        'resta' +
        '\n' +
        'multi' +
        '\n' +
        'divi'
);

switch (operacion) {
    case 'suma':
        alert(num_1 + num_2);
        console.log(num_1 + num_2);
        break;

    case 'resta':
        if (num_1 > num_2) {
            alert(num_2 - num_1);
            console.log(num_2 + num_1);
        } else {
            alert(num_1 - num_2);
            console.log(num_1 - num_2);
        }
        break;

    case 'multi':
        alert(num_1 * num_2);
        console.log(num_1 * num_2);
        break;

    case 'divi':
        if (num_1 != 0 && num_2 != 0) {
            alert(num_1 % num_2);
            console.log(num_1 % num_2);
        } else {
            alert('No se puede dividir por cero');
            throw new Error('No se puede dividir por 0');
        }
        break;

    default:
        alert('debe escoger una opcion adecuada');
        throw new Error('Debe escoger una opcion correcta');
}
