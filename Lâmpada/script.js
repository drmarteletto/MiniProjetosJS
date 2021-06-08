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
     }      
};

function desligaLampada() {
    if (!estaQuebrada()) {
        imagem.src = "./images/desligada.jpg";
    }   
};

function quebraLampada() {
    imagem.src = "./images/quebrada.jpg";
};

function estaQuebrada() {
    return imagem.src.indexOf ('quebrada') > -1;
};