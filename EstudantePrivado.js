class EstudantePrivado {
    //Declarar campos privados no topo da classe
    #nome
    #matricula
    #notas

    constructor(nome, matricula) {
        //Usar # para se referir aos campos privados
        this.#nome = nome
        this.#matricula = matricula
        this.#notas = []
    }

    //getters permitem apenas leitura
    get nome() {
        return this.#nome
    }

    //setter para o nome (permite alteração direta do valor)
    set nome(novoNome) {
        //poderia ter alguma validação para proteger melhor o atributo
        //esse setter simplesmente atribui o novo valor ao atributo privado
        this.#nome = novoNome
    }

    get matricula() {
        return this.#matricula
    }

    get notas() {
        return [...this.#notas]
        //retorna e copia o array usando Sintaxe de Espalhamento
        //"pega" todos os elementos de um array ou propriedade de um objet0
    }
    
    //métodos públicos que manipulam o array privado
    adicionarNota(nota) {
        if (nota >= 0 && nota <=10){
            this.#notas.push(nota)
        } else {
            console.log(`Erro: Nota ${nota} é inválida`)
        }
    }

    calcularMedia() {
        if (this.#notas.length === 0) return 0
        const soma = this.#notas.reduce((acc, n) => acc + n, 0)
        return (soma / this.#notas.length).toFixed(2)
    }
}

const joao = new EstudantePrivado("João Encapsulado Da Silva", "E2023001") 

console.log(joao.nome) //usa o getter (get nome)
joao.adicionarNota(9)
joao.adicionarNota(8)
joao.adicionarNota(-3) //mostra o erro

console.log(joao.notas) //usa o getter (get notas)
console.log("Média do João:", joao.calcularMedia())

console.log("\n--- Testando o Setter de Nome ---")
console.log(`Nome atual: ${joao.nome}`)

//a sintaxe é como se estivéssemos atribuindo a uma propriedade normal
joao.nome = "João da Silva Sauro"
console.log(`Nome novo: ${joao.nome}`)