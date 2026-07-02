class Professor {
    nome;
    idFuncional;
    disciplinas;
    
    constructor(nome, idFuncional, disciplinas) {
        this.nome = nome;
        this.idFuncional = idFuncional;
        this.disciplinas = [];

    }
    atribuirDisciplinas(nomeDisciplina) {
        this.disciplinas.push(nomeDisciplina)
        console.log(`Disciplina ${nomeDisciplina} adicionada ao professor(a) ${this.nome}`)
    }
}

const profTiago = new Professor('Tiago', '12345')
const profJoana = new Professor('Joana', '348906')

console.log(profJoana)
console.log(profTiago)

profTiago.atribuirDisciplinas('JS POO')
profTiago.atribuirDisciplinas('Node JS')
profJoana.atribuirDisciplinas('Portugues')
profJoana.atribuirDisciplinas('Ingles')

console.log(profTiago)
console.log(profJoana)