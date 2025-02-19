console.log("EX1")
//ex1
function JavaScript() {
    console.log("Eu gosto de JavaScript")
}

JavaScript() 

console.log("EX2")
//ex2

function contarAteCinco() {
    for(let i = 1; i <= 5; i++) {
        console.log(i)
    }
}

contarAteCinco()

console.log("EX3")
//ex3
let nome = prompt("Qual é seu nome?")
function saudacao() {
    console.log("Olá,", nome,"! Seja bem-vindo(a)!")
}
saudacao()


console.log("EX4")
//ex4
function Multiplicação(a, b) {
    let resultado = a * b
    return resultado
}
console.log(Multiplicação(5, 3))

console.log("EX5")
//ex5
let idade = prompt("Qual sua idade?")
function verificarIdade(idade) {
    if(idade >= 18) {
        console.log("Maior de idade!")
    } else
    console.log("Menor de idade!")
}
verificarIdade(idade)

console.log("EX6")
//ex6
let a = Number(prompt("Digite um Número:"))
let b = Number(prompt("Digite outro Número:"))

function somar(a , b) {
    let resultado = a + b
    return resultado
}
console.log(somar(a,b))

console.log("EX7")
//ex7

let laga = Number(prompt("Digite a Largura:"))
let lagb = Number(prompt("Digite a altura:"))

function calcularAreaRetangulo (laga, lagb) {
    let resultado = laga * lagb
    return resultado
}
console.log(calcularAreaRetangulo (laga,lagb))

console.log("EX8")
//ex8

let idad = Number(prompt("Digite uma idade:"))
let idad1 = Number(prompt("Digite outra idade:"))
function compararIdade(idad, idad1) {
    if(idad > idad1) {
        console.log("A primeira pessoa é mais velha!")
    } else if (idad == idad1){
    console.log("As duas pessoas tem a mesma idade!")
    } else 
    console.log("A segunda pessoa é mais velha!")
}
compararIdade(idad, idad1)

