/**
 * DOM: Programacion orientada a objetos
 */

//objeto llamado persona con algunas claves y valor, se pueden usar funciones de igual forma
const persona = {
    name: 'lucia',
    apellido: 'mejia',
    edad: 26,
    presentacion: () => {
        console.log('Hola a todos, me gusta el anime');
    },
};

// llamando a todo el objeto
console.table(persona);

// Se debe de tener el valor atrave de la clave objeto.clave tambien existe por corchete
console.log(`${persona.name} ${persona.apellido}`);

console.log(`${persona['name']} ${persona['apellido']}`);

// LLamaando a la funcion dentro del objeto
persona.presentacion();

//Recorriendo el objeto con for each debe ser por corchete
for (const key in persona) {
    console.warn(persona[key]);
}
