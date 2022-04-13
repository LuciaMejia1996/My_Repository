'use strict';

const doc = document.querySelector('.hora');
const doc_2 = document.querySelector('h2');

//Array de dias
const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];
//Array de dias meses
const Mes = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

//Formato de si es menos de 10 para que le agrege un cero al lado
function format(num) {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}

setInterval(() => {
    let fecha = new Date();

    //Colocando Hora en el HTML
    doc.innerHTML = `${format(fecha.getHours())}:${format(
        fecha.getMinutes()
    )}:${format(fecha.getSeconds())}`;

    //Colocando la fecha en el lugar
    doc_2.innerHTML = `${days[fecha.getDay()]} ${fecha.getDate()} de ${
        Mes[fecha.getMonth()]
    } del ${fecha.getFullYear()}`;

    //Validando si es de dia, tarde o noche
    if (fecha.getHours() >= 20 && fecha.getHours() >= 5) {
        document.querySelector(':root').style.cssText =
            'background: url(./img/Night.jpg); color: white;';
    } else if (fecha.getHours() >= 6 && fecha.getHours() <= 13) {
        document.querySelector(':root').style.cssText =
            'background: url(./img/Morning.jpg);';
    } else if (fecha.getHours() >= 14 && fecha.getHours() <= 19) {
        document.querySelector(':root').style.cssText =
            'background: url(./img/Noon.jpg);';
    }

    //actualizacion del tiempo en 1 segundo
}, 1000);
