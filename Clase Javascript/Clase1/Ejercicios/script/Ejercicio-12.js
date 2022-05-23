/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea un bucle "for" que recorra los números del 0 al 100 saltando de 10 en 10.
 *
 * - Posteriormente crea otro bucle "for" que recorra los números del 100 al 0 de
 *   25 en 25.
 */

let b;

console.log('Primera parte for 0 - 100 de 10 en 10');
for (let a = 0; a < 100; a += 10) {
    console.log(a);
}

console.log('Segunda parte for 100 - 100 a 0 en 25-25');
for (b = 100; b >= 0; b -= 25) {
    console.log(b);
}
