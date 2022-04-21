'Use strict';

/* 

Completar el formulario.
Cuando el usuario lo envie se comprobarán las credenciales 
(comparandolas con un objeto)

Si son correctas, el titulo cambiará a "Hola _nombre_" y se pondrá del color elegido

Si no son correctas, aparecerá un alert indicándolo y se borrará el formulario (los campos)
*/

//objeto dato
const userData = {
    user: 'lucia',
    password: '123',
};

//obtteniendo los datos de, formulario
const formulario = document.forms[0];
const [user, pass, color] = formulario;

//funcion enviar
function EventSend(e) {
    e.preventDefault();
    inObject(user.value, pass.value, color.value);
}

//funcion validar usuario
function inObject(user, pass, colore) {
    const h1 = document.querySelector('header > h1');

    if (user === userData.user && pass === userData.password) {
        h1.style.color = colore;
        h1.textContent = 'Hola: ' + user;
    }
}

formulario.addEventListener('submit', EventSend);
