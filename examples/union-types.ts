// Union type (Tipo1 | Tipo2)

// Union type para especificar que um valor pode ser do tipo number ou string
type Arg = number | string;

// Com union type, uma função pode ser chamada para receber um valor do tipo number ou string
function formatarValor(valor: Arg): string {
  if (typeof valor === "number") {
    return `Número: ${valor}`;
  } else {
    return `Texto: ${valor}`;
  }
}

console.log(formatarValor(42));
console.log(formatarValor("Olá"));

// -----------------------------------------------------------------------------
// Interseção de Tipos de União
type Animal = {
  nome: string;
};

type Ave = {
  voar: () => string;
};

type Peixe = {
  nadar: () => string;
};


type Pato = Animal & (Ave | Peixe);

// O pato deve escolher se vai implementar a função de voar ou nadar, ele deve ser uma ave ou um peixe
const pato: Pato = {
  nome: "Donald",
  // nadar: () => { return `Pato ${pato.nome} nadando` },
  voar: () => { return `Pato ${pato.nome} voando` },
};

console.log(pato.voar());