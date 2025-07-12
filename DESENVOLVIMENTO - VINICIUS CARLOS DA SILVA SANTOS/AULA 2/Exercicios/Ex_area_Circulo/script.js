//9 - Calcular a área de um círculo
//primeiro descobrir o raio, depois multiplicar o raio por ele mesmo, depois o resultado multiplicar por π
let circulo_raio = Number(prompt(`Dica: Imagine uma pizza. O corte do centro até a borda é o raio. Qual o raio do círculo?`))
let circulo_raioaoquadrado = circulo_raio * circulo_raio
let circulo_area = circulo_raioaoquadrado * Math.PI
alert(`A área de um círculo é ${circulo_area}cm²`)