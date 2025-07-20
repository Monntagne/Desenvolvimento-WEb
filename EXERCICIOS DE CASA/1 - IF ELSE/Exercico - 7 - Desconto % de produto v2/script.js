//7 — Calcular desconto baseado no valor da compra:
//Peça ao usuário o valor de uma compra:
//- Se for acima de R$200, aplique 15% de desconto
//- Se for entre R$100 e R$200, aplique 10%
//- Se for abaixo de R$100, aplique 5%
//Mostre o valor final com o desconto aplicado.

let valorproduto = Number(prompt(`Qual o valor da compra?`))
let desconto15 = valorproduto * 0.15
let desconto10 = valorproduto * 0.10
let desconto5  = valorproduto * 0.05
let valorvenda15 = valorproduto - desconto15
let valorvenda10 = valorproduto - desconto10
let valorvenda5 = valorproduto - desconto5

if (valorproduto > 200){
    alert(`O valor de economia é de ${desconto15}. O valor do produto é de ${valorvenda15}.`);
}else if ( valorproduto >= 100 && valorproduto <= 200){
    alert(`O valor de economia é de ${desconto10}. O valor do produto é de ${valorvenda10}.`);
}else if (valorproduto < 100){
    alert(`O valor de economia é de ${desconto5}. O valor do produto é de ${valorvenda5}.`)
}else{
    alert(`Esse produto não tem desconto, fica no valor de ${valorproduto}.`)
}