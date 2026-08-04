//  Exercício extra (Encapsulamento)

//crie a classe contaBancaria com titular e saldo #privados

class contaBancaria {
    #titular
    #saldo

constructor (titular) {
    this.#titular = titular
    this.#saldo = 0
}

//GETTER TITULAR
 get titular() { 
        return this.#titular
    }

    set titular(novoTitular){ 
        //poderia ter alguma validação para proteger melhor o atributo
        //esse setter simplesmente atribui o novo valor ao atributo privado
        this.#titular = novoTitular
    }

//GETTER SALDO
get saldo() {
 return this.#saldo
 }

 //DEPOSITAR VALOR
depositar(valor) {
    if (valor > 0) { 
     this.#saldo += valor   
}
}

//SACAR VALOR
sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) { 
     this.#saldo -= valor
}
}
}

//TESTANDO

const maria = new contaBancaria("Maria das Contas")
console.log(maria)

console.log(maria.titular)
console.log(maria.saldo)

console.log("----ALTERANDO AS INFORMAÇÕES----")
maria.depositar(1500)
maria.sacar(250)
console.log(maria.saldo)

//ADICIONAR MENSAGENS