const listaProdutos = [
    {id: 1, nome: "Labubu de Capivara", preco: 30, imagem:"img/labubu1.jpg"},
    {id: 2, nome: "Labubu Branco", preco: 35, imagem:"img/labubu2.jpg"},
    {id: 3, nome: "Labubu Marrom", preco: 40, imagem:"img/labubu3.jpg"},
    {id: 4, nome: "Labubu de Gorro", preco: 50, imagem: "img/labubu4.jpg"} 
]

const containerProdutos = document.getElementById("produtos")
const barraPesquisa = document.getElementById("barraPesquisa")
const listaCarrinho = document.getElementById("listaCarrinho")
const botaoCarrinho = document.getElementById("botaoCarrinho")
const botaoLoja = document.getElementById("botaoLoja")
const divCarrinho = document.getElementById("carrinho")
const totalCarrinho = document.getElementById("totalCarrinho")

let carrinho = []

function mostrarProdutos(lista) {
    containerProdutos.innerHTML = ""
    lista.forEach(produto => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        <img src ="${produto.imagem}" alt ="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
        <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao carrinho</button>
        `
        containerProdutos.appendChild(card)
    })
}

function adicionarCarrinho(idProduto) {
    const produtosSelecionado = listaProdutos.find(prod => prod.id === idProduto)
    const itemExistente = carrinho.find(item => item.id === idProduto)
    if(itemExistente) {
        itemExistente.quantidade += 1
    }else {
        carrinho.push({...produtosSelecionado, quantidade: 1})
    }
    atualizarCarrinho()
}

function diminuirQuantidade(idProduto) {
    const itemExistente = carrinho.find(item => item.id === idProduto)
    if(itemExistente) {
        itemExistente.quantidade -= 1
        if(itemExistente.quantidade <= 0) {
            removerDoCarrinho(idProduto)
            return
        }
        atualizarCarrinho()
    }
}

function removerDoCarrinho(idProduto) {
    carrinho = carrinho.filter(item => item.id !== idProduto)
    atualizarCarrinho()
}

function atualizarCarrinho() {
    listaCarrinho.innerHTML = ""
    carrinho.forEach(item => {
        const li = document.createElement("li")
        li.innerHTML = `
        <span>${item.nome}</span>
        <span>${item.quantidade}</span>
        <span>R$ ${item.preco * item.quantidade}, 00</span>
        <span>
        <button class="aumentar" onclick="adicionarCarrinho(${item.id})">+</button>
        <button class="diminuir" onclick="diminuirQuantidade(${item.id})">-</button>
        <button class="remover" onclick="removerDoCarrinho(${item.id})">Remover</button>
        </span>
        `
        listaCarrinho.appendChild(li)
    })
    calcularTotal()
}

function calcularTotal(){
    let total = 0
    carrinho. forEach(item => {
        total += item.preco * item.quantidade
    })
    totalCarrinho.innerHTML = `<strong>Total: R${total}, 00</strong>`
}

barraPesquisa.addEventListener("input", () => {
    const textoPesquisa = barraPesquisa.value.toLowerCase()
    const produtosFiltrados = listaProdutos.filter(produto =>
        produto.nome.toLowerCase().includes(textoPesquisa)
    )
    mostrarProdutos(produtosFiltrados)
})

botaoCarrinho.addEventListener("click", () => {
    containerProdutos.style.display = "none"
    barraPesquisa.style.display = "none"
    divCarrinho.style.display = "block"
    botaoCarrinho.style.display = "none"
    botaoLoja.style.display = "inline"
})

botaoLoja.addEventListener("click", () => {
    containerProdutos.style.display = "flex"
    barraPesquisa. style.display = "block"
    divCarrinho.style.display = "none"
    botaoCarrinho.style.display = "inline"
    botaoLoja.style.display = "none"
})

mostrarProdutos(listaProdutos)