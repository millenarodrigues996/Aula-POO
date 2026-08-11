// ABSTRATOS
// Abstração e Classes Abstratas:
// Abstração é focar no essencial, escondendo a complexidade. Uma classe abstrata é a materialização desse conceito.
// É uma classe que não pode ser instanciada diretamente. Ela serve como um "contrato" ou um modelo (para ser extendida) 
// para suas subclasses. Geralmente utilizado em herança (as superclasses).
// Pode conter métodos abstratos (sem implementação), que devem ser implementados pelas subclasses.

// Classe abstrata só faz sentido em casos de herança, mas não quer dizer que toda superclasse seja abstrata, 
// pode ser que ela se relacione também de outras formas com outras classes.
// Ou seja, nem toda superclasse precisa ser abstrata. Mas classe abstrata sempre é usada em herança.
// Em JavaScript: Não existe a palavra-chave abstract. Simulamos esse comportamento, por exemplo, 
// lançando um erro no construtor da classe base se ela for instanciada diretamente.


//Exemplo Classe Abstrata
class RecursoDidatico {
    constructor(nome) {
    //Esta verificação impede que a classe seja instaciada diretamente
if (this.constructor === RecursoDidatico) {
    throw new Error("Classe abstrata 'RecursoDidático' não pode ser instanciada.")
}
this.nome = nome
}
  
//Método "abstrato"
   exibir() { //não pode ser instanciado aqui...
    throw new Error("Método 'exibir()' deve ser implementado pelas subclasses.")
   }
} 

class Livro extends RecursoDidatico { 
    constructor(nome, autor) {
        super(nome)
        this.autor = autor
    }

//implementação obrigatória do meétodo asbatrato
exibir() {
    console.log(`Livro: ${this.nome}, de ${this.autor}`)
}
}

//const recurso = new RecursoDidatico("Genérico") //Lança o erro!!

const livroPOO = new Livro("POO Descomplicada", "Dr. Código")
console.log(livroPOO)
livroPOO.exibir()