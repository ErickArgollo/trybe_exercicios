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

//console.log(checkEntries(lesson1, 'materia', 'Matemática'));

//bonus 1
function totalEstudantes(materia){
    const key = Object.keys(allLessons);
    let totalEstudantes = 0;
    for(let i = 0; i < key.length; i += 1){
        if(allLessons[key[i]].materia === materia){
            
         totalEstudantes += allLessons[key[i]].numeroEstudantes

        }
    }
    return totalEstudantes;
}

//bonus 2


function takeTeacher(professor){
    const key = Object.keys(allLessons);
    for(let i = 0; i < key.length; i += 1){
        if(allLessons[key[i]].professor === professor){
            return allLessons[key[i]].professor
        }
    }
}


function takeSubjects(materias){
    const key = Object.keys(allLessons);
    const arr = [];
    for(let i = 0; i < key.length; i += 1){
        if(allLessons[key[i]].materia === materias){
            arr.push(allLessons[key[i]].materia)
        }
    }
    return arr;
}


function createReport(professor){
    const newObject = {
        Professor: takeTeacher(professor), // essa função é para caso o nome não exista, ele consiga entrar no else e levar a mensagem de erro;
        Aulas: '',
        Estudantes: '',
    }

    if(newObject.Professor === 'Maria Clara'){
        newObject.Aulas = takeSubjects('Matemática')
        newObject.Estudantes = totalEstudantes('Matemática')
        return newObject
    }
    if(newObject.Professor === 'Carlos'){
        newObject.Aulas = takeSubjects('História')
        newObject.Estudantes = totalEstudantes('História')
        return newObject
    }
    else{
        return console.log('Digite um nome válido!')
    }


}

//console.log(createReport('Maria Clara'))



function pegaInfo(nome){
    const value = Object.values(allLessons);
    let newArr = [];
    let students = 0;

    for(let i = 0; i < value.length; i += 1){
        if(value[i].professor === nome){
            newArr.push(value[i].materia)
            students += value[i].numeroEstudantes
        }
    }
    return { Aulas: newArr, Alunos: students }
}


function createReport(nome){
    let newObject = {};
    newObject.professor = nome;
    Object.assign(newObject, pegaInfo(nome))
    return newObject;
}



console.log(createReport('Maria Clara'))