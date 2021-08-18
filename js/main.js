var titulo = document.querySelector(".titulo")
titulo.textContent = "App Nutricionista"

var paciente = document.querySelector("#primeiro")
var tdPeso = paciente.querySelector(".info-peso")
var tdAltura = paciente.querySelector(".info-altura")

var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    pesoEhValido= false
    tdImc.textContent ="Peso Inválido"
}
if(altura <= 0 || altura >= 3){
    alturaEhValida= false
    tdImc.textContent= "Altura inválida"
}

if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

