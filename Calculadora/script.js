onload = () => {
    document.querySelector('#bt-0').onclick = () => digito(0);
    document.querySelector('#bt-1').onclick = () => digito(1);
    document.querySelector('#bt-2').onclick = () => digito(2);
    document.querySelector('#bt-3').onclick = () => digito(3);
    document.querySelector('#bt-4').onclick = () => digito(4);
    document.querySelector('#bt-5').onclick = () => digito(5);
    document.querySelector('#bt-6').onclick = () => digito(6);
    document.querySelector('#bt-7').onclick = () => digito(7);
    document.querySelector('#bt-8').onclick = () => digito(8);
    document.querySelector('#bt-9').onclick = () => digito(9);
    document.querySelector('#virgula').onclick = virgula;
    document.querySelector('#ac').onclick = limpa;
    document.querySelector('#divisao').onclick = () => operador('/');
    document.querySelector('#multiplicacao').onclick = () => operador('*');
    document.querySelector('#adicao').onclick = () => operador('+');
    document.querySelector('#subtracao').onclick = () => operador('-');
    document.querySelector('#porcentagem').onclick = () => operador('%');
    document.querySelector('#igual').onclick = calcula;
};

//Variáveis para armazenarmos o valor, o operador e o estado da calculadora

let sValor = '0'; // valor que será apresentado no display
let ehNovoNumero = true; //Indica se o próximo digito será de um novo número
let valorAnterior = 0; // valor acumulado para uma operação
let operacaoPendente = null; //operação acumulada

//Atualização do visor
const atualizarVisor = () => {
    let [parteInteira, parteDecimal] = sValor.split(',');
    let v = '';
    c = 0;
    for (let i = parteInteira.length -1; i>=0; i--) {
        if (++c > 3) {
            v = '.' + v;
            c = 1;
        }
        v = parteInteira[i] + v;       
    }
    v = v + (parteDecimal ? ',' + parteDecimal.substr(0,10 - v.length) : '');
    document.querySelector('.visor').value = v;
};

//Tratamento do clique no botão de dígito
const digito = (n) => {
    if (ehNovoNumero) {
        sValor = '' + n;
        ehNovoNumero = false;
    } else sValor += n;
    atualizarVisor();

};

//Tratamento do clique no botão de ponto decimal
const virgula = () => {
    if (ehNovoNumero) {
        sValor = '0,';
    } else if (sValor.indexOf(',')==-1) sValor += ',';
        atualizarVisor();
};

//Tratamento do clique no botão AC
const limpa = () => {
    ehNovoNumero = true;
    valorAnterior = 0;
    sValor = '0';
    operacaoPendente = false;
    atualizarVisor();
};

//Converte a String do valor para um número real
const valorAtual = () => parseFloat(sValor.replace(',','.'));

const operador = (op) => {
    calcula();
    valorAnterior = valorAtual();
    operacaoPendente = op;
    ehNovoNumero = true;
};

const calcula = () => {
    if (operacaoPendente != null) {
        let resultado;
        switch (operacaoPendente) {           
            case '+':
                resultado = valorAnterior + valorAtual();               
            break;
            case '-':
                resultado = valorAnterior - valorAtual();               
            break;
            case '/':
                resultado = valorAnterior / valorAtual();               
                break;
            case '*':
                resultado = valorAnterior * valorAtual();               
            break;
            case '%':
                resultado = valorAnterior % valorAtual();               
            break;
        }
        sValor = resultado.toString().replace('.',',');
    }
    ehNovoNumero = true;
    operacaoPendente = null;
    valorAnterior = 0;
    atualizarVisor();
};