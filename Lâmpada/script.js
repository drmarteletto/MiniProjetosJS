let imagem = document.querySelector('#imagem');
let btnLigar = document.querySelector('#ligar');
let btnDesligar = document.querySelector('#desligar');

    btnLigar.addEventListener("click", ligaLampada);
    
    btnDesligar.addEventListener("click", desligaLampada);

    imagem.addEventListener("mouseover", ligaLampada);

    imagem.addEventListener("mouseleave", desligaLampada);

    imagem.addEventListener("dblclick", quebraLampada);

function ligaLampada() {
    if (!estaQuebrada()) {
        imagem.src = "./images/ligada.jpg";
        apareceBotaoDesligar()
     }      
};

function desligaLampada() {
    if (!estaQuebrada()) {
        imagem.src = "./images/desligada.jpg";
        apareceBotaoLigar()
    }   
};

function quebraLampada() {
    imagem.src = "./images/quebrada.jpg";
};

function estaQuebrada() {
    return imagem.src.indexOf ('quebrada') > -1;
};

function apareceBotaoLigar() {
    btnLigar.style.display = 'inline-flex';
    btnDesligar.style.display = 'none'
};

function apareceBotaoDesligar() {
    btnLigar.style.display = 'none';
    btnDesligar.style.display = 'inline-flex'
};