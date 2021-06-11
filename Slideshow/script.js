const images = [
    {'id': '1', 'url': './images/img2.jpg'},
    {'id': '2', 'url': './images/img1.jpg'},
    {'id': '3', 'url': './images/img3.jpg'},
    {'id': '4', 'url': './images/img4.jpg'}
];

let botoesTrocaSlide = document.querySelector('.botoesTrocaSlide');

const addBotoes = () => {
    for (let i = 0; i < images.length; i++) {
        botoesTrocaSlide.innerHTML += `<div class="botaoSlide"></div>`;
    }
};

const selectSlide = () => { // -------------- Finalizar esta funçao para selecionar o slide pelo botão
    let slide = document.querySelectorAll('.botoesTrocaSlide');
    console.log(slide);
};

const containerItems = document.querySelector('.slide-width');


const loadImages = (images, containerItems) => {
    for (let i = 0; i < images.length; i++) {        
        containerItems.innerHTML += `<div class = 'slide'><img src = '${images[i].url}'></div>`;
    }
};

loadImages(images, containerItems);

let items = document.querySelectorAll('.slide');
var count = 0;
var execution;

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.slide');
};

const next = () => {
    const lastItems = items[items.length - 1]
    containerItems.insertBefore(lastItems, items[0]);
    items = document.querySelectorAll('.slide');
};

const pauseSetInterval = () => {
    playAndPause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'flex';
};

const playInterval = () => {
    playAndPause();
    document.querySelector('.pause').style.display = 'flex';
    document.querySelector('.play').style.display = 'none';
};

function playAndPause() {
    if (count === 0) {
        execution = setInterval(() => {
            active();
        },3000)
    } else {
        clearInterval(execution);
        document.querySelector('.pause').style.display = 'none';
        document.querySelector('.play').style.display = 'flex';
        count = 0;
    }
    function active() {
        next();
        document.querySelector('.pause').style.display = 'flex';
        document.querySelector('.play').style.display = 'none';
        count++;
    }
};

playAndPause();
addBotoes();

document.querySelector('.prev').addEventListener("click", previous);
document.querySelector('.next').addEventListener("click", next);
document.querySelector('.pause').addEventListener("click", pauseSetInterval);
document.querySelector('.play').addEventListener("click", playInterval);

