let textoTarefa = document.querySelector("input")
let botao = document.querySelector("button")
let listaDeTarefa = document.querySelector(".lista-de-tarefa")
let lixeira = document.querySelector(".lixeira")

let lista = []

// Recarregando tarefas.
onload = () => {

    let lista = JSON.parse(localStorage.getItem("tarefas"))

    lista.forEach(elemento => {
        let conteudo = `<li class='item-lista'> <p class='tarefa'>${elemento}</p> <img class='lixeira' src='./images/trash-can.png' alt='lixeira'> </li>`
        
        listaDeTarefa.innerHTML += conteudo
    })

}

// Adicionando tarefa
botao.addEventListener('click', () => {

    lista.push(textoTarefa.value)

    let valor = JSON.stringify(lista)

    let conteudo = `<li class='item-lista'> <p class='tarefa'>${textoTarefa.value}</p> <img class='lixeira' src='./images/trash-can.png' alt='lixeira'> </li>`

    listaDeTarefa.innerHTML += conteudo

    localStorage.setItem("tarefas", valor)

})

// localStorage.clear()


