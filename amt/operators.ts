// --- typeof ------------------------------------------------------------------

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

let a = [1, 2, 3] as const;
// a.push(102); // error
// a[0] = 101; // error

// ------------------------

let valor: unknown = "Hello, TypeScript";
let tamanho: number = (valor as string).length;
console.log(tamanho);





// --- in ----------------------------------------------------------------------

// Exemplo 1: Verificação de Propriedade em Objetos
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

console.log(descreverVeiculo({ modelo: "Fusca", ano: 1976 }));
console.log(descreverVeiculo({ marca: "Caloi", marcha: 21 }));




// --- instanceof --------------------------------------------------------------

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

if (gatinho instanceof Gato) {
  gatinho.miar();
}

if (gatinho instanceof Felino) {
  console.log(`${gatinho.nome} é um felino.`);
}
