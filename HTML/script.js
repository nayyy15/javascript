//JAVASCRIPT

let texto = document.getElementById("texto")
function mudarTexto(){
    texto.innerText = "Texto Alterado"
}

function mudarCor(){
    texto.style.color = "#bc67d4"
    document.body.style.backgroundColor = "#f6d8ff"
}

function trocarfundo(){
    let campo =document.getElementById("campo")
    campo.style.backgroundColor = "#f6e292"
}

let imagem = document.getElementById("imagem")
function troca(){
    imagem.src = "Princess lalaloopsy.jpg"
}
function destroca(){
    imagem.src = "Jewel Sparkles (1).jpg"
}

let mensagem = document.getElementById("mensagem")
    function outroTexto() {
        mensagem.innerText="Texto Alterado"
    }
function voltaTexto() {
    mensagem.innerText = "Passe o mouse aqui"
}

function aparece() {
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none") {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

function aleatorio() {
    let tamanho = document.getElementById ("tamanho")
    let novotamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10 //entre 10px e 40px
    tamanho.style.fontSize = novotamanho + 'px'
}