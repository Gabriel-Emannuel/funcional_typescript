function f1(g) {
    console.log(g.cor);
    console.log(g.volume);
}
f1({ cor: "red", volume: 0.5 });
f1({ cor: "red", volume: 0.5, marca: "abc" });
f1({ volume: 0.5, marca: "abc" });
var g1 = {
    marca: "abc",
    volume: 0.5
};
f1(g1);
