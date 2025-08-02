/*
document.getElementById("p1").innerText = "Você é mais forte do que pensa."
document.getElementById("p2").innerText = "Um passo de cada vez chega longe."
document.getElementById("p3").innerText = "Acredite no seu potencial."
document.getElementById("p4").innerText = "Persistência vence o cansaço."
document.getElementById("p5").innerText = "Seja hoje a sua melhor versão."
document.getElementById("p6").innerText = "Desistir não é opção."
*/

let paragrafos = document.getElementsByTagName("p"); 

document.getElementById("fundo").style.backgroundColor= "black"
document.getElementById("fundo").style.color = "white"
document.getElementById("fundo").style.fontFamily = "arial"

function texto(texto){

paragrafos[0].innerText = "Você é mais forte do que pensa."
paragrafos[1].innerText = "Um passo de cada vez chega longe."
paragrafos[2].innerText = "Acredite no seu potencial."
paragrafos[3].innerText = "Persistência vence o cansaço."
paragrafos[4].innerText = "Seja hoje a sua melhor versão."
paragrafos[5].innerText = "Desistir não é opção."


document.getElementById("texto").style.backgroundColor= "#51B672"
document.getElementById("texto").style.color = "with"
document.getElementById("texto").style.fontFamily = "Consolas"
document.getElementById("texto").style.display = "flex"
document.getElementById("texto").style.alignItems = "center"
document.getElementById("texto").style.flexDirection = "column"
document.getElementById("texto").style.fontSize = "20px"
document.getElementById("texto").style. padding = "30px 20px"
document.getElementById("texto").style.borderRadius = "15px"
document.getElementById("texto").style.margin = "10px"

}

function card(card){

paragrafos[6].innerText = "Você é mais forte do que pensa."
paragrafos[7].innerText = "Um passo de cada vez chega longe."
paragrafos[8].innerText = "Acredite no seu potencial."
paragrafos[9].innerText = "Persistência vence o cansaço."
paragrafos[10].innerText = "Seja hoje a sua melhor versão."
paragrafos[11].innerText = "Desistir não é opção."

document.getElementById("card").style.backgroundColor= "#54745c"
document.getElementById("card").style.color = "with"
document.getElementById("card").style.fontFamily = "Consolas"
document.getElementById("card").style.display = "flex"
document.getElementById("card").style.alignItems = "center"
document.getElementById("card").style.flexDirection = "column"
document.getElementById("card").style.fontSize = "20px"
document.getElementById("card").style. padding = "30px 20px"
document.getElementById("card").style.borderRadius = "15px"
document.getElementById("card").style.margin = "10px"
}