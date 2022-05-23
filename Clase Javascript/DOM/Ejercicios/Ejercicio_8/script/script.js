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
const New_Boo = document.createElement('div');
//const Nueva_ubicacion = new DOMRect(100, 100);

setInterval(() => {
    const Altura = window.innerHeight;
    const Anchura = window.innerWidth;
    const boo_size = boo.getBoundingClientRect();

    //Obteninedo una altura aleatoria segun el maximo de pantalla en pixeles
    const Random_Altura_top = Math.round(Math.random() * Altura);
    const Random_Altura_buttom = Math.round(Math.random() * Altura);
    const Random_Anchura_left = Math.round(Math.random() * Anchura);
    const Random_Anchura_right = Math.round(Math.random() * Anchura);

    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);

    New_Boo.setAttribute('class', 'boo');
    New_Boo.innerHTML = '👻';

    boo.setAttribute(
        'style',
        `position: absolute;
        right: calc(${Random_Anchura_right}px - ${boo_size.width}vmin); 
        left: calc(${Random_Anchura_left}px - ${boo_size.width}vmin); 
        top: calc(${Random_Altura_top}px - ${boo_size.height}vmin);
        bottom: calc(${Random_Altura_buttom}px - ${boo_size.height}vmin);
        `
    );

    cuerpo.setAttribute(
        'style',
        `background-color: rgb(${color1}, ${color2}, ${color3});`
    );
}, 1000);
