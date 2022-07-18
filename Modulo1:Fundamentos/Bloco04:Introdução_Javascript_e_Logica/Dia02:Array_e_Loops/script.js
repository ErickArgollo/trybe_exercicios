/*
//1 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let valores of numbers) {
    console.log(valores)
}
*/
//2
var numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for (let i = 0; i < numbers.length; i++) {

    resultado = resultado + numbers[i];
    
}

console.log(resultado);
