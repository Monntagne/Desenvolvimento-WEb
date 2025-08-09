function mostrar(){
    alert("Alerta 1 executado")
}

function mostrarconsole(){
    console.log("Console 1 executado")
}




document.getElementById("mostra1").addEventListener("click", function mostra1(){
    alert("Alerta 2 executado")

});

document.getElementById("mostrarconsole1").addEventListener("click", function(){
    console.log("Console 2 executado")
})






function exibirmensagem(){
    let valor = document.getElementById("entrada").value;     document.getElementById("mensagem").innerText=valor
}
;

//const senha = 1234
/*
function logar(){
        const senha = document.getElementById("senha").value; 
        if(senha === "1234"){
        document.getElementById("logado").innerText = "Senha Correta"
        
}else{
    document.getElementById("logado").innerText = "Senha Incorreta"
}
}
*/
function logar(){
const usuario = document.getElementById("usuario").value;
const senha = document.getElementById("senha").value;

if(usuario === "vinicius_santos" & senha === "1234"){
    document.getElementById("logado").innerText = "Usuario conectado"
  
}else{
 
    document.getElementById("logado").innerText = "Usuario inalido"
}

}


function mudarCor(){
     let cor = document.getElementById("seletorCor").value;
    document.body.style.backgroundColor = cor
   
}

function aplicarcor(){
    let cor = document.getElementById("seletorCor").value;
    document.body.style.backgroundColor = cor
}



let contadora = 0;
function contarClick(){
    contadora++
    document.getElementById("contagem").innerText = contadora
}
