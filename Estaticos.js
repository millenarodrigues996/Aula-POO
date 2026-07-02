class Matematica { 
    //não precisa do construtor
    static PI = 3.14159; //Atributo estático

    static calcularAreaCirculo(raio) {
        return Matematica.PI * raio * raio;
    }
}
//Não precisa usar instância para usar!
console.log(Matematica.PI); //3.14159
console.log(Matematica.calcularAreaCirculo(10)) //314.159

//MÉTODO ESTÁTICO
class Utilirarios {
    //não precisa ser atributo
    static gerarIdAleatorio() {
        return Math.floor(Math.random() * 1000);
    }
}

const id = Utilirarios.gerarIdAleatorio();
console.log(id) //número aleatório entre 0 e 999