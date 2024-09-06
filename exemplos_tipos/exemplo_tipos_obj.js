var versao = "1.2.0";

// versao = "4.0.0";
var objExemplo = {
    nome: "Pedro",
    idade: 12,
    apresentacao: apresentar,
    versao: getVersao(),
    "": "string vazia",
    //!: "exclamacao"
    "!": "exclamacao"
};

function apresentar(nome, idade) {
    return `Olá meu nome é ${nome} e minha idade é ${idade}`;
}

versao = "4.0.0";

function getVersao() {
    console.log(versao);
    return "Versão " + versao;
}

console.log(objExemplo.apresentacao(objExemplo.nome, objExemplo.idade));
console.log(objExemplo.versao);

objExemplo.nome = "João";
versao = "1.2.1";

console.log(objExemplo.apresentacao(objExemplo.nome, objExemplo.idade));
console.log(objExemplo.versao);

console.log(objExemplo[""]);
//console.log(objExemplo."");
console.log(objExemplo["!"]);

// adicionando nova prop
objExemplo["novaProp"] = 12;
// objExemplo[novaProp] = 150; não funciona
