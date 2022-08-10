// const factorial = (number) => {
    
//     let result = 1;

//     for(let i = 1; i <= number; i += 1){
//         result *= i
//     }

//     return result;
// }

// console.log(factorial(4))

//metodo recursivo

// const factorial = (number) => {
    
//     let result = number;

//     for(let i = number; i > 1; i -= 1){
//         result *= i-1
//     }

//     return result;
// }

// console.log(factorial(5))

//2


let string = 'Antônio foi no banheiro e não sabemos o que aconteceu';

console.log(string.split(' ').sort())
const retornaMaior = (string) => {

    let arr = string.split(' ');
    let maiorPalavra = arr[0];
    for(let i = 0; i < arr.length; i += 1){
        if(maiorPalavra.length < arr[i].length){
            maiorPalavra = arr[i];
        }
        
    }
    return maiorPalavra;
}

console.log(retornaMaior('Antônio foi no banheiro e não sabemos o que aconteceu'))