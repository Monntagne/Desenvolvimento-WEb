let pessoa = {
    Nome:"Vinicius",
    Idade:25,
    Calçado: 44,
    Olhos: "Castanho",
    Altura: 1.98 + "cm",
    Peso: 98,
    Formação: "Técnico em Segurança do Trabalho",
    Ano: 2023,


    falar:function(){
    console.log("Olá, meu nome é " + this.Nome +", sou "+this.Formação +" desde " +this.Ano)
    }
};

pessoa.falar();







/*
console.log(pessoa)
console.log(pessoa.Nome)
console.log(pessoa.Idade)
console.log(pessoa.Olhos)
console.log(pessoa.Altura)
console.log(pessoa.Formação)
console.log(pessoa.Ano)
*/
