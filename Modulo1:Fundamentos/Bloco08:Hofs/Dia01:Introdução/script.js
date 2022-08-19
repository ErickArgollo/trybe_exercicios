// const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }
  
//   const initialSum = sumFixAmount(15)
//   console.log(initialSum(5));
  


//   const repeat = (number, action) =>{
//     for(let i = 0; i <= number; i += 1){
//         action(i)
//     }
//   }

//   const checkImpar = (numero) =>{
//     if(numero % 2 === 0){
//         console.log(numero, 'é par')
//     }
//   }

//   repeat(5, checkImpar)

//teste

// const operations = (operation, n1, n2) => {
//     return operation(n1, n2);
// }

// const sum = (number1, number2) =>{
//     console.log( number1 + number2 )
// }

// const sub = (number1, number2) => {
//     console.log(number1 - number2)
// }

// //operations(sub, 1, 2)

// //Para fixar

// const wakeUp = () => 'Acordando!!';
// const goCoffe = () => 'Bora tomar Café!!';
// const goSleep = () => 'Partiu dormir!!';

// const doingThings = (things) => console.log(things())

// doingThings(goCoffe)

//AGORA A PRÁTICA 
//1
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  
  const employer = (nome, lastName) => {
    return {
        nome: nome,
        lastName: lastName,
    }
} 

const x = newEmployees(employer);

//console.log(x);

//2;
const sorteio = (num, callback) => {
const sortNum = Math.round(Math.random() * 5)

callback(num, sortNum) ? console.log(`Parabéns, vc ganhou, ${num}, ${sortNum}`) : console.log('Tente novamente') 

}


const verifyNum = (num, sortNum) => {
  if(num === sortNum){
    return true;
  }
}

//sorteio(5, verifyNum)

//3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const notas = (answers, student, callback) => {
let nota = 0;
return callback(answers, student, nota)
}

const compare = (arr1, arr2, nota) =>{
  const add = 1;
  const reduce = 0.5;
  
  for(let i = 0; i < arr1.length; i += 1){
    if(arr1[i] === arr2[i]){
      nota += add
    }
    else {
      if(arr2[i] !== 'N.A'){
        nota -= reduce
      }
    }
  }
  return nota;
}

console.log(notas(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], compare))