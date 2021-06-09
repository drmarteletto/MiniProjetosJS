const botoes = document.querySelector('.botoes');
const imagem = document.querySelector('#imagem');
let corIndex = 0;
let intervalId = null;

const trafegoLuzes = ( event ) => {
    pararAutomatico();
    ligar[event.target.id](); 
};

const nextIndex = () => corIndex = corIndex < 2 ? ++corIndex : 0;

const trocaCor = () => {
    const cores = ['vermelho', 'amarelo', 'verde'];
    const cor = cores[corIndex];
    ligar[cor]();
    nextIndex();
};

const pararAutomatico = () => {
    clearInterval(intervalId);
}

const ligar = {
    'vermelho': () => imagem.src = './images/vermelho.png',
    'amarelo': () => imagem.src = './images/amarelo.png',
    'verde': () => imagem.src = './images/verde.png',
    'automatico': () => intervalId = setInterval(trocaCor, 1000)
};

botoes.addEventListener("click", trafegoLuzes);



















/*

const btnVermelho = document.querySelector('#vermelho');
const btnAmarelo = document.querySelector('#amarelo');
const btnVerde = document.querySelector('#verde');

btnVermelho.addEventListener("click", vermelho);
btnAmarelo.addEventListener("click", amarelo);
btnVerde.addEventListener("click", verde);
btnAutomatico.addEventListener("click", automatico);

function vermelho() {
    imagem.src = './images/vermelho.png';
};

function amarelo() {
    imagem.src = './images/amarelo.png';
};

function verde() {
    imagem.src = './images/verde.png';
};

function automatico() {
    const funcoes = [vermelho(), amarelo(), verde()];
    
    setTimeout(() => {
        funcoes[1];
        console.log(funcoes[1])
    }, 2000);
};*/