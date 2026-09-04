 function exemploConst() {
const x = 10;
console.log(x); //Isso causara um erro porque x foi declarada como const
if (true) {
    const y = 30;
    console.log(y); // 30
}
// console,log(y); // isso causara um erro porque y nao existe fora do bloco
}

exemploConst();