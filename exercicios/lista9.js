console.log("EX1")
//ex1
for(let contador = 1; contador <= 30; contador++) {
    console.log(contador)
}

console.log("EX2")
//ex2
for(let cont = 30; cont >= 1; cont--){
    console.log(cont)
}

console.log("EX3")
//ex3
for(let contador1 = 1; contador1 <= 5; contador1++){
    let num = prompt("Escolha 5 números:")
    if (num >= 50){
        console.log("ACIMA DA MEDIA")
    }else{
        console.log("ABAIXO DA MÉDIA")
    }
}

console.log("EX4")
//ex4
let numero = prompt("Escolha um número para taboáda:") 
for(let mult = 1; mult <= 10 ; mult++){
    let resultado = mult * numero
    console.log(resultado)
}

console.log("EX5")
//ex5
for (let patos = prompt("Escolha um número de patos"); patos > 0; patos--) {
    console.log(patos, "Foram passear, além das montanhas para brincar, a mamãe gritou: Quá, quá, quá, quá")
    console.log("Mas só", patos-1, "patinhos voltaram de lá.")
}


console.log("EX6")
//ex6
for(let contador2 = 1; contador2 <= 10; contador2++){
    let num2 = prompt("Insira 10 idades:")
    if (num2 >= 18){
        console.log("VOCÊ É MAIOR DE IDADE")
    }else{
        console.log("VOCÊ É MAIOR DE IDADE")
    }
}

console.log("EX7")
//ex7
for(let contador3 = 1; contador3 <= 5; contador3++){
    let num3 = prompt("Vote em um candidato '1,2,3,4 = voto para os respectivos candidatos, 5 = voto nulo, 6 = voto em branco.")
    if (num3 == 1){
        console.log("Candidato 1")
    }else if (num3 == 2){
        console.log("Candidato 2")
    }else if (num3 == 3){
        console.log("Candidato 3")
    }else if (num3 == 4){
        console.log("Candidato 4")
    }else if (num3 == 5){
        console.log("Nulo")
    }else {
        console.log("Voto em branco")
    }
}