/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

'use strict';

const getMunLugo = async () => {
    try {
        const response = await fetch(
            'https://www.el-tiempo.net/api/json/v2/provincias/27/municipios'
        );

        const data = await response.json();

        const { municipios: muni } = await data;

        const munlugo = muni
            .map((ml) => ml.NOMBRE)
            .sort()
            .reverse();
        console.table(munlugo);
    } catch (error) {
        console.error(error);
    }
};

getMunLugo();
