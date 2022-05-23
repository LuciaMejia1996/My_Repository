'use strict';

//variables usadas
const form = document.forms[0];
const h1 = document.querySelector('h1');
const bor = document.querySelector('button#borrar');
const { nombre, sub_name } = form;

//verificar que hay datos en el local storage
function Onload() {
    const nom = localStorage.getItem('nombre');
    const ape = localStorage.getItem('apellido');

    if (nom === null && ape === null) {
        h1.textContent = 'Introduzca sus datos';
    } else {
        h1.textContent = `Hola: ${nom} ${ape}`;
    }
}

//creando el evento onload en la pagina
window.addEventListener('load', Onload);

//funcion guardar para almacenar la informacion en el localstorage
function SaveInfo(e) {
    if (!nombre.value || !sub_name.value) {
        alert('hace falta, nombre o apellido');
        e.preventDefault();
    } else {
        localStorage.setItem('nombre', nombre.value);
        localStorage.setItem('apellido', sub_name.value);
    }
}

//funcion para borrar los datos del localstorage
function borrar() {
    window.location.reload();
    localStorage.clear();
}

//agregando eventos
bor.addEventListener('click', borrar);
form.addEventListener('submit', SaveInfo);
