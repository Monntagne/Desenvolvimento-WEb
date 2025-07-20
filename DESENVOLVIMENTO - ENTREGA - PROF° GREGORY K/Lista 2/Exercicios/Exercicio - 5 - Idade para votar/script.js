// 5 – Verificar se pode votar
//Peça a idade do usuário e informe se ele pode votar ou não pode votar.


alert(`Vamos vaidar se a sua idade pode votar!`)
let idade = Number(prompt(`Qual sua idade?`))

if(idade <= 15){
    alert(`Com ${idade} anos você ainda não pode votar!`)
}else if(idade >= 16 && idade <= 17){
    alert(`Com ${idade} anos você pode votar, mas ainda não é obrigatório`)
}else if(idade >= 18 && idade <= 70){
    alert(`Você pode e deve votar com ${idade} anos, não é opcional!`)
}else{
    alert(`Com ${idade} anos você pode votar, mas não é mais obrigatório`)
}