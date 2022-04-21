/* 
Juego "hundir la flota"

En cada fila hay un barco. 
Si se toca agua, se pierde una vida.
Si se toca un barco, se gana un punto y se muestra el barco (y no se pierde vida)
Si las vidas llegan a 0, aparece un alert que indica que se ha perdido.
Si los puntos llegan a 5, aparece un alert que indica que se ha ganado.


BONUS: Borrar los barcos de HTML y hacer que se gener aleatoriamente (1 por fila)

BONUS 2: Al terminar el juego (por perder o por ganar) se reinicia.

BONUS 3: todo generado por javascript
*/

const fregmant = document.createDocumentFragment();
const cuerpo = document.querySelector('body');
const cabezera = document.createElement('header');

let barcos_res = 5;

// creando parte points
const p = document.createElement('p');
const span = document.createElement('span');
span.classList += 'points';
p.textContent = 'Puntuación:';
span.textContent = 0;
cabezera.append(p, span);

//Creando parte vidas
const p_2 = document.createElement('p');
const span_2 = document.createElement('span');
span_2.classList += 'life';
p_2.textContent = 'Vidas:';
span_2.textContent = 5;
cabezera.append(p_2, span_2);

const table = document.createElement('table');

//creando tablas 5 X 5
// for de filas y de columnas
// pues se resuelve el interno primero
for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    const numb = NumberRandom();
    for (let x = 0; x < 5; x++) {
        const td = document.createElement('td');
        if (x === numb) {
            td.innerHTML = '<p class="barco">🚢</p>';
        }
        tr.append(td);
    }
    table.append(tr);
}

fregmant.append(cabezera, table);
cuerpo.append(fregmant);

const puntacion = document.querySelector('header > .points');
const vida = document.querySelector('header > .life');

function NumberRandom() {
    const numS = Math.round(Math.random() * 4);
    return numS;
}

function verTodo() {
    const p = document.querySelectorAll('p.barco');

    for (const tdx of p) {
        tdx.setAttribute('style', 'opacity: 100;');
    }
}

function Marcado(boo) {
    if (boo === 'cliked') {
        return true;
    } else {
        return false;
    }
}

//let puntos = Number(puntacion.textContent);
function handleClick(e) {
    const tarjet = e.target;
    const { path: pa } = e;
    const { 0: cl } = pa;
    //console.log(cl.className);

    let put;
    let life;

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
        barcos_res--;
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
    if (barcos_res === 0) {
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

const td = document.querySelectorAll('td');
for (const tds of td) {
    tds.addEventListener('click', handleClick);
}
