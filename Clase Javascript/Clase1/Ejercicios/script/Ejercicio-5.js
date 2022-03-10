/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Escribir un programa que, dados 3 números los cuales signican una fecha (día, mes,
 * año), compruebe que la fecha sea. Si no es válida, que imprima un mensaje de error,
 * y si es válida, que imprima el mes con su nombre.
 *
 * Se considerará que:
 *
 *  - Todos los meses tienen 31 días.
 *
 *  - Todos los años tienen 5 meses (enero, febrero, marzo, abril, mayo).
 *
 *  - Solo serán válidos los años del 0 al 2030.
 *
 */

'use strict';

let month = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

let num_dia = 0;
let num_mes = 0;
let num_ano = 0;

num_dia = prompt('Ingrese un numero de dia: ');
num_mes = prompt('Ingrese un numero de mes: ');
num_ano = prompt('Ingrese un numero de año: ');

if (parseInt(num_dia) >= 1 && parseInt(num_dia) <= 31) {
    if (parseInt(num_mes) >= 1 && parseInt(num_mes) <= 12) {
        if (parseInt(num_ano) >= 0 && parseInt(num_ano) <= 2030) {
            for (let i = 0; i < month.length; i++) {
                if (parseInt(num_mes - 1) === i) {
                    console.log(
                        num_dia +
                            '/' +
                            month[i] +
                            '/' +
                            num_ano +
                            ' - Es una fecha valida'
                    );
                }
            }
        } else {
            console.log('El año no es correcto');
        }
    } else {
        console.log('El mes no es correcto');
    }
} else {
    console.log('El dia no es valido');
}
