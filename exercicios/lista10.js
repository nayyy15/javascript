console.log("EX1")
//ex1
let filmes = ["Descendentes", "Dama e o Vagabundo", "Cruella"]
console.log(filmes[0])
console.log("ㅤ")

console.log("EX2")
//ex2
let frutas = ["Maça", "Uva", "Limão", "Laranja", "Maracujá"]
console.log(frutas[3])
console.log("ㅤ")

console.log("EX3")
//ex3
let cores = ["Preto", "Branco", "Vermelho"]
for(let adicionando = 0; adicionando < cores.length; adicionando++) {
    console.log(cores)
}
console.log("Adicionando na lista")
cores.push("Roxo")
console.log(cores)
console.log("ㅤ")

console.log("EX4")
//ex4
let num = [1, 2, 3, 4]
for(let i = 0; i < num.length; i++) {
    console.log(num[i])
}
console.log("Removendo elementos")
num.pop()
console.log(num)
console.log("ㅤ")

console.log("EX5")
//ex5
let cdd = ["Mogi", "Jundiapeba"]
for(let i = 0; i < cdd.length; i++) {
    console.log(cdd[i])
}
console.log("Adicionando no início")
cdd.unshift("Suzano")
console.log(cdd)
console.log("ㅤ")

console.log("EX6")
//ex6
let animal = ["Raposa", "Gato", "Panda"]
for(let i = 0; i < animal.length; i++) {
    console.log(animal[i])
}
console.log("Removendo do início")
animal.shift()
console.log(animal)
console.log("ㅤ")

console.log("EX7")
//ex7
let carros = ["THatch", "Sedã", "Fusca", "Minivan"]
for(let i = 0; i < carros.length; i++) {
    console.log(carros[i])
}
console.log("Verificando o tamanho")
console.log(carros)
console.log("ㅤ")

console.log("EX8")
//ex8
let a = []
for(let i = 0; i < a.length; i++) {
    console.log(a[i])
}
console.log("Operações combinadas")
a.push(1, 2, 3)
console.log(a)
a.unshift(4)
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log(a)
console.log("ㅤ")