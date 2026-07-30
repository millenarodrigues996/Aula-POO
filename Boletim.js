import { Avaliacao } from "./Avaliacao.js"

class Estudante {
    constructor(nome, matricula) {
        this.nome = nome
        this.matricula = matricula
    }
}

class Disciplina {
    constructor(nome, codigo) {
        this.nome = nome
        this.codigo = codigo
    }
}

class Boletim {
    constructor(estudante, disciplina) {
        this.estudante = estudante
        this.disciplina = disciplina
        this.avaliacoes = []
    }

    lancarAvaliacao(valor, peso) {
        const novaAvaliacao = new Avaliacao(valor, peso)
        this.avaliacoes.push(novaAvaliacao)
        console.log(`Avaliação com valor ${valor} e peso ${peso} lançada.`)
    }

    calcularMediaPonderada() {
        if (this.avaliacoes.length === 0) {
            return 0;
        }
        const somaValores = this.avaliacoes.reduce((acc, av) => acc + av.valor * av.peso, 0);
        const somaPesos = this.avaliacoes.reduce((acc, av) => acc + av.peso, 0);
        return (somaValores / somaPesos).toFixed(2);
    }
}

// Criar as entidades independentes
const estudanteJoao = new Estudante("João Silva", "2023001")
const disciplinaPOO = new Disciplina("Programação Orientada a Objetos", "POO101")

// Criar o objeto 'Todo', que conecta as entidades independentes
const boletimJoaoEmPOO = new Boletim(estudanteJoao, disciplinaPOO)

//Criar a parte apartir do Método no Todo
boletimJoaoEmPOO.lancarAvaliacao(10, 5)

// Exibe a Média
console.log(`Média ponderada: ${boletimJoaoEmPOO.calcularMediaPonderada()}`)
