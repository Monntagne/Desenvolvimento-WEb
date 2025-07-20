//10 — Média de duas provas:
//Peça as duas notas de um aluno:
//- Calcule a média
//- Se a média for maior ou igual a 7, mostre: "Aprovado"
//- Se for menor que 7, mostre: "Reprovado"

let nota1 = Number(prompt(`Calculo de nota escolar. Digite a nota 1:`))
let nota2 = Number(prompt(`Digite a nota 2:`))
let somanotas = nota1 + nota2
let divisaonota = somanotas / 2
let media = divisaonota 

if (media >=7){
    alert(`Sua média é de ${media}, você está aprovado!`)
}else{
    alert(`Sua média é ${media}, você está reprovado!`)
}