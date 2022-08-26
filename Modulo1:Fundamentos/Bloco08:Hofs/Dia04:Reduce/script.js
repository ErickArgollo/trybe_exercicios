const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, atual) => {
    return acc < atual ? acc = atual : atual
}, 0)

console.log(sum)

const arrNames = [
    'Alexandre',
    'Adriana',
    'Matheus',
    'Adriana',
    'Marlene',
    'Matheus'
]

const repete = arrNames.reduce((acc, valor) => {
    if(acc[valor] === undefined){
        acc[valor] = 1
    }
    else {
        acc[valor] += 1
    }
 
    return acc

}, {})

//console.log(repete)

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
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];


  const materias = estudantes.map((element) => {
    return {
        nome: element.nome,
        materia: element.materias.reduce((acc, materia) => {

            if(materia.nota > acc.nota){
                acc = materia
            }
            return acc;
        }).name
    }
  })
      console.log(materias);


















  const materias2 = estudantes.map((element) => {
    return {
        nome: element.nome,
        materia: element.materias.reduce((acc, materia) => {
            if(acc.nota > materia.nota){
                return acc;
            }
            else{
                return materia;
            }
        })
    }
  })

  //console.log(materias2)