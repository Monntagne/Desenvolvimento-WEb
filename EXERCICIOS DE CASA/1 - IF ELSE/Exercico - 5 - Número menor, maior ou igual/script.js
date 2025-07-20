//5 - Maior, menor ou igual?
//Peça dois números e diga se o primeiro é maior, menor ou igual ao segundo.
let numero3 = Number(prompt(`Vamos comparar se esse número é maior, menor ou igual ao segundo. Digite um número:`))
let numero4 = Number(prompt(`Digite mais um número:`))

if(numero3 > numero4)
    {alert(`O número ${numero3} é maior que o número ${numero4}`)}

else{
if(numero3 == numero4)
    {alert(`O número ${numero3} é igual ao número ${numero4}`)}

else{
if(numero3 < numero4)
    {alert(`O número ${numero3} é menor que o número ${numero4}`)}

}}
