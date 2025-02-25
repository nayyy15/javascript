console.log("EX1")
//ex1
let nome = prompt("Qual o seu nome?")
let saudacao = function(nome) {
    console.log("Olá,", nome,"! Como vai?")
}
saudacao(nome)


console.log("EX2")
//ex2
let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite um número:"))
let soma = function(a,b) {
    let resultado = a + b
    return resultado
}
console.log(soma(a,b))


console.log("EX3")
//ex3
let area = function(base,altura) {
    let resultado = base * altura
    return resultado
}
console.log(area(5,3))


console.log("EX4")
//ex4
let numero = Number(prompt("Digite um número:"))
let dobro = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(dobro(numero))

console.log("EX5")
//ex5
let num = Number(prompt("Digite um número:"))
let quadrado = (numero) => {
    let resultado = numero * numero
    return resultado
}
console.log(quadrado(numero))

console.log("EX6")
//ex6
let idade = prompt("Qual sua idade?")
let maioridade = (idade) => {
    if(idade >= 18) {
        console.log("Maior de idade!")
    } else
    console.log("Menor de idade!")
}
console.log(maioridade(idade))


console.log("EX7")
//ex7
let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
let media = (numero) => {
    let resultado = (nota1 + nota2 + nota3) / 3
    return resultado
}
console.log(media(nota1,nota2,nota3))

