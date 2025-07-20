// 4 – Comparar dois números
//Peça dois números ao usuário e informe qual é o maior, ou se eles são iguais.

alert(`Vamos comparar se um numero é maior ou igual ao outro!`)
let numero1 = Number(prompt(`Digite um número!`))
let numero2 = Number(prompt(`Digite mais um número!`))
if(numero1 > numero2){
    alert(`O número ${numero1} é maior que o numero ${numero2}!`)
}else if(numero2 > numero1){
    alert(`O número ${numero2} é maior que o número ${numero1}`)
}else{
    alert(`O número ${numero2} é iagual ao número ${numero1}`)
}