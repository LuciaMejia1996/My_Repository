/**
 * ##################
 * ## Ejercicio 5 ##
 * ##################
 *
 * Utiliza los métodos map, filter o reduce para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

'use strict';

const persons = [
    {
        name: 'Berto',
        country: 'ES',
        age: 44,
        car: 'LU9286V',
        pet: {
            name: 'Moon',
            type: 'perro',
        },
    },
    {
        name: 'Jess',
        country: 'UK',
        age: 29,
        car: 'GB2913U',
        pet: {
            name: 'Kit',
            type: 'gato',
        },
    },
    {
        name: 'Tom',
        country: 'UK',
        age: 36,
        car: 'GB8722N',
        pet: {
            name: 'Rex',
            type: 'perro',
        },
    },
    {
        name: 'Alexandre',
        country: 'FR',
        age: 19,
        car: 'FT5386P',
        pet: {
            name: 'Aron',
            type: 'gato',
        },
    },
    {
        name: 'Rebeca',
        country: 'ES',
        age: 32,
        car: 'MD4578T',
        pet: {
            name: 'Carbón',
            type: 'gato',
        },
    },
    {
        name: 'Stefano',
        country: 'IT',
        age: 52,
        car: 'LP6572I',
        pet: {
            name: 'Bimbo',
            type: 'perro',
        },
    },
    {
        name: 'Colette',
        country: 'FR',
        age: 22,
        car: 'FU8929P',
        pet: {
            name: 'Amadeu',
            type: 'gato',
        },
    },
];

const cars = [
    {
        id: 'LU9286V',
        brand: 'Citroen',
        model: 'Xsara',
    },
    {
        id: 'GB2913U',
        brand: 'Fiat',
        model: 'Punto',
    },
    {
        id: 'GB8722N',
        brand: 'Opel',
        model: 'Astra',
    },
    {
        id: 'FT5386P',
        brand: 'Ford',
        model: 'Focus',
    },
    {
        id: 'MD4578T',
        brand: 'Opel',
        model: 'Corsa',
    },
    {
        id: 'LP6572I',
        brand: 'Ford',
        model: 'Fiesta',
    },
    {
        id: 'FU8929P',
        brand: 'Fiat',
        model: 'Uno',
    },
];

// 1. Obtén la suma total de todas las edades de las personas.
console.log('1. Obtén la suma total de todas las edades de las personas');
const Edades_Persona = persons.map((mp) => mp.age);
let Promedio_Edades = 0;

for (const ege of Edades_Persona) {
    Promedio_Edades += ege;
}

Promedio_Edades = Promedio_Edades / Edades_Persona.length;
console.table(Edades_Persona);
console.log(
    'Promedio de edades de todas las personas es: ' + Promedio_Edades.toFixed(2)
);

// 2. Obtén la suma total de todas las edades de las personas francesas.
console.log(
    '2. Obtén la suma total de todas las edades de las personas francesas.'
);
const Edades_Persona_Francesa = persons
    .filter((fr) => fr.country === 'FR')
    .map((ls) => ls.age);

let pro_FR = 0;

for (const ege of Edades_Persona_Francesa) {
    pro_FR += ege;
}

pro_FR = pro_FR / Edades_Persona_Francesa.length;

console.table(Edades_Persona_Francesa);
console.table('Promedio de la edad de franceses: ' + Number(pro_FR));

// 3. Obtén un array con el nombre de todas las mascotas.
console.log('3. Obtén un array con el nombre de todas las mascotas.');
const Nombres_mascota = persons.map((fl) => fl.pet).map((ma) => ma.name);
console.table(Nombres_mascota);
// 4. Obtén un array con las personas que tengan gato.
console.log('4. Obtén un array con las personas que tengan gato.');
const Personas_Gato = persons.filter((ps) => ps.pet.type === 'gato');
console.table(Personas_Gato);
// 5. Obtén un array con los coches de los españoles. (¡ESTE NO!)

// 6. Obtén un array con las personas que tengan un coche de la marca Ford. (¡ESTE NO!)

// 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
//    la info de su coche. (¡ESTE NO!)
