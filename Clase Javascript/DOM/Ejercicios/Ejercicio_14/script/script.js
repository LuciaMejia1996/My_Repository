'use strict';

/* 
Juego "hundir la flota"

En cada fila hay un barco. 
Si se toca agua, se pierde una vida.
Si se toca un barco, se gana un punto y se muestra el barco (y no se pierde vida)
Si las vidas llegan a 0, aparece un alert que indica que se ha perdido.
Si los puntos llegan a 5, aparece un alert que indica que se ha ganado.


BONUS: Borrar los barcos de HTML y hacer que se gener aleatoriamente (1 por fila)

BONUS 2: Al terminar el juego (por perder o por ganar) se reinicia.


*/

const td = document.querySelectorAll('td');
const puntacion = document.querySelector('header > p:nth-child(1) > span');
const vida = document.querySelector('header > p:nth-child(2) > span');

//variable contadora
let contador = 0;
for (let i = 0; i < td.length; i++) {
    //Verdadero y falso para ver si lo coloco o no
    const numS = TrueOrFalse();

    if (numS === 1 && contador <= 9 - 1) {
        td[i].innerHTML = '<p class="barco">⛵</p>';
        contador++;
    }
}
//decidiendo verdadero o falso
function TrueOrFalse() {
    const numS = Math.round(Math.random() * 2);
    if (numS === 0) {
        return numS + 2;
    }
    return numS;
}

let put;
let life;
//let puntos = Number(puntacion.textContent);
function handleClick(e) {
    const tarjet = e.target;
    const { path: pa } = e;
    const { 0: cl } = pa;
    //console.log(cl.className);

    if (cl.className === 'barco') {
        //Deteniendo la accion del cick al ya haber seleccionado el mismo
        if (Marcado(tarjet.className)) {
            e.stopPropagation();
            alert('Ya has escogido ese');
        } else {
            //colocando el color de fondo, el emoji y la clase destoy
            tarjet.style.background = 'red';
            tarjet.textContent = '💥';
            tarjet.className = 'cliked';
            tarjet.style.opacity = '100';

            //subiendo la puntuacion del jugador
            put = puntacion.textContent;
            put++;
            puntacion.textContent = put;
        }
        //contador de barcos deseados inverso creado en un inicio y restado ahora
        contador--;
    } else {
        //previendo que escoja el mismo
        if (Marcado(tarjet.className)) {
            //Deteniendo la accion del cick al ya haber seleccionado el mismo
            e.stopPropagation();
            alert('Ya has escogido ese');
        } else {
            //colocando vida y descontandola y camibnaod de color para
            // que el usuario sepa donde a clickeado
            life = vida.textContent;
            life--;
            vida.textContent = life;
            tarjet.className = 'cliked';
            tarjet.style.background = 'rgba(23, 101, 128, 0.925)';
        }
    }

    //Si se destruyen todos los barcos
    if (contador === 0) {
        alert(`Has ganado, puntuacion: ${put}`);
        verTodo();
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }

    //Viendo si la  vida es cero y reiniciando el juego
    if (life === 0) {
        verTodo();
        alert('Has perdido');
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}

//colocando los eventos de clikc en los td
for (const tds of td) {
    tds.addEventListener('click', handleClick);
}

//ver todo el mapa se ha puesto al ganar o perder
function verTodo() {
    const p = document.querySelectorAll('p.barco');

    for (const tdx of p) {
        tdx.setAttribute('style', 'opacity: 100;');
    }
}

//funcion para ver si ya se ha marcado ya que le cambio a la clase clicked
function Marcado(boo) {
    if (boo === 'cliked') {
        return true;
    } else {
        return false;
    }
}
