'use strict';

/* 
Crear un objeto que tenga un nombre y un email.
Utilizar ese objeto para añadir al DOM un header que tenga como título el nombre
y como subtítulo el email
*/

const user = {
    name: 'Lucia Alejandra Mejia Alonzo',
    email: 'luciamejia262@hotmail.com',
};

/*   <header>
    <h1>Zoe</h1>
    <h2>zoe.porta.garcia@hackaboss.com</h2>
  </header> */

// Seleccionando el body
const cuerpo = document.querySelector('body');

//creando el header en el body
const cabezera = document.createElement('header');

// Creando los H1 del nombre y el correo
const Nombre = document.createElement('h1');
const Correo = document.createElement('h3');

//Agtegando la cabezera en el body
cuerpo.append(cabezera);
cabezera.append(Nombre, Correo);

//Insertando en la cabezera
cabezera.querySelector('h1').textContent = user.name;
cabezera.querySelector('h3').textContent = user.email;

//Con innerHTML en la cabezera
cabezera.innerHTML = `<h1>${user.name}</h1>
<h3>${user.email}</h3>`;
