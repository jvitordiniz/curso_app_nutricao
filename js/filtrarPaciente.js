var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", (e) => {
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach( paciente => {
        var tdNome = paciente.querySelector(".info-nome")
        var nome = tdNome.textContent
        var expressao = new RegExp(e.target.value, "i") //expressão regular para buscar por letras / "i" flag para case insensitive
        if(!expressao.test(nome) && e.target.value != ''){
            paciente.classList.add("invisivel")
        }else{
            paciente.classList.remove("invisivel")
        }
   });
})
