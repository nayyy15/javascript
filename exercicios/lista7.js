console.log("EX1")
//ex1
let contador = 1
while(contador <= 10) {
    console.log(contador) 
    contador++ 
}


console.log("EX2")
//ex2
let numero = prompt("Digite um número:")
let multiplicador = 1
while (multiplicador <= 10) {
    let resultado = numero * multiplicador
    console.log(numero, "X", multiplicador, "=", resultado) 
    multiplicador += 1 
}


console.log("EX3")
//ex3
let cRegressiva = 10
while (cRegressiva >= 1) {
    console.log(cRegressiva)
    cRegressiva-- 
}

console.log("EX4")
//ex4
let senha = prompt("Digite a senha:")
while (senha != "12345") {
    senha = prompt("Tente novamente")
    if (senha == "12345") {
        console.log("Acertou!")
    }
}

console.log("EX5")
//ex5
let contador2 = 50
while(contador2 <= 100) {
    console.log(contador2) 
    contador2++ 
}

console.log("EX6")
//ex6
let contador5 = 0
while(contador5 <= 100) {
    console.log(contador5) 
    contador5+=5
}

console.log("EX7")
//ex7
let contador3 = 1
while(contador3 <= 5) {
    console.log("Eu gosto de JavaScript") 
    contador3++ 
}

console.log("EX8")
//ex8
let nome = prompt("Digite um nome:")
let numero2 = prompt("Digite um número:")
while (numero2 >= 1) {
    console.log(nome)
    numero2--
}
