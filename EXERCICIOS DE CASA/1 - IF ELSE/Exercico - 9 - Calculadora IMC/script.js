//9 — Calculadora de IMC:
//Peça ao usuário:
//- Peso (em kg)
//- Altura (em metros)
//Calcule o IMC com a fórmula: IMC = peso / (altura * altura)
//Depois:
//- Se IMC < 18.5, mostre: "Abaixo do peso"
//- Se IMC entre 18.5 e 24.9, mostre: "Peso normal"
//- Se IMC ≥ 25, mostre: "Acima do peso"

let altura = Number(prompt(`Vamos calcular seu IMC. Digite sua altura:`))
let peso = Number(prompt(`Qual seu peso?`))

if (isNaN(altura) || altura <=0){
    alert(`Altura inválida! Digite um valor maior que zero`);
}else if(isNaN(peso) || peso <=0){
    alert(`Peso inválido! Digite um valor maior que zero.`);
}else {
        let altura2 = altura * altura;
        let IMC = peso / altura2;
        IMC = Number(IMC.toFixed(2));
                
if (IMC < 18.5){
    alert(`Seu IMC é de ${IMC}, classificado como Magreza.`);
}else if(IMC >= 18.5 && IMC <= 24.9){
    alert(`Seu IMC é de ${IMC}, classificado como Peso Normal.`)
}else if (IMC >= 25.0 && IMC <= 29.9){
    alert(`Seu IMC é de ${IMC}, classificado como Sobrepeso.`);
}else if(IMC >= 30.0 && IMC <= 34.9){
    alert(`Seu IMC é de ${IMC}, classificado como Obesidade grau 1.`);
}else if(IMC >= 35.0 && IMC <= 39.9){
    alert(`Seu IMC é de ${IMC}, classificado como Obesidade grau 2.`);
}else if (IMC >= 40){
    alert(`Seu IMC é de ${IMC}, Classificado como Obesidade grau 3.`);
}else {
    alert(`Impossivel Calcular esse valor.`);
}
}