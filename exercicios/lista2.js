/* > maior
>= maior ou igual
< menor
< = menor ou igual
== igual
!= diferente */

// ex1
let num1 = 5;
let num2 = 10;

console.log ("Lista 2")

let resultado = num1 > num2; 
let resultado2 = num1 <= num2;
let resultado3 = num1 == num2;

console.log("maior que o segundo" , resultado)
console.log("menor ou igual" , resultado2)
console.log("são iguais" , resultado3)

console.log("EX2")
// ex2

let idade = 20;
let vota = idade >= 16;
let vota2 = idade >= 18;
let vota3 = idade <= 70;

console.log("tem idade" ,  vota);
console.log("maior de 16" ,  vota2);
console.log("menor de 70" , vota3);

console.log("EX3")
//ex3

let id = 15;
let id1 = id >= 18;
let id2 = id >= 60;

console.log("maioridade" , id1);
console.log("idosa" , id2);

console.log("EX4")
//ex4

let usuario = ("admin");
let nome = usuario == ("admin");

console.log("senha correta" , nome)

console.log("EX5")
//ex5

let nmr = 5
let nmr1 = nmr % 3
let nmr2 = nmr % 2

let total = nmr1 == 0
let total1 = nmr2 == 0

console.log(total);
console.log(total1);

console.log("EX6")
//ex6

let saldo = 1000
let saque = 10

let integral = saldo > saque

let integral1 = saldo - saque
let verificacao1 = integral1 > 100

console.log(integral)
console.log(verificacao1)