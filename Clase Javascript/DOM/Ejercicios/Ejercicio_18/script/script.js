'use strict';

/* 
Al registrarse se guardarán en localStorage un objeto con
el nombre de usuario, la contraseña y el color favorito

Sólo permitirá registrarse si las contraseñas coinciden

Al hacer login, el texto del títlo cambiará a "Hola _nombre_"
y se pondrá de su color favorito

Para que el login funcione, el nombre de usuario y la contraseña 
deben coincidir con los guardados

*/

const login_form = document.forms.login;
const register_form = document.forms.register;
const h1 = document.querySelector('header > h1');
const re = document.querySelectorAll('button[type="reset"]');

const { user, pass: contra, repeat, color } = register_form;
const { userL, passL } = login_form;

//Funcion registrar funcion
function registerUser(e) {
    try {
        const noti = document.querySelector('p.notifiqued');

        e.preventDefault();
        if (contra.value === repeat.value) {
            //objeto con datos para ser guardados en un objeto
            const UserData = {
                usuario: user.value,
                contraseña: contra.value,
                color: color.value,
            };

            //si el usuario no existe en el local storage, lo crea
            if (localStorage.getItem(user.value) === null) {
                noti.textContent = '';
                localStorage.setItem(user.value, JSON.stringify(UserData));
                register_form.reset();
            } // retorna en caso del usuario volver
            else {
                noti.textContent = `Usuario ${user.value}, ya existe`;
                noti.style.color = 'red';
                register_form.reset();
            }
        } else {
            noti.textContent = 'Contraseñas no iguales';
            noti.style.color = 'red';
            register_form.reset();
        }
    } catch (error) {
        console.error('Hay un problema');
    }
}

//funcion loguear usuario guardado en el localstorage
function LoginUser(e) {
    try {
        e.preventDefault();
        const p_log = document.querySelector('p.notifiqued_log');
        const log_data = JSON.parse(localStorage.getItem(userL.value));

        if (log_data !== null) {
            const { usuario, contraseña, color } = log_data;
            if (userL.value === usuario && passL.value === contraseña) {
                h1.textContent = 'Hola, ' + usuario;
                h1.style.color = color;
                p_log.textContent = '';
                login_form.reset();
            } else {
                p_log.textContent = 'Los datos son incorrectos';
                p_log.style.color = 'red';
                login_form.reset();
            }
        } else {
            p_log.textContent = `Usuario ${userL.value}, no existe`;
            p_log.style.color = 'red';
            login_form.reset();
        }
    } catch (error) {
        console.error('Hay un problema');
    }
}

//funcio borrar para ambos botones
function erase(e) {
    e.preventDefault();

    //limpiando los formularios
    login_form.reset();
    register_form.reset();

    //limpiando las p en caso de dar borrar
    const p = document.querySelectorAll('p');
    for (const key of p) {
        key.textContent = '';
    }
}

//asignado el evento a los botones clear
for (const key of re) {
    key.addEventListener('click', erase);
}

//asignado los eventos a los formularios
register_form.addEventListener('submit', registerUser);
login_form.addEventListener('submit', LoginUser);
