type Garrafa = {
    cor?: string;
    volume: number;
    //[chave: string]: any
};

function f1(g: Garrafa) {
    console.log(g.cor);
    console.log(g.volume);
}

f1({ cor: "red", volume: 0.5 });
f1({ cor: "red", volume: 0.5, marca: "abc" });
f1({ volume: 0.5, marca: "abc" });

let g1 = {
    marca: "abc",
    volume: 0.5
}; 
f1(g1);
