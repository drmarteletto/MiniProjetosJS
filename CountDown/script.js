"use strict";

const button = document.querySelector(".button");
const boxArea = document.querySelector(".box-area");
const fecharBox = document.querySelector(".fechar-box");
const btInserir = document.querySelector("#bt-insereDados");
const dataInserida = document.querySelector("#dataInserida");

button.addEventListener("click", () => {
    boxArea.style.display = 'flex';
});

fecharBox.addEventListener("click", () => {
    boxArea.style.display = 'none';
});

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.querySelector("#segundos");
    const minutos = document.querySelector("#minutos");
    const horas = document.querySelector("#horas");
    const dias = document.querySelector("#dias");

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
};

const contagemRegressiva = (tempo) => {
    const contar = () => {
        if (tempo === 0) {
            const pararContagem = () => {
                clearInterval(id);
            }
            pararContagem();
        };
        atualizar(tempo);
        tempo--;     
    }
    const id = setInterval(contar, 1000);
};

const atulizaData = () => {
    btInserir.addEventListener("click", (e) => {
        const dataConfigurada = new Date (dataInserida.value);
        return dataConfigurada;
    })
}

const tempoRestante = (atualizaData) => {
    const dataEvento = new Date ('2021-06-16 20:00:00');
    const hoje = Date.now();
    console.log(dataEvento);
    console.log(atualizaData)
    return Math.floor((dataEvento - hoje) / 1000);
};

contagemRegressiva(tempoRestante());