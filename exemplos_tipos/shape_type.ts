type Dicionario = {
    [index: string]: number
};

var d1: Dicionario = {};
d1["abc"] = 100;

console.log(d1);



interface Animal {
    name: string;
}

interface Cachorro extends Animal {
    raca: string;
}

interface DicionarioAnimal {
    [index: string]: Animal;
    [index: number]: Cachorro;
};
