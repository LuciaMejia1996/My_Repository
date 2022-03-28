/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 *   1. Obtén todos los coches de la marca Audi.
 *
 *   2. Obtén una lista con todos los colores de los coches de marca BMW.
 *
 *   3. Obtén la media de precio de los coches de marca Ford.
 *
 *   4. Obtén un array con los coches de transmisión manual y de color negro.
 *
 *   5. Obtén la suma total de todos los precios.
 *
 *   Opcional: obtén un array con las distintas marca de coches (no se pueden repetir).
 *
 */

'use strict';

const cars = [
    {
        brand: 'BMW',
        model: 'Serie 3',
        year: 2012,
        price: 30000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Audi',
        model: 'A4',
        year: 2018,
        price: 40000,
        doors: 4,
        color: 'Negro',
        transmition: 'automatico',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2015,
        price: 20000,
        doors: 2,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Audi',
        model: 'A6',
        year: 2010,
        price: 35000,
        doors: 4,
        color: 'Negro',
        transmition: 'automatico',
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        year: 2016,
        price: 70000,
        doors: 4,
        color: 'Rojo',
        transmition: 'automatico',
    },
    {
        brand: 'Mercedes Benz',
        model: 'Clase C',
        year: 2015,
        price: 25000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Chevrolet',
        model: 'Camaro',
        year: 2018,
        price: 60000,
        doors: 2,
        color: 'Rojo',
        transmition: 'manual',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2019,
        price: 80000,
        doors: 2,
        color: 'Rojo',
        transmition: 'manual',
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        year: 2017,
        price: 40000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Audi',
        model: 'A3',
        year: 2017,
        price: 55000,
        doors: 2,
        color: 'Negro',
        transmition: 'manual',
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        year: 2012,
        price: 25000,
        doors: 2,
        color: 'Rojo',
        transmition: 'manual',
    },
    {
        brand: 'Mercedes Benz',
        model: 'Clase C',
        year: 2018,
        price: 45000,
        doors: 4,
        color: 'Azul',
        transmition: 'automatico',
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        year: 2019,
        price: 90000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2017,
        price: 60000,
        doors: 2,
        color: 'Negro',
        transmition: 'manual',
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        year: 2015,
        price: 35000,
        doors: 2,
        color: 'Azul',
        transmition: 'automatico',
    },
    {
        brand: 'BMW',
        model: 'Serie 3',
        year: 2018,
        price: 50000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        year: 2017,
        price: 80000,
        doors: 4,
        color: 'Negro',
        transmition: 'automatico',
    },
    {
        brand: 'Mercedes Benz',
        model: 'Clase C',
        year: 2018,
        price: 40000,
        doors: 4,
        color: 'Blanco',
        transmition: 'automatico',
    },
    {
        brand: 'Audi',
        model: 'A4',
        year: 2016,
        price: 30000,
        doors: 4,
        color: 'Azul',
        transmition: 'automatico',
    },
];

// 1. Obtén todos los coches de la brand Audi. x

// 2. Obtén una lista con todos los colores de los coches de brand BMW.x

// 3. Obtén la media de price de los coches de brand Ford.x

// 4. Obtén un array con los coches de transmisión manual y de color negrox.

// 5. Obtén la suma total de todos los prices. x

// Opcional: obtén un array con las distintas brands de coches (no se pueden repetir).

// 1. Obtén todos los coches de la brand Audi.
console.log('Colores');
const Coches_Audi = cars.filter((ch) => ch.brand === 'Audi');
console.table(Coches_Audi);

// 2. Obtén una lista con todos los colores de los coches de brand BMW.x
console.log('Colores del brand BMW');
const Color_coche_BMW = cars
    .filter((ch) => ch.brand === 'BMW')
    .map((ls) => ls.color);
console.table(Color_coche_BMW);

// 3. Obtén la media de price de los coches de brand Ford.
console.log('Media del modelo Ford');
let media_A = 0;
const Ḿedia_BMW = cars
    .filter((ch) => ch.brand === 'Ford')
    .map((vl) => {
        return vl.price;
    });

for (const pre of Ḿedia_BMW) {
    media_A += pre;
}
media_A = parseInt(media_A / Ḿedia_BMW.length).valueOf();
console.log(media_A);

// 4. Obtén un array con los coches de transmisión manual y de color negro.
const Manual_Black = cars.filter(
    (fl) => fl.color === 'Negro' && fl.transmition === 'manual'
);
console.table(Manual_Black);

// 5. Obtén la suma total de todos los prices.
const Media_Global = cars.map((pri) => pri.price);
let Media_B = 0;
for (const med in Media_Global) {
    Media_B += med;
}
Media_B = Media_B / Media_Global.length;
console.table(parseFloat(Media_B).toPrecision(2));
