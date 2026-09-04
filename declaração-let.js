function exemploLet() {
    console.log(x)
let x = 10;
if (true) {
    let x = 20; // variavel diferente
    console.log(x); // 20
}
console.log(x); // 10
}

exemploLet();