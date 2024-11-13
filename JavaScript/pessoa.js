const pessoa = {
    nome: "Ana",
    idade: 30,
    saudacao: function(){
         return `Olá meu nome é ${this.nome}, e tenho ${this.idade} anos.`; // usar a crase

    }
};

console.log(pessoa.nome); //Acessa a propriedade "nome"
console.log(pessoa.saudacao()); // Executa o método "saudação"
