console.log ("Lista 5")

console.log("EX1")
//ex1
let idade = prompt("Digite sua idade:")
let CarteiraMotorista = true

if(idade >=18 && CarteiraMotorista == true) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

console.log("EX2")
//ex2
let anos = prompt("Digite seus anos de trabalho:")
let quantidade = prompt("Quantos projetos você realizou:")
if (anos => 5 && quantidade> 10) {
    console.log("Você está elegível para promoção")
} else {
    console.log("Você não está elegível para promoção")
}

console.log("EX3")
//ex3
let id = prompt("Digite sua idade:")
if (id >= 18 && id <= 30) {
    console.log("Você pode entrar no evento")
} else {
    console.log("Você não pode entrar no evento")
}

console.log("EX4")
//ex4
let anoss = prompt("Digite sua idade:")
let experiencia = true
if (anoss > 21 && experiencia == true) {
    console.log("Você foi aceito para a vaga")
} else {
    console.log("Você não foi aceito para a vaga")
}

console.log("EX5")
//ex5
let usuario = prompt("Digite seu usuário:")
let senha = prompt("Digite sua senha:")
if (usuario == "admin" && senha == 1234) {
    console.log("Login bem-sucedido") 
} else {
    console.log("Nome de usuário ou senha incorretos")
}

console.log("EX6")
//ex6
let n = prompt("Digite um número:")
if (n > 10 && n < 20) {
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if (n > 30 && n < 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("Ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}

console.log("EX7")
//ex7
let num = prompt("Digite um número:")
if (num < 10 || num > 100 && num == 50) {
    console.log("O número é aceito")
} else {
    console.log("O número não é aceito")
}