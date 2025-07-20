//4 - Desconto no produto
//Pergunte o preço de um produto. Se o preço for maior que R$100, dê 10% de desconto e mostre o valor final. Caso contrário, mostre o preço sem desconto.
let produto = Number(prompt(`Qual o valor do produto?`))
let desconto = 10
let decimal = desconto /produto
let valordesconto = decimal * produto
let precovenda = produto - valordesconto
if(produto >= 100)
    {alert(`O valor de venda é ${precovenda} e economizou ${decimal}!`)}
else{alert(`O valor de venda é ${produto}!`)}  
