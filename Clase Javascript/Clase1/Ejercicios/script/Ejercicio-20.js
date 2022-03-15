/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza lo aprendido sobre funciones para reestructurar el ejercicio de la bomba.
 * Crea la función "deactivateBomb" con los parámetros "limit" y "bombCode":
 *
 *  - limit: nº de intentos que le daremos al usuario.
 *
 *  - bombCode: código de desactivación.
 *
 */

'use strict';

/**
 * ## Ejercicio 2 ##
 *
 * @param {*} bombCode
 * @param {*} limit
 * @param {*} UserNumber
 * @returns boolean
 */

function deactivateBomb(bombCode, limit, UserNumber) {
    for (let i = limit; i >= 0; i--) {
        if (UserNumber === bombCode) {
            console.log('Ha desactivado la bomba');
            return true;
        } else {
            limit -= 1;
            console.log('Error de numero, intento: ' + limit);
            if (limit === 0) {
                console.log('BOOM, la bomba ha explotado, you die');
                return false;
            }
        }
    }
}

for (let i = 0; i < 3; i++) {
    let CodeBomb = Math.floor(Math.random() * 10);
    let NumberUser = Math.floor(Math.random() * 10);
    let tryed = Math.floor(Math.random() * 5);

    console.log('Codigo Bomba: ' + CodeBomb + '\n');
    console.log('Codigo Usuario: ' + NumberUser + '\n');

    deactivateBomb(CodeBomb, tryed, NumberUser);
}
