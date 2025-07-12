//10 - Calcular a área de um trapézio
let trapezio_basemaior = Number(prompt(`Vamos calcular a área do trapezio, qual a medida da base maior?`))
let trapezio_basemenor = Number(prompt(`Qual a medida da base menor?`))
let trapezio_altura = Number(prompt(`Qual a altura do trapézio?`))
let calculo_basesoma = trapezio_basemaior + trapezio_basemenor
let calculo_basemultiplicacao = calculo_basesoma * trapezio_altura
let calculo_basedivisao = calculo_basemultiplicacao / 2
alert(`Você informou que a base maior do trapézio é ${trapezio_basemaior}, base menor de ${trapezio_basemenor}, altura de ${trapezio_altura} e a área calculada é de ${calculo_basedivisao}.`)