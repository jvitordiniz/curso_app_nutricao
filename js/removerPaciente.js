var tabela = document.querySelector("#tabela-pacientes")


tabela.addEventListener("dblclick", (e) => {
    paciente = e.target.parentElement
    paciente.classList.add("fadeOut")
    setTimeout(()=>{
        paciente.remove()
    },500)
});
