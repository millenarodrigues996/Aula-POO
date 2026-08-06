//EXERCICIO HERANÇA E POLIMORFISMO

class Pessoa {
    #cpf; // Atributo privado
    constructor(nome, dataNascimento, cpf) {
        this.nome = nome; // Atributo público
        this.dataNascimento = dataNascimento;
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }
}
   
//SUBCLASSE FUNCIONARIO
 class Funcionario extends Pessoa {
    #salario
    constructor(nome, dataNascimento, cpf, cargo, salario) {
        // Chama o construtor da classe Pessoa
        super(nome, dataNascimento, cpf)
       // Adiciona os atributos específicos de Funcionário
       this.cargo = cargo
       this.#salario = salario
    }
    get salario() { return this.#salario }


//ALTERAÇÃO DE CARGO
promover(novoCargo, novoSalario) {
    this.cargo = novoCargo
    this.#salario = novoSalario
    console.log(`${this.nome} foi promovido(a)...`)
}
 }
