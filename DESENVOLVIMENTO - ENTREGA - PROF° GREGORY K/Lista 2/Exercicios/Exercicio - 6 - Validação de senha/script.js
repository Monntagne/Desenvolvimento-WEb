// 6 – Verificar senha
//Peça uma senha e compare com a senha correta (por exemplo, “1234”). Se for igual, mostre “Acesso permitido”. Se estiver errada, mostre “Acesso negado”.

alert(`Vamos realizar a validação de senha!`)
let senha = prompt(`Digite a Senha `)
const senhacorreta = (`1234`)
if(senha === senhacorreta){
    alert(`Senha correta!`)
}else{
    alert(`Senha Incorreta`)
}