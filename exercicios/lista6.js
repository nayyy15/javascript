console.log("EX1")
/ex1
let numero = prompt("Digite um número de 1 a 7:")
switch(numero) {
    case "1":
        console.log("Domingo")
        break
    case "2":
        console.log("Segunda-feira")
        break
    case "3":
        console.log("Terça-feira")
        break
    case "4":
        console.log("Quarta-feira")
        break
    case "5":
        console.log("Quinta-feira")
        break
    case "6":
        console.log("Sexta-feira")
        break
    case "7":
        console.log("Sábado")
        break
    default:
        console.log("Número inválido. Insira um valor entre 1 e 7.")
}

console.log("EX2")
//ex2

let num = prompt("Digite sua idade:")
switch(num) {
    case "5":
        console.log("Infantil")
        break
    case "10":
        console.log("Infantil B")
        break
    case "15":
        console.log("Juvenil A")
        break
    case "20":
        console.log("Juvenil B")
        break
    case "30":
        console.log("Adulto")
        break
    default:
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.")
}

console.log("EX3")
//ex3
let turno = prompt("Digite seu turno:")
switch(turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno inválido. Insira M, V ou N.")
}

console.log("EX4")
//ex4
let n = prompt("Digite um número de 1 a 5:")
switch(n) {
    case "1":
        console.log("Número dentro do intervalo!")
        break
    case "2":
        console.log("Número dentro do intervalo!")
        break
    case "3":
        console.log("Número dentro do intervalo!")
        break
    case "4":
        console.log("Número dentro do intervalo!")
        break
    case "5":
        console.log("Número dentro do intervalo!")
        break
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}

console.log("EX5")
//ex5

let nn = prompt("Digite um número de 1 a 4:")
switch(nn) {
    case "1":
        console.log("Primavera")
        break
    case "2":
        console.log("Verão")
        break
    case "3":
        console.log("Outuno")
        break
    case "4":
        console.log("Inverno")
        break
    default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}
