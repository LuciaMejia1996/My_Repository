/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * A partir del string dado crea un array en el que cada una de las distintas palabras
 * (palabras, no letras) del string sea una posición del array.
 *
 *  - No debe haber letras mayúsculas.
 *
 *  - El array no debe contener signos de puntuación, SOLO LETRAS.
 *
 *  - El array debe estar ordenado por orden alfabético inverso, ¿método "sort"? ;)
 *
 * Resultado esperado: ["sit", "lorem", "ipsum", "elit", "dolor", "consectetur", "amet", "adipisicing"]
 *
 */

'use strict';

const text = '¡Lorem Ipsum Dolor Sit Amet, Consectetur Elit Adipisicing!';
let coso_2 = '';
let coso = [];

//recorriendo la palabra para retirarle la ','
for (let i = 0; i < text.length; i++) {
    coso_2 += text[i]
        .split(',')
        .join('')
        .toLocaleLowerCase()
        .replace('¡', '')
        .replace('!', '')
        .replace(',', '');
}

//recorriendo el texto para eliminarle los espacios y ordernarlo en reversa mami :V
coso.push(coso_2.split(' ').sort().reverse());

for (let i = 0; i < coso.length; i++) {
    console.log(coso[i]);
}
