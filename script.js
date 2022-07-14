// declarando variáveis
const botaoNvTrf = document.querySelector(".botao")
const listaDeTarefa = document.querySelector(".lista-de-tarefa")
const botaoLpTrf = document.querySelector(".botao-limpar")
const textoTrf = document.querySelector("input")

let tarefas = []

//Evento para carregar as tarefas
onload = () => {

    tarefas = JSON.parse(localStorage.getItem("tarefas"))

    if (tarefas == null) {
        tarefas = []
    }

    tarefas.forEach(element => {
        let conteudo = `<div  identificador="${element}" class="item-lista"> <p>${element}</p> <img onclick="excluirTarefa(this)" src="./images/trash-can.png" class="lixeira" alt="lixeira"> </div>`
        listaDeTarefa.innerHTML += conteudo
    });

}

//Evento para insirir uma nova tarefa
botaoNvTrf.addEventListener('click', () => {

    let tarefa = textoTrf.value

    let conteudo = `<div identificador="${tarefa}" class="item-lista"> <p>${tarefa}</p> <img onclick="excluirTarefa(this)" src="./images/trash-can.png" class="lixeira" alt="lixeira"> </div>`

    if (tarefa == "") {
        alert("Não se pode enviar tarefas vazias")
    } else {
        listaDeTarefa.innerHTML += conteudo
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }

    setTimeout(textoTrf.value = "", 200)

})

//Evento para limpar todas as tarefas
botaoLpTrf.addEventListener('click', () => {

    if (tarefas.length == 0) {
        alert("Nenhuma tarefa para ser apagada")
    } else {
        let confirmacao = confirm("Deseja apagar todas suas tarefas?")
        if (confirmacao) {
            listaDeTarefa.innerHTML = null
            localStorage.clear()
            tarefas = []
            setTimeout(textoTrf.value = "", 200)
        }
    }

})

//Função para limpar uma tarefa em específico
function excluirTarefa(icoLixeira) {

    const itemLista = icoLixeira.parentElement

    const nome = itemLista.getAttribute('identificador')

    for (let i in tarefas) {
        if (nome == tarefas[i]) {
            tarefas.splice(i, 1)
        }
    }

    icoLixeira.parentElement.remove()

    ListaAtz = JSON.stringify(tarefas)

    localStorage.setItem("tarefas", ListaAtz)

}