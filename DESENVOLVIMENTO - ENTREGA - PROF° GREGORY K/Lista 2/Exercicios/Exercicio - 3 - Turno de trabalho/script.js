// 3 – Verificar o turno
//Peça ao usuário para digitar o turno que estuda (M para manhã, T para tarde ou N para noite) 
// e mostre uma saudação apropriada.

alert(`Vamos validar o turno de trabalho!`)
let turno = prompt(`Digite o seu turno! Manhã ou M, Tarde ou T, Noite ou N`)
let maiusculo = turno.toUpperCase()
if(maiusculo == "M"){
    alert(`Bom dia, equipe do turno da manhã!
Que o dia comece com energia positiva, foco e leveza. Vamos juntos em mais uma jornada de produtividade e bons resultados! 💪`)
}else if(maiusculo == "MANHA"){
    alert(`Bom dia, equipe do turno da manhã!
Que o dia comece com energia positiva, foco e leveza. Vamos juntos em mais uma jornada de produtividade e bons resultados! 💪`)
}else if(maiusculo == "MANHÃ"){
    alert(`Bom dia, equipe do turno da manhã!
Que o dia comece com energia positiva, foco e leveza. Vamos juntos em mais uma jornada de produtividade e bons resultados! 💪`)
}else if(maiusculo == "T"){
    alert(`Boa tarde, pessoal do turno da tarde!
Que a segunda metade do dia seja tão produtiva quanto a primeira. Sigamos firmes, com atenção aos detalhes e espírito de equipe! 🚀`)
}else if(maiusculo == "TARDE"){
    alert(`Boa tarde, pessoal do turno da tarde!
Que a segunda metade do dia seja tão produtiva quanto a primeira. Sigamos firmes, com atenção aos detalhes e espírito de equipe! 🚀`)
}else if(maiusculo == "N"){
    alert(`Boa noite, equipe do turno da noite!
Que esta jornada seja tranquila, segura e eficiente. Obrigado por manter a engrenagem rodando mesmo nas últimas horas do dia. Força e foco! 🌌`)
}else if(maiusculo == "NOITE"){
    alert(`Boa noite, equipe do turno da noite!
Que esta jornada seja tranquila, segura e eficiente. Obrigado por manter a engrenagem rodando mesmo nas últimas horas do dia. Força e foco! 🌌`)
}else{
    alert(`Erro, digite um valor válido`)
}