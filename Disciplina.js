//AGREGAÇÃO
// Criar a classe Disciplina e fazer ela se relacionar com Professor e Estudante.

// Para usar Professor e Estudante aqui é necessário Exportar lá (Classes) e Importar aqui:
//import { Professor } from './Professor.js'
//import { Estudante } from './Estudante.js'

export class Disciplina {
    constructor(nome, codigo, cargaHoraria) {
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHoraria = cargaHoraria;
        this.professor = null; // Agregação: A disciplina "tem um" professor
        this.estudantesMatriculados = []; // Agregação: A disciplina "tem" estudantes
    }

    // Método para associar um objeto Professor
    atribuirProfessor(professor) {
        if (professor instanceof Professor) { // Boa prática: verificar o tipo
            this.professor = professor;
            console.log(`Professor ${professor.nome} atribuído à disciplina ${this.nome}.`);
        } else {
            console.log("Erro: O objeto fornecido não é uma instância de Professor.");
        }
    }

    // Método para matricular um objeto Estudante
    matricularEstudante(estudante) {
        if (estudante instanceof Estudante) {
            this.estudantesMatriculados.push(estudante);
            console.log(`Estudante ${estudante.nome} matriculado em ${this.nome}.`);
        } else {
            console.log("Erro: O objeto fornecido não é uma instância de Estudante.");
        }
    }

    listarEstudantes() {
        console.log(`\n--- Estudantes matriculados em ${this.nome} ---`);
        this.estudantesMatriculados.forEach(estudante => {
            console.log(`- ${estudante.nome} (Matrícula: ${estudante.matricula})`);
        });
        console.log("----------------------------------------------\n");
    }
}//fim classe

/*
// Instanciando e conectando tudo
const profTiago = new Professor('Tiago', '1234567')
const profSegato = new Professor('Segato', '0987654')

const joao = new Estudante("João Silva", "2023001", "2005-03-15");
const maria = new Estudante("Maria Souza", "2023002", "2006-07-20");
const pedro = new Estudante("Pedro Alves", "2023003", "2004-11-10");

const logica = new Disciplina("Lógica JS", "LOG101", 24);
const jspoo = new Disciplina("Javascript POO", "POO202", 24);

//console.log(logica)// Já foi criado a disciplina, mas sem professor, nem estudante.

// Realizando as associações
logica.atribuirProfessor(profTiago);
jspoo.atribuirProfessor(profSegato);

logica.matricularEstudante(joao);
logica.matricularEstudante(maria);

jspoo.matricularEstudante(maria);
jspoo.matricularEstudante(pedro);

//console.log(logica) //Exibe um array de objetos estudantes nessa disciplina

// Verificando as interações
console.log(`A disciplina de ${logica.nome} é lecionada por ${logica.professor.nome}`);
logica.listarEstudantes();
jspoo.listarEstudantes();
*/