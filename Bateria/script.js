const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
};

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.querySelector('#container').appendChild(div);
};

const exbir = (sons) => Object.keys(sons).forEach(criarDiv);

exbir(sons);

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra).classList.add('active');
const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => document.getElementById(letra).classList.remove('active');
    div.addEventListener('transitionend', removeActive);
};

const ativarDiv = (evento) => {
    let letra = '';
    if (evento.type == 'click') {
        letra = evento.target.id;
    } else {
        letra =  evento.key.toUpperCase();
    }

    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
};

document.querySelector('#container').addEventListener("click", ativarDiv);

window.addEventListener("keydown", ativarDiv);