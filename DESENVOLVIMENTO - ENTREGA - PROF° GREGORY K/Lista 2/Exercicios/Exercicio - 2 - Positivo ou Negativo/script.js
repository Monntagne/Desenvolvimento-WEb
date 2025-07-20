// 2 – Número positivo, negativo ou zero
//Peça um número e diga se ele é positivo, negativo ou igual a zero.

alert(`Vamos validar se o número digitado é negativo ou positivo!`)
let numero1 = Number(prompt(`Digite um número!`))
if(numero1 >= 0){
    alert(`O número ${numero1} é positivo`)
}else{
    alert(`O número ${numero1} é negativo!`)
}