//8 — Verificar se o número é múltiplo de 3 e de 5:
//Peça um número ao usuário e:
//- Se for múltiplo de 3 e de 5, mostre: "É múltiplo de 3 e 5"
//- Se for apenas de 3, mostre: "Apenas múltiplo de 3"
//- Se for apenas de 5, mostre: "Apenas múltiplo de 5"
//- Se não for nenhum, mostre: "Não é múltiplo de 3 nem de 5" 

let numero2 = Number(prompt(`Esse número é é multiplo de 3 ou 5? Digite o numero para saber:`))

if (numero2 % 3 === 0 && numero2 % 5 === 0){
    alert(`O número ${numero2} é multiplo de 3 e 5.`);
} else if (numero2 % 3 === 0){
    alert(`O número ${numero2} é multiplo de 3.`);
} else if (numero2 % 5 === 0){
    alert(`O número ${numero2} é multiplo de 5`);
}else{
    alert(`O numero ${numero2} não é multiplo de 5 ou 3`)
}