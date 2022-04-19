/* Haz que al hacer click en un elemento de la lista,
ese elemento cambie de color según las teclas pulsadas:

ctrl: rojo
ctrl + alt: amarillo
alt: verde
alt + shift: cyan
shift: azul
shit + ctrl: magenta
shift + alt + ctrl: negro

ninguna: aleatorio

*/

'use strict';

//seleccionamos las listas
const listas = document.querySelectorAll('li');

//Random color mi random color
function RandomColor() {
    return `rgb(${Math.round(Math.random() * 255)},${Math.round(
        Math.random() * 255
    )},${Math.round(Math.random() * 255)})`;
}

function handleClick(e) {
    const tarjet = e.target;
    const ctlr = e.ctrlKey;
    const shift = e.shiftKey;
    const alt = e.altKey;

    tarjet.style.color = GetColor(alt, ctlr, shift);
}

function GetColor(alt, ctlr, shift) {
    if (shift === true && ctlr === true && alt === true) {
        return 'white';
    } else if (ctlr === true && alt === true) {
        return 'yellow';
    } else if (alt === true && shift === true) {
        return 'cyan';
    } else if (shift === true && ctlr === true) {
        return 'magenta';
    } else if (ctlr === true) {
        return 'red';
    } else if (alt === true) {
        return 'green';
    } else if (shift === true) {
        return 'blue';
    } else {
        return RandomColor();
    }
}

for (const lista of listas) {
    lista.addEventListener('click', handleClick);
}
