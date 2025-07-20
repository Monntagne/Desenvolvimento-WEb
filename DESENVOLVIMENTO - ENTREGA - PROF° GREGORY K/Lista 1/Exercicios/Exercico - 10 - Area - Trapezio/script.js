// 10 - Faça um programa para calcular área de um trapézio 
alert(`Vamos calcular a área do trapézio!`)
let basemaior = Number(prompt(`Digite a medida da base maior!`))
let basemenor = Number(prompt(`Digite a medida da base menor!`))
let altura = Number(prompt(`Digite a medida da altura!`))
let resultado = ((basemaior + basemenor)*altura)/2
alert(`A área do trapézio, com base maior medindo ${basemaior} cm, base menor medindo ${basemenor} cm e altura medindo ${altura} cm, é de ${resultado} cm².`)