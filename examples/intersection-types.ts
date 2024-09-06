// Interseção de tipos (Tipo1 & Tipo2)

// Interseção de tipos

interface Endereco {
  rua: string;
  cidade: string;
  estado: string;
  logEndereco: () => void
};

interface Contato {
  rua: string; // string vs number
  email: string;
  telefone?: number;
  logContato: () => void
};

// Intersecão de tipos pode unir os tipos
type PessoaComContato = Endereco & Contato;

// Pessoa vai ter as propriedades de Endereco e Contato
const pessoa: PessoaComContato = {
  rua: "Rua A",
  cidade: "São Paulo",
  estado: "SP",
  email: "exemplo@email.com",
  telefone: 40028922,
  logEndereco: () => console.log("Logradouro da pessoa: ", pessoa.rua),
  logContato: () => console.log("Email da pessoa: ", pessoa.email)
};

pessoa.logEndereco()