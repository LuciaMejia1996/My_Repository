'use strict';

/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza un bucle "do...while" para dar al usuario 3 intentos para acertar una contraseña.
 *
 * Deberíamos salir del bucle si:
 *
 *  - El usuario acierta la contraseña.
 *
 *  - Los intentos llegan a 0.
 *
 * Cuando salgamos del bucle muestra un mensaje indicando si ha acertado o no.
 *
 */

let intento = 3;
const password = '12345';
let pass;

do {
    pass = prompt('Ingrese su contraseña');

    if (pass === password) {
        alert('contraseña correcta');
        break;
    } else if (pass != password) {
        intento--;
        alert('contraseña erronea, intentos restantes: ' + intento);
    }
} while (intento != 0);
if (intento === 0 && pass !== password) {
    alert('No has hacertado la contraseña');
} else {
    alert('Has hacertado la contraseña');
}
