//2 -Número par ou ímpar?
//Peça para o usuário digitar um número e diga se ele é par ou ímpar.
let numero5 = Number(prompt(`Esse número é par ou impar? Digite um número:`))
let calculo = numero5 % 2
if (calculo == 0)
{alert(`O número ${numero5} é par!`)}
else
{alert(`O número ${numero5} é impar!`)}