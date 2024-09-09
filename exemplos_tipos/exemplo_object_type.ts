// Anônimo
function colorir1 (dado: { cor: string, opacidade: number }) {
    console.log(dado.cor);
    console.log(dado.opacidade);
}

// interface
interface DadoCor {
    cor: String;
    opacidade: number;
}

function colorir2 (dado: DadoCor) {
    console.log(dado.cor);
    console.log(dado.opacidade);
}

// type
type DadoCorType = {
    cor: String;
    opacidade: number;
}

function colorir3 (dado: DadoCorType) {
    console.log(dado.cor);
    console.log(dado.opacidade);
}

var data = {
    cor: "red",
    opacidade: 0.6
};
colorir1(data);
colorir2(data);
colorir3(data);

var dadoCor: DadoCor = {
    cor: "green",
    opacidade: 1
};
colorir2(dadoCor);


var dataCorType: DadoCorType = {
    cor: "blue",
    opacidade: 0.4
};
colorir3(dataCorType);

// var array = [1, 2, 3, 4];
// console.log(array.toLowerCase());


// funciona arrays e objetos
function colorir_com_destructuring_assignment({ cor: string, opacidade: number}) {
    console.log(string);
    console.log(number);

//    console.log(cor);
//    console.log(opacidade);
}

colorir_com_destructuring_assignment(dataCorType);

// colorir_com_destructuring_assignment({cor : "orange"});
