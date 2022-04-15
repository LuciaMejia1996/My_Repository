/**
 * #################
 * ## 👻 B O O 👻 ##
 * #################
 *
 * Haz que, cada segundo que pase, el div "boo" aparezca ubicado en una
 * posición aleatoria de la ventana y que el color del body cambie, también
 * de forma aleatoria "rgb(?, ?, ?)".
 *
 * ¡Ojo! No dejes que Boo se salga de los márgenes de la ventana, debemos
 * poder ver a Boo sin hacer scroll en ningún momento.
 *
 * element.getBoundingClientRect() --> devuelve una serie de propiedades
 * del nodo seleccionado, entre ellas, la altura y el ancho del elemento.
 *
 * Recuerda también que window.innerHeight nos da la altura del viewport
 * y window.innerWidth, el ancho
 *
 * Bonus point --> haz que aparezcan más emojis acompañando a Boo. Para ello
 *                 deberás crear más divs y seleccionarlos a todos. Esto
 *                 requerirá a mayores que cambies cositas en el código.
 *
 */

'use strict';
//Ver la informacion del coso del fantamista
const cuerpo = document.querySelector('body');
const boo = cuerpo.querySelector('.boo');

//const Nueva_ubicacion = new DOMRect(100, 100);

setInterval(() => {
    const Altura = window.innerHeight;
    const Anchura = window.innerWidth;

    //Obteninedo una altura aleatoria segun el maximo de pantalla en pixeles
    const Random_Altura_top = Math.floor(Math.random() * Altura - 1.0);
    const Random_Altura_buttom = Math.floor(Math.random() * Altura - 1.2);
    const Random_Anchura_left = Math.floor(Math.random() * Anchura - 1.0);
    const Random_Anchura_right = Math.floor(Math.random() * Anchura - 1.2);

    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);

    boo.setAttribute(
        'style',
        `position: fixed;
        right: calc(${Random_Anchura_right}px - 2vmin); 
        left: calc(${Random_Anchura_left}px - 2vmin); 
        top: calc(${Random_Altura_top}px - 2vmin);
        bottom: calc(${Random_Altura_buttom}px - 2vmin);
        `
    );
    cuerpo.setAttribute(
        'style',
        `background-color: rgb(${color1}, ${color2}, ${color3});`
    );
}, 1000);
