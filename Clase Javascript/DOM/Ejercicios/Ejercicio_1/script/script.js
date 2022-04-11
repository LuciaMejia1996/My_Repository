'use strict';

const User_list = [
    {
        user: 'lucia',
        pass: 'lucia',
        Datos_usuario: {
            Nombre: 'Lucia Alejandra Mejia Alonzo',
            edad: 26,
            gender: 'Female',
        },
    },

    {
        user: 'roberto',
        pass: 'roberto',
        Datos_usuario: {
            Nombre: 'Roberto Alejandro Mejia Alonzo',
            edad: 26,
            gender: 'Male',
        },
    },
];

console.log(User_list);

document.querySelector('[type="button"]').setAttribute('onclick', `rec()`);

//Envio sin enviar :V
function rec() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    for (const users of User_list) {
        if (users.user === user && users.pass === pass) {
            console.log(`${user} && ${pass}`);
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
