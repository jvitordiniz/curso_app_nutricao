var botaoAdicionar = document.querySelector("#btn-add-paciente");
botaoAdicionar.addEventListener("click", (e) => {
    e.preventDefault()
    var form = document.querySelector("#form");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    
})

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}


function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-peso"));

    return pacienteTr;    
}


function montaTd(novaTd,classe){
    var td = document.createElement("td");
    td.textContent = novaTd;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso) && validaAltura(paciente.altura)){
        return true
    }else{
        return false
    }
}