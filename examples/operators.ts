// Operadores typeof, as, in, instanceof

// --- typeof ------------------------------------------------------------------
// Podemos usar typeof para saber o tipo de um dado
console.log(typeof "sou uma string" === "string")
console.log(typeof 123 === "number")
console.log(typeof 123n === "bigint")
console.log(typeof true === "boolean")
console.log(typeof Symbol("key") === "symbol")
console.log(typeof undefined === "undefined")
console.log(typeof (() => { }) === "function")
console.log(typeof {} === "object")
console.log(Array.isArray([1, 2, 3]))



// --- as ----------------------------------------------------------------------

// Podemos usar o operador "as" para converter um tipo em outro
let valor: unknown = "Hello, TypeScript";
let tamanho: number = (valor as string).length;
console.log(tamanho);

// Inclusive definir uma variável como constante
let a = [1, 2, 3] as const;
// a.push(102); // error
// a[0] = 101; // error



// --- in ----------------------------------------------------------------------

// Podemos usar o operador "in" para verificação de propriedade em objetos
const homem = { nome: "João", idade: 25 };

if ("nome" in homem) {
  console.log("A propriedade 'nome' existe em pessoa.");
} else {
  console.log("A propriedade 'nome' não existe em pessoa.");
}


// Exemplo 2: Uso em Type Guards
type Carro = {
  modelo: string;
  ano: number;
};

type Bicicleta = {
  marca: string;
  marcha: number;
};

function descreverVeiculo(transporte: Carro | Bicicleta): string {
  if ("modelo" in transporte) {
    return `Carro: ${transporte.modelo}, Ano: ${transporte.ano}`;
  } else {
    return `Bicicleta: ${transporte.marca}, Marcha: ${transporte.marcha}`;
  }
}

// Como a função `descreverVeiculo` recebe um objeto do tipo `Carro` ou `Bicicleta`.
// Podemos passar tanto um objeto do tipo Carro, quanto do tipo Bicicleta para a função.
// A função utiliza `in` para verificar qual o tipo do objeto.
console.log(descreverVeiculo({ modelo: "Fusca", ano: 1976 }));
console.log(descreverVeiculo({ marca: "Caloi", marcha: 21 }));



// --- instanceof --------------------------------------------------------------
// Podemos usar o instanceof para verificar se um objeto pertence a uma classe

class Felino {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

class Gato extends Felino {
  miar() {
    console.log("Miau!");
  }
}

class Jaguatirica extends Felino {
  correr() {
    console.log("Correndo!");
  }
}

const gatinho = new Gato("Garfield");

// O instanceof pode ser usado para verificar se um objeto pertence a uma classe filha
if (gatinho instanceof Gato) {
  gatinho.miar();
}

// O instanceof pode ser usado para verificar se um objeto pertence a uma classe pai
if (gatinho instanceof Felino) {
  console.log(`${gatinho.nome} é um felino.`);
}
