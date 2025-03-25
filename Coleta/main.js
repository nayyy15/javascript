//main.js

//Funções Matemáticas
let num = 4.7

//Arredondar números
console.log(Math.round(num)) //inteiro mais próximo
console.log(Math.floor(num)) //arredonda para baixo
console.log(Math.ceil(num)) //arredonda para cima

//Número Aleatório
console.log(Math.random()) //número aleatório entre 0 e 1
console.log(Math.random()*10) //número aleatório entre 0 e 10

//Funções de String
let texto = "Eu amo javascript" //manipular String
console.log(texto.toUpperCase()) //deixa tudo maiusculo
console.log(texto.toLowerCase()) //deixa tudo minusculo
console.log(texto.trim()) //remove espaços antes e depois do texto

//Localizar texto
console.log(texto.charAt(5)) //mostra a letra que eta nessa posição
console.log(texto.includes("javascript")) //verifica se tem a palava

//Trocar textos
console.log(texto.replace("amo","adoro"))

//Funções Númericas
let numero = "42.85"
console.log(parseInt(numero)) //converte String para número inteiro
console.log(parseFloat(numero)) //converte String para número decimal
console.log(Number(numero).toFixed(1)) //define quantas casas decimais vai mostrar
console.log(isNaN("abc"))
console.log(isNaN(123))