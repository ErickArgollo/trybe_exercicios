/*
let max = 100;
let sum = 0;
for (var i=1; i <= 100; i ++){
    sum += i
}
console.log(sum)


let value = 100;
let contador = 0;
while (value > 0){
    value -= 5
    contador += 1
    console.log(`Foi executado ${contador} vez`)
}
console.log(value)


//Inicio Agora a prática
//1

function fatorial(n) {

    let resultado = 1;
    for(n; n>= 1; n = n -1){
        resultado = resultado * n
    }
    return resultado;
}

console.log(fatorial(10))
*/
//2

function palavraInvertida(string) {
    //conversão da string em array
    let conversão = [...string];
    return conversão.reverse()
}
console.log(palavraInvertida("testando"))