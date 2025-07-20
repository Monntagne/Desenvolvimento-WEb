// 1 – Par ou ímpar
//Peça um número ao usuário e informe se ele é par ou ímpar.

alert(`Vamos validar se o número é PAR ou IMPAR!`)
let numero1 = Number(prompt(`Digite um número:`))
let resultado = numero1 % 2

if(resultado == 0){
    alert(`O número ${numero1} é PAR!`)
}else{
    alert(`O número ${numero1} é IMPAR!`)
}