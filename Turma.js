/*
EXRCÍCIO
Criar uma nova classe Turma.
A Turma deve ter ano, semestre e um codigoTurma.
A Turma deve ter uma lista de disciplinas(agregação).
Crie um método adicionarDisciplina(disciplina) na classe Turma.
Instancie uma turma "2026/1" e adicione os objetos Lógica JS e Javascript POO
(criados anteriormente) a ela.
*/

import { Disciplina } from './Disciplina.js'

class Turma {
    constructor(ano, semestre, codigoTurma) {
        this.ano = ano
        this.semestre = semestre
        this.codigoTurma = codigoTurma
        this.disciplinas = [] // Agregação: uma lista para guardar objetos Disciplina
    }

    adicionarDisciplina(disciplina) {
        if (disciplina instanceof Disciplina) {
            this.disciplinas.push(disciplina);
            console.log(`Disciplina "${disciplina.nome}" adicionada à turma ${this.codigoTurma}.`);
        } else {
            console.error("Erro: Só é possível adicionar objetos da classe Disciplina.");
        }
    }

    listarDisciplinas() {
        console.log(`\n- Disciplinas da Turma ${this.codigoTurma} (${this.ano}/${this.semestre}) -`);
        this.disciplinas.forEach(disc => {
            console.log(`- ${disc.nome} (Código: ${disc.codigo})`);
        });
        console.log("---------------------------------------------------\n");
    }
}

// Criando os objetos de disciplina 
const logica = new Disciplina("Lógica JS", "LOG101", 24);
const jspoo = new Disciplina("Javascript POO", "POO202", 24);

// Instanciando uma turma "2026/1"
const turma2026_1 = new Turma(2026, 1, "T1-2026");
console.log(turma2026_1)


// Adicionando as disciplinas a ela.
turma2026_1.adicionarDisciplina(logica);
turma2026_1.adicionarDisciplina(jspoo);

// Verificação do resultado - Objeto Turma
console.log(turma2026_1);

// Verificando com o método de listagem
turma2026_1.listarDisciplinas();


export class Nota {
    
}