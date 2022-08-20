const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];

  students.forEach((element)=> element.grade < 60 ? element.approved = 'Recuperação' : element.approved = 'Aprovado');

//console.table(students);

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5 = numbers.find((number) =>  number % 5 === 0)

//PAra usar find, some, every, preciso atribuir eles a uma variável caso eu queira utilizar o valor para algo. /\

// numbers.find((number)=>{
//     if(number % 5 === 0){
//         firstMultipleOf5 = number
//     }

//     return firstMultipleOf5
// })

//console.log(firstMultipleOf5)

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiplica2 = (numero) =>{
    console.log(`${numero * 2}`)
}

//numeros.forEach(multiplica2)

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//     names[index] = name.toUpperCase()
// }

names.forEach((element, index) => names[index] = element.toUpperCase())
// console.log(names)


//PARA FIXAR \/

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  //emailListInData.forEach(showEmailList)


  const numberz = [19, 21, 30, 3, 45, 22, 15];

  const findDivisibleBy3And5 = (number) => {
        if(number % 3 === 0 && number % 5 === 0){
            return number
        }
}

const x = numberz.find(findDivisibleBy3And5);
// console.log(x)
  
  
const namesz = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
    if(name.length === 5){
        return name
    }
}

const y = namesz.find(findNameWithFiveLetters)
console.log(y)

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((element) => element.id === id )
  }
  
  console.log(findMusic('31031685'))




