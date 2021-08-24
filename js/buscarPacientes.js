var botaoBuscar = document.querySelector("#btn-buscar-pacientes")

botaoBuscar.addEventListener("click", ()=>{
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener("load", ()=>{
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta)
            console.log(pacientes)
            pacientes.forEach( paciente => {
                addPacienteNaTabela(paciente)
            });
        }else{
            var mensagemErro = document.querySelector("#erro-ajax")
            mensagemErro.classList.add("mensagem-erro")
            mensagemErro.textContent = `Erro ao Buscar Pacientes: ${xhr.responseText}`
        }
    })

    xhr.send()
})
