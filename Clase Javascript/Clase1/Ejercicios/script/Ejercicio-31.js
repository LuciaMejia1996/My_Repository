/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Algoritmo que calcule la letra del DNI:
 *
 * - El número debe ser entre 10000000 y 99999999.
 *
 * - Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
 *   ¿Qué ocurre cuando obtenemos un valor NaN? JavaScript lo considera un número. Busca una
 *   forma de comprobar que el valor es realmente numérico.
 *
 * - Debemos calcular el resto de la división entera entre el DNI y
 *   el número 23.
 *
 * - Según el resultado, de 0 a 22, le corresponderá una letra de las
 *   siguientes:  [T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E]
 *
 */

'use strict';

const letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
];

let correct = true;

do {
    //Pidiendo el numero de DNI/NIE al usuuario
    let dni_nie = prompt('Introduzca su numero de DNI/NIE');
    let cal = 0;

    //Si es un numero pasa si no repite.
    if (Number(dni_nie)) {
        correct = true;
        if (dni_nie >= 10000000 && dni_nie <= 99999999) {
            cal = dni_nie % 23;

            //Recorriendo la lista hasta llegar a la posicio de la letra
            for (let i = 0; i <= letters.length; i++) {
                if (cal === i) {
                    alert(
                        'La letra correspondiente con su numero de DNI es la: ' +
                            letters[i]
                    );
                    correct = true;
                }
            }
        }
    } else {
        alert('Debe redactar un numero de DNI/NIE correcto');
        correct = false;
    }
} while (correct !== true);
