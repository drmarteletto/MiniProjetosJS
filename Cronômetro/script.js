let segundos = 00;
let milisegundos = 00;
let addMilisegundos = document.querySelector(".milisegundos");
let addSegundos = document.querySelector(".segundos");

function start() {
    intervalo = setInterval(startTime,10);
};

function stop() {
    clearInterval(intervalo);
};

function reset() {
    clearInterval(intervalo);
    segundos = 00;
    milisegundos = 00;
    addMilisegundos.innerHTML = "0" + 0;
    addSegundos.innerHTML = "0" + 0;
};

function startTime() {
    milisegundos++;

    if (milisegundos <= 9) {
        addMilisegundos.innerHTML = "0" + milisegundos;
    }

    if (milisegundos > 9) {
        addMilisegundos.innerHTML = milisegundos;
    }

    if (milisegundos > 99) {
        segundos++;
        addSegundos.innerHTML = "0" + segundos;
        milisegundos = 0;
        addMilisegundos.innerHTML = "0" + milisegundos;
    }

    if (segundos > 9) {
        addSegundos.innerHTML = segundos;
    }
};