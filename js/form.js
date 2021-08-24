var botaoAdicionar = document.querySelector("#btn-add-paciente");

botaoAdicionar.addEventListener("click", (e) => {
    e.preventDefault()
    var form = document.querySelector("#form");
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensErro(erros);
        return; //saí da função imediatamente
    }
    addPacienteNaTabela(paciente); 
    
    //limpa form e campos de adicionar paciente
    form.reset();
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML="";
    
})

function addPacienteNaTabela(paciente){

    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML="";
    erros.forEach(e => {
        var li = document.createElement("li");
        li.classList.add("mensagem-erro")
        li.textContent = e;
        ul.appendChild(li);
    });
}

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

    var erros = [];
    
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é invalido")
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida")
    }
    if(paciente.nome.length == 0){
        erros.push("Nome é inválido")
    }

    return erros;

}