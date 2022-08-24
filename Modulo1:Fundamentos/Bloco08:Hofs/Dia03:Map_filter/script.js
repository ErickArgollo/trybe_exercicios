const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];


const teste = (array1, array2) => {
  const x =  array1.map((elemento, index) => {
       return {
        [elemento]: array2[index]
       } 
    } )
    return x
}

const k = teste(products, prices)
//k.forEach((element) => console.log(element))

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

// Retornando um array com nome e sobrenome
  const nomeSobrenome = estudantes.filter((element) => element.turno === 'Manhã').map((element) => `${element.nome} ${element.sobrenome}`)
  //console.log(nomeSobrenome)

// Retornando um array contendo as matérias

// const materias = estudantes.slice(0, 4).map((element, index) => {
//     const arrayMaterias = element.materias;
//     if(index < arrayMaterias.length){
//         return `${arrayMaterias[index].name} e nota: ${arrayMaterias[index].nota}` 
//     }
    
// })  

// const materias = estudantes.map((element, index) => {
//     const arrayMaterias = element.materias;
//     if(index < arrayMaterias.length){
//         return  arrayMaterias[index].name
//     }
//     if(index >= arrayMaterias.length){
//        return 
//     }
    
    
// })  

const faltas = [1, 2, 3, 4, 5, 6];
const w = [...faltas]
const adicionaFaltas = estudantes.map((element, index) => {
    return {
      Aluno: element.nome,
      Faltas: faltas[index]
    }
     
})

// console.log(adicionaFaltas)
function verificaSituacao(array){

    const aprovadoReprovado = array.map((element) => {
        const find = element.materias.find((element) => element.nota < 60);
        if(!find){
    
            const materias1 = {...element, situacao: 'Reprovado'}
            
            return materias1
        }
        else{
    
            const materias1 = {...element, situacao: 'Aprovado'}
            return materias1
        }
    })
    return aprovadoReprovado
}

console.log(verificaSituacao(estudantes))





 const findStudent = (name, students) => {
    for (let index = 0; index < students.length; index += 1) {
      if (students[index].nome === name) {
        return students[index];
      }
    }
  };
  
  const reportStatus = (name, students) => {
    const getStudent = findStudent(name, students);
    const report = [];
    for (let index = 0; index < getStudent.materias.length; index += 1) {
      if (getStudent.materias[index].nota >= 60) {
        report.push(`${getStudent.materias[index].name} Aprovado`);
      } else {
        report.push(`${getStudent.materias[index].name} Reprovado`);
      }
    }
    return report;
  };
  
  //console.log(reportStatus('Natalia', estudantes));


  const reportStatus2 = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
      `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  
  // console.log(reportStatus2('Natalia', estudantes));

const teste2 = {
    nome: 'Erick',
    nota: '5.5',
}

function teste4 (parametro) {
    const ajustado = {...parametro, faltas: 25}
    console.log(ajustado)
}

// teste4(teste2)