alert(`Olá`)
alert(`Vinicius`)
alert(`Bom dia`)
alert(`5+5`)
alert(`arquivo`)
alert(`alerta 6`)
alert(`ja estou sem ideias`)

console.log(`Olá`)
console.log(`Vinicius`)
console.log(``)
console.log(``)
console.log(`Teste console  `)
console.log(``)

let nome = prompt(`Qual seu nome?`);
let idade = Number(prompt(`Qual sua idade?`));
alert(`Olá ${nome}! Sua idade é de ${idade}!`);

let number1 = Number(prompt(`Vamos realizar uma adição simples, digite um númmero:`));
let number2 = Number(prompt(`Digite mais um número`));
let resultadosoma = number1 + number2;
alert(`A soma entre ${number1} mais ${number2} é de ${resultadosoma}`);

let number3 = Number(prompt(`Vamos realizar uma subitração simples, digite um númmero:`));
let number4 = Number(prompt(`Digite mais um número`));
let resultadosubitracao = number3 - number4;
alert(`A subitração entre ${number3} menos ${number4} é de ${resultadosubitracao}`);

let number5 = Number(prompt(`Vamos realizar uma multiplicação simples, digite um númmero:`));
let number6 = Number(prompt(`Digite mais um número`));
let resultadomultiplicacao = number5 * number6;
alert(`A multiplicação entre ${number5} vezes ${number6 } é de ${resultadomultiplicacao}`);

let number7 = Number(prompt(`Vamos realizar uma divisao simples, digite um númmero:`));
let number8 = Number(prompt(`Digite mais um número`));
let resultadodivisao = number7 * number8;
alert(`A divisão entre ${number7} dividido por ${number8 } é de ${resultadodivisao}`);

let number9 = Number(prompt(`Vamos realizar uma sobra simples, digite um númmero:`));
let number10 = Number(prompt(`Digite mais um número`));
let resultadosobra = number9 * number10;
alert(`A divisão entre ${number9} dividido por ${number10 } é de ${resultadosobra}`);

alert(`${nome} você disse que tem ${idade}!
    Somou ${number1} + ${number2}= ${resultadosoma},
    subitraiu ${number3} - ${number4}= ${resultadosubitracao}, 
    multiplicou ${number5} x ${number6}= ${resultadomultiplicacao},
    dividiu ${number7}/ ${number8}=${resultadodivisao}. 
    Parabéns!!`);

    //descobrir a area do quadrado 
let altura = Number(prompt(`Qual a altura do quadrado`))
let largura = Number(prompt(`Qual a largura do quadrado?`))
let quadrado = altura * largura 
alert(`A área do quadrado de ${altura} x ${largura} é de ${quadrado}`)

// tentativa 1 area do retangulo
let altura_retangulo = Number(prompt(`Qual a altura do retangulo`))
let largura_retangulo = Number(prompt(`Qual a largura do retangulo?`))
let largura2 = altura_retangulo * 2
let retangulo = altura_retangulo * largura2
alert(`A área do retangulo de ${altura_retangulo} x ${largura_retangulo} é de ${retangulo} `)

//não sei de onde eu tirei que precisa multiuplicar por 2 a base do quadrado!!!! 
let altura_retangulo3 = Number(prompt(`Qual a altura do retangulo`))
let largura_retangulo3 = Number(prompt(`Qual a largura do retangulo?`))
let retangulo3 = altura_retangulo3 * largura_retangulo3
alert(`A área do retangulo de ${altura_retangulo3} x ${largura_retangulo3} é de ${retangulo3} `)

//base multiplicado pela altura e o resultado é dividido por 2 
let altura_triangulo = Number(prompt(`Qual a altura do triangulo?`))
let largura_teriangulo = Number(prompt(`Qual a largura do triangulo?`))
let altura_x_largura = altura_triangulo * largura_triangulo
let area_triangulo = altura_x_largura / 2
alert(`A área do triangulo é ${area_triangulo}`)
