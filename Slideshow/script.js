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

const containerItems = document.querySelector('.slide-width');


const loadImages = (images, container) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class = 'slide'>
                <img src = '${image.url}'>
            </div>
        `
    })
};

loadImages(images, containerItems);

let items = document.querySelectorAll('.slide');
var count = 0;
var execution;

const selectSlide = () => {
    let slide = document.querySelectorAll('.botaoSlide');
        slide[0].addEventListener("click", () => {
            // Criar função para selecionar o slide desejado
        })
    };

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
        count = 0;
    }
    function active() {
        next();
        count++;
    }
};

playAndPause();
addBotoes();
selectSlide();


document.querySelector('.prev').addEventListener("click", previous);
document.querySelector('.next').addEventListener("click", next);
document.querySelector('.pause').addEventListener("click", pauseSetInterval);
document.querySelector('.play').addEventListener("click", playInterval);

