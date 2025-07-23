

let temperatura =  Number(prompt(`Qual a Temperatura?`))

if (temperatura >= 20){
    alert(`Esta calor com ${temperatura}° ☀️`);

}else if( temperatura <20 && temperatura >=1){
    alert(`Está frio com ${temperatura}° 🥶`);
    
}else {
    alert(`Esta congelante com ${temperatura}° 🧊🧊`)
}