//6 — Verificar se o número é positivo, negativo ou zero:
//Peça um número ao usuário e:
//- Se for positivo, mostre a mensagem: "Número positivo"
//- Se for negativo, mostre: "Número negativo"
//- Se for zero, mostre: "Zero" 

let numero1 = Number(prompt(`Esse numero é positivo ou negativo? Digite um número:`))

    if (numero1 > 0){
        alert(`O número ${numero1} é positivo.`);
            }else if( numero1 < 0){
        alert(`O número ${numero1} é negativo`);
            }else{
        alert(`O número é zero.`)
        }