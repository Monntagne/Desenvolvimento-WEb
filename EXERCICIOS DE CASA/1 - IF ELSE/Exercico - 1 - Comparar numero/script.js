//1 - Qual número é maior?
//Peça para o usuário digitar dois números e informe qual é o maior, ou se são iguais.
let numero1 = Number(prompt(`Vamos comparar os números, digite o primeiro número:`))
let numero2 = Number(prompt(`Digite o próximo número`))
    if (numero1 > numero2)
        {alert(`O número ${ numero1} é maior que o número ${numero2}`)}
    
    else{
    if (numero1 < numero2)
        {alert(`O número ${ numero1} é menor que o número ${numero2}`)}
    else
    if(numero1 == numero2)
    {alert(`O número ${ numero1} é igual ao número ${numero2}`)}
}
