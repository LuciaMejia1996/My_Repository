/* #################
 * ## Ejercicio 7 ##
 * #################
 *
 * Crea una calculadora con "if" que opere con dos números. La calculadora
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
const option = ['Suma', 'Resta', 'multiplicar', 'division', 'elevar al'];
let operacion;

num_1 = parseInt(prompt('Ingrese un numero - 1'));
num_2 = parseInt(prompt('Ingrese un numero - 2'));

parseInt(
    (operacion = prompt(
        'Escoja cual operacion desea efectuar' +
            '\n' +
            '1) ' +
            option[0] +
            '\n' +
            '2) ' +
            option[1] +
            '\n' +
            '3) ' +
            option[2] +
            '\n' +
            '4) ' +
            option[3] +
            '\n' +
            '5) ' +
            option[4] +
            '\n'
    ))
);

if (operacion - 1 === 0) {
    alert(num_1 + num_2);
    console.log(num_1 + num_2);
} else if (operacion - 1 === 1) {
    if (num_1 > num_2) {
        alert(num_1 - num_2);
        console.log(num_1 - num_2);
    } else {
        alert(num_2 - num_1);
        console.log(num_2 - num_1);
    }
} else if (operacion - 1 === 2) {
    alert(num_1 * num_2);
    console.log(num_1 * num_2);
} else if (operacion - 1 === 3) {
    if (num_1 === 0 || num_2 === 0) {
        alert('No se puede dividir entre cero');
        console.log('No se puede dividir entre cero');
    } else if (num_1 > num_2) {
        alert(num_1 % num_2);
        console.log(num_1 % num_2);
    } else {
        alert(num_2 % num_1);
        console.log(num_2 % num_1);
    }
} else if (operacion - 1 === 4) {
    alert(num_1 ** num_2);
    console.log(num_1 ** num_2);
}
