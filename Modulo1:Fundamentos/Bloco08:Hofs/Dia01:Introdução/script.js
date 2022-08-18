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

const operations = (operation, n1, n2) => {
    return operation(n1, n2);
}

const sum = (number1, number2) =>{
    console.log( number1 + number2 )
}

const sub = (number1, number2) => {
    console.log(number1 - number2)
}

//operations(sub, 1, 2)

//Para fixar

const wakeUp = () => 'Acordando!!';
const goCoffe = () => 'Bora tomar Café!!';
const goSleep = () => 'Partiu dormir!!';

const doingThings = (things) => console.log(things())

doingThings(goCoffe)
