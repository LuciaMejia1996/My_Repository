/* A partir de los datos de la API https://rickandmortyapi.com/api/character
generar una ficha por cada personaje que devuelva que incluya, por lo menos, la imagen,
el nombre, el estado y la especie.


BONUS: algún elemento diferenciará visualmente el estado*/

'use strict';

const main = document.querySelector('main');
const table = document.createElement('table');
const thead = document.createElement('thead');
const th = document.createElement('th');

const getCaracters = async () => {
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=1`
        );

        const data = await response.json();

        const { results: res } = data;

        main.appendChild(table);

        let cos =
            '<thead><th>Nombre</th><th>Especie</th><th>Estado</th></thead>';
        for (const key of res) {
            const { nombre, estado, especie } = getchar(key);

            cos += `
            <tr>
                <td>${nombre}</td>
                <td >${especie}</td>
                <td class='${estado}'>${estado}</td>
            </tr>`;
        }
        table.innerHTML = cos;
    } catch (error) {
        console.error(error);
    }
};

getCaracters();

function getchar({ name, status, species }) {
    const coso = {
        nombre: name,
        estado: status,
        especie: species,
    };
    return coso;
}
