type Arg = number | string;

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

const pato: Pato = {
  nome: "Donald",
  // nadar: () => { return `Pato ${pato.nome} nadando` },
  voar: () => { return `Pato ${pato.nome} voando` },
};

console.log(pato.voar());
// console.log(pato.nadar());