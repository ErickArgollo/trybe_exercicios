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

//2

function palavraInvertida(string) {
    //conversão da string em array
    let conversão = [...string];
    return conversão.reverse()
}
console.log(palavraInvertida("testando"))

//teste de conversão array para string
let teste = ["oi", "eu", "sou"];
let convertion = teste.join('');
console.log(convertion)



//3
let array = ['java', 'javascript', 'python', 'html', 'css'];
//Pegando a maior palavra
//Definindo variavel para guardar a maior palavra
let maiorPalavra = array[0];
//iterando o array de strings
for(var i=0; i < array.length; i += 1){
    if(array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i]
    }
}
console.log(`A maior palavra é ${maiorPalavra}`)

//pegando a menor palavra
//Definindo a variavel para guardar a menor palavra
let menorPalavra = array[0];
//iterando o array de strings
for(var i=0; i < array.length; i += 1){
    if(array[i].length < menorPalavra.length) {
        menorPalavra = array[i]
    }   
}

console.log(`A menor palavra é ${menorPalavra}`)

//3.2 Colocando a questão 3 dentro de uma function
function maiorPalavra(array){
    let maiorPalavra = array[0];
    for(var i=0; i < array.length; i += 1){
        if(array[i].length > maiorPalavra.length) {
            maiorPalavra = array[i]
        }
    }
    return `A maior palavra é: "${maiorPalavra}"`;
}

console.log(maiorPalavra(["Oi", "essesssss", "teste", "javaaaa"]))
*/
//4






//bonus
//1
    
function imprimeQuadradoAst(n) {
    let qtdAstericos = [];
    for(var i=0; i < n; i+=1){
        qtdAstericos.push("*")
    }
    let linha = qtdAstericos.join('');
    for(var i=0; i < linha.length; i+=1){
        console.log(linha)
    }
    return(linha)
}

imprimeQuadradoAst(10);
