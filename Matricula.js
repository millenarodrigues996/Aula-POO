import { Nota } from "./Nota.js"

export class Estudante {
    constructor(nome, matricula) {
        this.nome = nome
        this.matricula = matricula
    }
}

export class Disciplina {
    constructor(nome, codigo) {
        this.nome = nome
        this.codigo = codigo
    }
}

export class Matricula {
    constructor(estudante, disciplina) {
        this.estudante = estudante
        this.disciplina = disciplina
        this.dataMatricula = new Date()
        this.notas = []
    }

    adicionarNota(valor, descricao) {
        const novaNota = new Nota(valor, descricao)
        this.notas.push(novaNota)
        console.log(`Nota "${descricao}" (${valor}) adicionada para ${this.estudante.nome} em ${this.disciplina.nome}.`)
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0
        }
        const somaDasNotas = this.notas.reduce((acc, nota) => acc + nota.valor, 0)
        return (somaDasNotas / this.notas.length).toFixed(2)
    }
}

// Criar as entidades independentes
const estudanteJoao = new Estudante("João Silva", "2023001")
const disciplinaPOO = new Disciplina("Programação Orientada a Objetos", "POO101")

// Criar o objeto 'Todo'
const matriculaJoaoEmPOO = new Matricula(estudanteJoao, disciplinaPOO)

// Adicionar notas
matriculaJoaoEmPOO.adicionarNota(8.5, "Prova 1")
matriculaJoaoEmPOO.adicionarNota(9.0, "Trabalho Final")

console.log("\n--- Detalhes da Matrícula ---")
console.log(matriculaJoaoEmPOO)
console.log(`Média final de ${estudanteJoao.nome}: ${matriculaJoaoEmPOO.calcularMedia()}`)

