console.log("EX1")
//ex1

let num = 1
do {
    console.log(num)
    num++
} while (num <=20)

console.log("EX2")
//ex2

let resposta 
do {
    resposta = prompt("Deseja continuar?")
    if (pergunta == "s") {}
} while (pegunta  == "s")

console.log("EX3")
//ex3

let usuario = prompt ("Escolha um número:")
let numero = 1
do {
    console.log(numero)
    numero++
} while (numero <= usuario)
    9
console.log("EX4")
//ex4
let contador = 1
while (contador <= 31) {
    console.log(contador)
    contador+=2
}


console.log("EX5")
//ex5

let cont =1 
do {
    let n = prompt ("Digite um número:")
        if (n > 0) {
            console.log("número positivo")
        } else if (n < 0) {
            console.log("número negativo")
        } else {
            console.log("o número é zero")
        }
    cont++
} while (cont <=5)

console.log("EX6")
//ex6

let pergunta 
do {
    pergunta = prompt ("deseja fazer uma conta?")
    if (pergunta == "s") {
        let n1 = number(prompt("Digite um número:"))
        let n2 = number(prompt("Digite mais um número:"))
        let soma = n1 + n2
        console.log(soma)
    }
} while (pergunta == "s")