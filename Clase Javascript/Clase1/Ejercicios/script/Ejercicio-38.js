/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * ¿Te suena el juego piedra, papel o tijera? Pues manos a la obra.
 *
 *      - Tu oponente será la computadora.
 *
 *      - El ganador se decide al mejor de 3.
 *
 *      - Almacena la puntuación del jugador y de la computadora
 *        en el objeto Game como propiedades del mismo. Ejemplo:
 *
 *          const Game = {
 *              player: 0,
 *              computer: 0
 *          }
 *
 */

'use strict';

// En este objeto almacenaremos las puntuaciones.
let Game = {
    player: 0,
    computer: 0,
};

let correct = true;
const Accion = ['PIEDRA', 'PAPEL', 'TIJERA'];
let UserAction;

do {
    UserAction = prompt(`${Accion} Ingrese una opcion`).toUpperCase();

    if (Accion.indexOf(UserAction) !== -1) {
        PlayGame(UserAction);
        if (confirm('Desea seguir jugando')) {
            correct = false;
        } else {
            correct = true;
        }
    } else {
        alert('Ingrese una opcion correcta');
        correct = false;
    }
} while (correct === false);

function PlayGame(Action) {
    let RandomAcction = Math.ceil(Math.random() * 3);
    console.log(
        `Tu Accion: ${Action} \nLa opcion del ordenador: ${
            Accion[RandomAcction - 1]
        }`
    );

    //Si el jugador selecciona piedra y el ordenador selecciona tambien piedra
    if (Accion.indexOf(Action) === RandomAcction - 1) {
        //Si la computadora selecciona tijera
        console.warn('Has empatado con el ordenador');
        //Si el ordenador saca piedra y nosotros tijera
    } else if (RandomAcction - 1 === 0 && Accion.indexOf(Action) === 2) {
        console.error('Ha ganado el ordenador');
        Game[`computer`] += 1;
        //Si yo saco piedra u el ordenador tijera
    } else if (RandomAcction - 1 === 2 && Accion.indexOf(Action) === 0) {
        console.info('Has ganado tu');
        Game[`player`] += 1;
    } else if (RandomAcction - 1 > Accion.indexOf(Action)) {
        console.error('Ha ganado el ordenador');
        Game[`computer`] += 1;
    } else if (RandomAcction - 1 < Accion.indexOf(Action)) {
        console.info('Has ganado tu');
        Game[`player`] += 1;
    }

    console.table(Game);
}
