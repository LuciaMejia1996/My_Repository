/* A partir de los datos de la API https://rickandmortyapi.com/api/character
generar una ficha por cada personaje que devuelva que incluya, por lo menos, la imagen,
el nombre, el estado y la especie.


BONUS: algún elemento diferenciará visualmente el estado*/

'use strict';

const main = document.querySelector('main');
const table = document.createElement('table');

const getCaracters = async () => {
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=1`
        );

        const data = await response.json();

        const { results: res } = data;

        main.appendChild(table);

        let cos = `<thead>
                <th>img</th>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Estado</th>
            </thead>`;
        for (const key of res) {
            const { imagen, nombre, estado, especie } = getchar(key);

            cos += `
            <tr>
                <td><img src="${imagen}" alt="${nombre}"></td>
                <td>${nombre}</td>
                <td >${especie}</td>
                <td class='${estado}'>${estado}</td>
            </tr>`;
        }
        table.innerHTML = cos;
        const { info: inf } = data;
        for (let i = 2; i <= inf.pages; i++) {
            const responsive = await fetch(
                `https://rickandmortyapi.com/api/character?page=${i}`
            );

            const data_more = await responsive.json();
            const { results: res } = data_more;

            for (const key of res) {
                const { imagen, nombre, estado, especie } = getchar(key);

                cos += `
                <tr>
                    <td><img src="${imagen}" alt="${nombre}"></td>
                    <td>${nombre}</td>
                    <td >${especie}</td>
                    <td class='${estado}'>${estado}</td>
                </tr>`;
            }
            table.innerHTML = cos;
        }
    } catch (error) {
        console.error(error);
    }
};

getCaracters();

function getchar({ image, name, status, species }) {
    const coso = {
        imagen: image,
        nombre: name,
        estado: status,
        especie: species,
    };
    return coso;
}
