'use strict';

const User_list = [
    {
        user: 'lucia',
        pass: 'lucia',
        Datos_usuario: {
            Nombre: 'Lucia Alejandra Mejia Alonzo',
            edad: 26,
            gender: 'Femenino',
        },
    },

    {
        user: 'roberto',
        pass: 'roberto',
        Datos_usuario: {
            Nombre: 'Roberto Alejandro Mejia Alonzo',
            edad: 26,
            gender: 'Masculino',
        },
    },
];

/*He usado un selector especifico como en CSS */
document.querySelector('[type="button"]').setAttribute('onclick', `rec()`);

//Envio sin enviar :V
function rec() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    for (const users of User_list) {
        if (users.user === user && users.pass === pass) {
            document.querySelector('#datos-user').removeAttribute('style');
            const datos = users.Datos_usuario;
            let user_data = document.querySelector('#datos-user');

            user_data.querySelector('#Nombre').innerHTML = datos.Nombre;
            user_data.querySelector('#Edad').innerHTML = datos.edad;
            user_data.querySelector('#Genero').innerHTML = datos.gender;
        }
    }
}

//Mostrar Contraseña.
function showPass() {
    let show = document.getElementById('showpass');
    if (show.checked == true) {
        document.querySelector('#pass').setAttribute('type', 'text');
    } else {
        document.querySelector('#pass').setAttribute('type', 'password');
    }
}
