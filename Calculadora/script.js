let numero = document.querySelectorAll('#numero');
let visor = document.querySelector('.visor');
let adicao = document.querySelector('#adicao');
let subtracao = document.querySelector('#subtracao');
let multiplicacao = document.querySelector('#multiplicacao');
let divisao = document.querySelector('#divisao');
let igual = document.querySelector('#igual');
let nVisor = '';

visor.addEventListener("click", function (e) {
    let key = e.keyCode;
    if (key == 13) {
        alert('o valor digitado no input foi' + this.value);
    }
});