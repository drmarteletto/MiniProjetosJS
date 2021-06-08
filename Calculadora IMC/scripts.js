
const calcular = document.querySelector('.button');

function imc() {
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('.area-resultado');

    if (nome !== '' && altura !== '' && peso !== '') {  
        let alturaConvert = (altura/100);       
        const resultadoIMC = (peso / (alturaConvert * alturaConvert)).toFixed(1); 
        
        if (resultadoIMC <= 18.5) {
            resultado.innerHTML = nome + " seu IMC é " + resultadoIMC + "<br>Você está abaixo do peso";
        } else if(resultadoIMC > 18.5 && resultadoIMC < 25){
            resultado.innerHTML = nome + " seu IMC é " + resultadoIMC + "<br>Você está dentro do peso ideal";
        } else if(resultadoIMC >= 25 && resultadoIMC < 30){
            resultado.innerHTML = nome + " seu IMC é " + resultadoIMC + "<br>Você está com sobrepeso";
        } else if(resultadoIMC >= 30 && resultadoIMC < 40){
            resultado.innerHTML = nome + " seu IMC é " + resultadoIMC + "<br>Você está com obesidade";
        } else if(resultadoIMC >= 40){
            resultado.innerHTML = nome + " seu IMC é " + resultadoIMC + "<br>Você está com obesidade grave";
        }       

    } else {
        resultado.innerHTML = "Insira todos os valores";
    }
};

calcular.addEventListener("click", imc);