const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //1

  const addTurn = (object, keyName, value) => object[keyName] = value;
  

  addTurn(lesson2, 'turno', 'noite');

//2

  const keyList = (object) => Object.keys(object);


//3
  
  const objectLength = (object) => Object.keys(object).length;

//4

  const valueList = (object) => Object.values(object);

//5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

//console.log(Object.keys(allLessons)[0] === 'lesson2')

//6
function studentsGradeSum (allLessons){
    let total = 0;
    for(const key in allLessons){
        total += allLessons[key].numeroEstudantes
    }
    //console.log(total)
}
studentsGradeSum(allLessons)

//7

const indiceValue = (objeto, indice, valor) => Object.values(objeto)[indice][valor]
 //console.log(indiceValue(allLessons, 0))
 
//8

//console.log(lesson1.numeroEstudantes)
//console.log(Object.entries(lesson1))
const checkEntries = (objeto ,chave, valor) => {
    const entries = Object.entries(objeto)
    let igual = false;
    for(let i = 0; i < entries.length; i += 1){
        if(entries[i][0] === chave && entries[i][1] === valor){
            igual = true;
        }
    }
    return igual;
}

console.log(checkEntries(lesson1, 'materia', 'Matemática'));
