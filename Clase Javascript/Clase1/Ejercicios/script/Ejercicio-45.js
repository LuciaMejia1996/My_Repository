/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todas las provincias de España.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

'use strict';

const getProvincias = async () => {
    try {
        //Haciendo la peticion a la URL de la api
        const response = await fetch(
            'https://www.el-tiempo.net/api/json/v2/provincias'
        );

        //Transformando la propiedad en un objeto de javascript
        const data = await response.json();

        //obteniendo las provincias
        const { provincias: provs } = await data;

        const provNames = provs.map((pro) => pro.NOMBRE_PROVINCIA);

        console.log(provNames);
    } catch (error) {
        console.error(error);
    }
};

getProvincias();
