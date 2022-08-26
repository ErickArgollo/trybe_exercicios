// Dado uma matriz transforme em um array
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acc, current) => acc.concat(current))
  }
  // console.log(flatten())

  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // 2

  const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, current) => {
   acc += `${current.author.name}, `
   return acc
  },'').split('').slice(0, -2).join('')
}

 console.log(reduceNames())

// 3 Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult3 = 43;

function averageAge(array) {
  return array.reduce((acc, current) => {
    return acc += (current.releaseYear - current.author.birthYear) / array.length
     
  }, 0).toFixed(0);
  
}

// console.log(averageAge(books))

//4  Encontre o livro com o maior nome.
const expectedResult4 = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };

  function longestNamedBook(array) {
    return array.reduce((acc, current) =>{
        if(current.name.length > acc.name.length){
            acc = current.name
        }
        return acc
    })
  }
  
 //5 Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

 const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, current) => {
      for(let i = 0; i < current.length; i += 1){
        if(current[i] === 'A'){
            acc.A += 1
        }
        if(current[i] === 'a'){
            acc.a += 1
        }
      }
      return acc
    }, {
        A: 0,
        a: 0,
    })
  }
// console.log(containsA())


// Para o próximo exercício você deve criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students. Para resolver este exercício, além de reduce, será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const average = (array) => {
   return array.reduce((acc, current) => {
        return acc += current    
    })/array.length
}



function studentAverage(arrayEstudantes, arrayNotas) {
   return arrayEstudantes.map((element, index) => {
    return {
        name: element,
        average: average(arrayNotas[index])
    }
   })
  }

 // console.log(studentAverage(students, grades))