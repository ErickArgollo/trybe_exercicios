/*
//1 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let valores of numbers) {
    console.log(valores)
}

//2
var numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for (let i = 0; i < numbers.length; i++) {

    resultado = resultado + numbers[i];
    
}

console.log(resultado);

//3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for (let i = 0; i < numbers.length; i++) {

    resultado = resultado + numbers[i];
}

let mediaArit = resultado / numbers.length;

console.log(mediaArit);

//4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for (let i = 0; i < numbers.length; i++) {

    resultado = resultado + numbers[i];
}

let mediaArit = resultado / numbers.length;

if(mediaArit > 20) {
    console.log("Media > 20")
}
else {
    console.log("Media <= 20")
}



//5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valor = 0;
for(var i = 0; i < numbers.length; i += 1) {
    if(valor < numbers[i]) {
        valor = numbers[i]
    }
}
console.log(valor);



//6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;


for (var i=0; i < numbers.length; i+= 1){
    if(numbers[i] % 2 != 0) {
        resultado += 1
    }
}
console.log(resultado);

//Caso queira saber quais são os números pares

let listaImpares = [];

for (var i=0; i < numbers.length; i+= 1){
    if(numbers[i] % 2 != 0) {
        listaImpares.push(numbers[i])

    }
}

console.log(listaImpares);



//7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0]; 
for (var i = 0; i < numbers.length; i += 1){
    if(menorValor > numbers [i]) {
        menorValor = numbers[i]
    }
}
console.log(menorValor)

*/

//8 e 9
let numbers = [];
for(var i=1; i < 26; i += 1) {
    numbers.push(i/2)
}
console.log(numbers)