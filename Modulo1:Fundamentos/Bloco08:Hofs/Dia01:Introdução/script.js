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

console.log(x);