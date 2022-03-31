/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Obtener un array con las series de las 5 primeras páginas.
 *
 * Para este ejercicio necesitarás agregar al final de la URL el query
 * param "page" de la siguiente forma "?page=2". Esto te permitirá moverte
 * por las distintas páginas simplemente cambiando el número de la misma.
 *
 * API: https://www.episodate.com/api
 *
 */

'use strict';

const getEpisode = async () => {
    try {
        let serie = [];

        for (let i = 1; i <= 5; i++) {
            //Obteniendo datos de la misma
            const response = await fetch(
                `https://www.episodate.com/api/most-popular?page=${i}`
            );
            //Transformando los datos json a objetos
            const data = await response.json();

            const { tv_shows: tv } = data;

            const pop = tv.map((tv) => tv.name);

            serie.push(pop);
        }
        console.log(...serie);
    } catch (error) {
        console.error(error);
    }
};

getEpisode();
