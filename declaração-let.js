 function exemploLet() {
let x = 10;
if (true) {
    let x = 20; // mesma variavel x e redeclarada dentro do bloco
    console.log(x); // 20
}
console.log(x); // 20 (o valor foi alterado)
}

exemploLet();