'use strict';

/* 
Al registrarse se creará un objeto con
el nombre de usuario, la contraseña y el color favorito
Dicho objeto se añadirá a un array de usuarios que se guardará en el localStorage

Sólo permitirá registrarse si las contraseñas coinciden
No podrá haber dos usuarios con el mismo nombre

Al hacer login, el texto del títlo cambiará a "Hola _nombre_"
y se pondrá de su color favorito

Para que el login funcione, la contraseña debe coincidir con la guardada para ese usuario

*/
const login_form = document.forms.login;
const register_form = document.forms.register;
const h1 = document.querySelector('header > h1');
const re = document.querySelectorAll('button[type="reset"]');
const { user, pass: contra, repeat, color } = register_form;
const { userL, passL } = login_form;
let userlist = [];

//const example = [{ usuario: 'example', contra: 'example', color: '#00000' }];

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
            if (userExist(user.value) === true) {
                noti.textContent = '';
                userlist.push(UserData);
                localStorage.setItem('user', JSON.stringify(userlist));
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

//funcion si existe usuario
function userExist(usr) {
    if (userlist.length === 0) {
        return true;
    } else {
        for (const key of userlist) {
            const { usuario: usere } = key;
            if (usere === usr) {
                return false;
            }
        }
        return true;
    }
}

//funcipn para cargar la data al cargar la pagina
function recivedData() {
    const key_recived = JSON.parse(localStorage.getItem('user'));
    if (key_recived != null) {
        userlist = key_recived;
    }
}

function LoginUser(e) {
    try {
        e.preventDefault();
        const p_log = document.querySelector('p.notifiqued_log');
        const log_data = JSON.parse(localStorage.getItem('user'));

        for (const key of log_data) {
            const { usuario: src, contraseña: cv, color } = key;

            if (userL.value === src && passL.value === cv) {
                h1.textContent = 'Hola, ' + src;
                h1.style.color = color;
                p_log.textContent = '';
                login_form.reset();
            }
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

window.addEventListener('load', recivedData);
register_form.addEventListener('submit', registerUser);
login_form.addEventListener('submit', LoginUser);
