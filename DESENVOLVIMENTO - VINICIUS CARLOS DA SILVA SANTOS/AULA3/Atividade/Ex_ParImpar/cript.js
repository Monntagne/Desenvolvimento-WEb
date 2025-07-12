let numero1 = Number(prompt(`Digitae um número para saber se é par ou impar`))
let calculo = numero1 % 2

if (calculo == 0){
    alert(`O número ${numero1}, é Par!`);
}else{
    alert(`O número ${numero1}, é Impar`);
}