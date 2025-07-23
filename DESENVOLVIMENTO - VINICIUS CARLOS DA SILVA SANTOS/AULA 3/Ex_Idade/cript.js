

let nota = Number(prompt(`Digite sua nota:`))
if (nota >= 7){
    alert(`Sua nota é ${nota}, você está APROVADO!!`);
} else if(nota == 6){
    alert(`Sua notea é ${nota}, você está EM RECUPERAÇÃO!!!`);
}else if(nota <= 5){
    alert(`Sua nota é ${nota}, você está REPROVADO!!`);
}

