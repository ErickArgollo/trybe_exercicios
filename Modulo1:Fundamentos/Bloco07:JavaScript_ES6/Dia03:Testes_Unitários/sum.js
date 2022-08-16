const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

const sub = (a, b) => a - b;

const myRemove = (array, item) => {
  let newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== item) {
      newArr.push(array[i])
    }
  }
  return newArr;
}

const fizzBuzz = (num) => {


  if (typeof num !== 'number') {
    return false;
  }

  if (num % 3 == 0 && num % 5 === 0) {
    return 'fizzBuzz';
  }
  else if (num % 3 === 0) {
    return 'buzz';
  }
  else if (num % 5 === 0) {
    return 'fizz';
  }

  return num;
}

function encode(string) {
  let arrayString = string.split('');
  let array = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < arrayString.length; j += 1) {
      if (arrayString[j] === array[i]) {
        arrayString[j] = i + 1;
      }
    }
  }
  return arrayString.join('');
}

function decode(string) {
  let arrayString = string.split('');
  console.log(arrayString)
  const array = [1, 2, 3, 4, 5];
  const vogals = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < arrayString.length; i += 1) {
    for (let j = 0; j < arrayString.length; j += 1) {
      if (arrayString[j] == array[i]) {
        arrayString[j] = vogals[i];

      }
    }
  }
  return arrayString.join('');
}

function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  let arrayOrdem = array.sort();

  for (let i = 0; i < arrayOrdem.length; i += 1) {
    let objetoTechList = {
      tech: '',
      name: nome,
    };
    objetoTechList.tech = arrayOrdem[i];

    arrayOrdem[i] = objetoTechList;
  }
  return array;
}

// Bônus
// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
function searchEmployee(id, detail) {
  const keys = Object.keys(professionalBoard)
  let detailExists = false;
  let idExists = false;

  for (let i = 0; i < keys.length; i += 1) {
    if (professionalBoard[i].id === id && detailExists === true) {
      idExists = true;
      return professionalBoard[i][detail]
    }

    for (let j = 0; j < 4; j += 1) {
      if (Object.keys(professionalBoard[i])[j] === detail)
        detailExists = true;
    }
  }
  if(detailExists === false){
    return 'Dados inválidos'
  }
  if(idExists === false){
    throw new Error('ID inválido')
  }
}

//console.log(searchEmployee('9852-2-2', 'specialities'))


module.exports = { sum, sub, myRemove, fizzBuzz, encode, techList, searchEmployee }

const search = (id, detail) => {
  let employee = '';

  for (let index = 0; index < professionalBoard.length; index += 1) {
    const currentEmployee = professionalBoard[index];

    if (currentEmployee.id === id) {
      employee = currentEmployee;
    }
  }
  if(!employee){

  }

  if(!employee[detail])
  console.log(!employee)
  return employee[detail]
}

search('9852-2-2')