console.log ("Lista 4")

console.log("EX1")
//ex1
let numero = Number(prompt("Digite sua idade:"))
if(numero < 12){
    console.log("Criança")
} else if (numero < 17){
    console.log("Adolescente")
} else if (numero < 59){
    console.log("Adulto")
} else {
    console.log("Idoso")
}

console.log("EX2")
//ex2
let temperatura = Number(prompt("Digite a temperatura:"))
if(temperatura < 10){
    console.log("Muito frio")
} else if (temperatura < 20){
    console.log("Frio")
} else if (temperatura < 30){
    console.log("Agradável")
} else {
    console.log("Muito quente")
}


console.log("EX3")
//ex3
let turno = prompt("Digite seu turno:")
if(turno == "M"){
    console.log("Bom dia!")
} else if (turno == "V"){
    console.log("Boa Tarde!")
} else if (turno == "N"){
    console.log("Boa noite!")
} else {
    console.log("Turno inválido")
}


console.log("EX4")
//ex4
let compra = Number(prompt("Digite o valor da sua compra:"))
if(compra <= 100){
    console.log("Desconto de 5%")
} else if (compra <= 200){
    console.log("Desconto de 10%")
} else {
    console.log("Desconto de 15%")
} 

console.log("EX5")
//ex5
let nota = Number(prompt("Digite sua nota:"))
if(nota > 90){
    console.log("A")
} else if (nota > 80) {
    console.log("B")
} else if (nota > 70) {
    console.log("C")
} else if (nota > 60) {
    console.log("D")
} else {
    console.log("F")
}

console.log("EX6")
//ex6
let num = Number(prompt("Digite um número de 1 a 7:"))
if (num == 1) {
    console.log("Domingo")
} else if (num == 2) {
    console.log("Segunda-feira")
} else if (num == 3) {
    console.log("Terça-feira")
} else if (num == 4) {
    console.log("Quarta-feira")
} else if (num == 5) {
    console.log("Quinta-feira")
} else if (num == 6) {
    console.log("Sexta-feira")
} else if (num == 7) {
    console.log("Sábado")
} else {
    console.log("Inválido")
}

console.log("EX7")
//ex7
let distancia = Number(prompt("Digite a distancia de uma pista de corrida em metros:"))
if (distancia < 400) {
    console.log("Pista curta")
} else if (distancia < 800) {
    console.log("Pista média")
} else if (distancia < 1500 ) {
    console.log("Pista longa")
} else {
    console.log("Pista muito longa")
}

console.log("EX8")
//ex8
let pontuacao = Number(prompt("Digite sua pontuação:"))
if (pontuacao < 1000) {
    console.log("Iniciante")
} else if (pontuacao < 5000) {
    console.log("Intermediário")
} else if (pontuacao < 10000) {
    console.log("Avançado")
} else {
    console.log("Mestre")
}
