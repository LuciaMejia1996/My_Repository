'use strict';
//cogiendo el boton
const boton = document.querySelector('button');

//cogiendo el tamaño del boton y el ancho y alto de la ventana
function getMax(el) {
    const elInfo = el.getBoundingClientRect();
    const elWidth = elInfo.width;
    const elHeight = elInfo.height;

    return {
        height: window.innerHeight - elHeight,
        width: window.innerWidth - elWidth,
    };
}

//ejecutando  segundo para que siempre tenga el ancho y alto (responsive)
setTimeout(() => {
    getMax(boton);
}, 1000);

//obteniendo un numero randomn maximo
function getRandomMax(max) {
    return Math.round(Math.random() * max);
}

//haciendo la funcion para el movimiento del raton
function handleBotonMove() {
    const limits = getMax(boton);

    boton.style.position = 'absolute';
    boton.style.top = `${getRandomMax(limits.height)}px`;
    boton.style.left = `${getRandomMax(limits.width)}px`;
}

boton.addEventListener('mouseenter', handleBotonMove);
boton.addEventListener('click', () => {
    console.log('has acertado');
});
