'use strict';
const pre = document.querySelector('.question > p');
const skip_button = document.querySelector('.part2 > .skip > button');
let Question = document.querySelector('.part2 > .point > .circulo > p');

const correctas = document.querySelector('.part2 > .respuesta > p.acertadas');
const falla = document.querySelector('.part2 > .respuesta > p.fallos');

const pre_red = document.querySelector('.res > .res1 > p');
const pre_blue = document.querySelector('.res > .res2 > p');
const pre_yellow = document.querySelector('.res > .res3 > p');
const pre_green = document.querySelector('.res > .res4 > p');

//elegir cuadros aleatorios para las preguntas
const res_aleatoria = [pre_red, pre_blue, pre_yellow, pre_green];

//puntos negativos
let number_question = 1;
let negative_points = 0;
let pointe = 0;

const getCuestions = async () => {
    try {
        const response = await fetch(`./json/quiz.json`);

        const data = await response.json();

        for (const key of CuestionsRandom(data)) {
            EscribirPreguntas(key);
        }
    } catch (error) {
        console.error(error);
    }
};

getCuestions();

function CuestionsRandom(datea) {
    let array_pregunt = [];
    for (let i = 0; i < 1; i++) {
        //numero alaotrio para coger las preguntas
        const num_random = Math.floor(Math.random() * datea.length);
        array_pregunt.push(datea[num_random]);
    }
    return array_pregunt;
}

function EscribirPreguntas({ question, correct, answers }) {
    pre.textContent = question;

    for (let i = 0; i < answers.length; i++) {
        if (correct === answers[i]) {
            const co = res_aleatoria[i];
            co.textContent = correct;
            co.classList = 'correct';
        } else {
            const co = res_aleatoria[i];
            co.textContent = answers[i];
            co.classList = 'incorrect';
        }
    }
}

function IsCorrect(e) {
    console.log(e.target.classList[0]);
    if (e.target.classList[0] === 'correct') {
        pointe++;
        correctas.textContent = pointe;
        Question.textContent = number_question++;
        alert('Has acertado, Felicidades');
        if (pointe >= 3) {
            number_question = 0;
            Question.textContent = number_question;
            alert('Juego Finalizado, has ganado c:');
            EndGame();
        } else {
            getCuestions();
        }
    } else {
        negative_points++;
        falla.textContent = negative_points;
        Question.textContent = number_question++;
        alert('Has Fallado, que mal :c');
        if (negative_points >= 3) {
            alert('Juego Finalizado, has perdido');
            number_question = 0;
            Question.textContent = number_question;
            EndGame();
        } else {
            getCuestions();
        }
    }
}

function EndGame() {
    correctas.textContent = 0;
    falla.textContent = 0;
    negative_points = 0;
    pointe = 0;

    getCuestions();
}

function skip() {
    const coso = confirm('¿Desea saltarse esta pregunta?');
    if (coso) {
        getCuestions();
    }
}

const div = document.querySelectorAll('div.res');
for (const key of div) {
    key.addEventListener('click', IsCorrect);
}

skip_button.addEventListener('click', skip);
