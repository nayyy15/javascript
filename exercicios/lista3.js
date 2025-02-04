console.log ("Lista 3")

//ex1
let idade = prompt("Qual sua idade?")
console.log("Sua idade é" , idade)

if (idade > 18) {
    console.log("Voce é maior de idade")
} else {
    console.log("Voce é menor de idade")
}


console.log("EX2")
//ex2
let numero = prompt("Escolha um número:")
let resultado = numero % 2 //resto
if(resultado == 0) {
    console.log("O numero é par")
} else {
    console.log("o numero é impar")
}


console.log("EX3")
//ex3
let nota1 = prompt("Qual a primeira nota:")
let nota2 = prompt("Qual a segunda nota:")
let total = (nota1 + nota2) / 2
if ("total >=7"){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

console.log("EX4")
//ex4
let idad = prompt("Qual sua idade?")

if (idad > 18) {
    console.log("entrada permitida")
} else {
    console.log("entrada proibida")
}

console.log("EX5")
//ex5
let senha = prompt("Digite sua senha")

if (senha = 1234) {
    console.log("senha correta")
} else {
    console.log("senha incorreta")
}

console.log("EX6")
//ex6
let temperatura = prompt("Digite a temperatura")

if (temperatura > 30 ) {
    console.log("está quente")
} else {
    console.log("está frio")
}

console.log("EX7")
//7
let num = prompt("Escolha um número:")
if (num >= 0) {
    console.log("o número é positivo")
} else {
    console.log("o número é negativo")
}