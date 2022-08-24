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
        birthYear: 1921,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1921,
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
  
  // Adicione o código do exercício aqui:
  //1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
 const x  = books.find((element) => element.author.birthYear === 1947).author.name
 //console.log(x);

  //2 Retorne o nome do livro de menor nome.

  function smallerName(){
      let smallestName = books[0].name
    books.forEach(element => {
        if(element.name.length < smallestName.length){
            smallestName = element.name
        }
    })
    return smallestName
  }

  //console.log(smallerName())
//3 Encontre o primeiro livro cujo nome possui 26 caracteres.


//   const expectedResult = {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   };
  
  function getNamedBook() {
   return books.find((element) => element.name.length === 26)
  }

  //console.log(getNamedBook())

  //4 Ordene os livros por data de lançamento em ordem decrescente.

  function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => b.releaseYear - a.releaseYear)
  }

  //console.log(booksOrderedByReleaseYearDesc())

  //5 Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

  function everyoneWasBornOnSecXX() {
   return books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear <= 2000)
  }
  
  //console.log(everyoneWasBornOnSecXX())

  //6 Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

  function someBookWasReleaseOnThe80s() {
    return books.some((element) => element.releaseYear > 1980)
  }

//console.log(someBookWasReleaseOnThe80s())

  //7 Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
 
 
  function authorUnique() {

   const x = books.some((element, index, array) => {
        for(let i = 0; i < array.length; i += 1){
            if(i !== index){
                 element.author.birthYear !== array[i].author.birthYear
            }
        }
    })
    return x
  }
 //console.log(authorUnique());
 
 
 
 
 
  //teste comparação entre array
  const arr = [1, 2, 3, 4];
 
  const z = arr.some((element, index, array) => {
    for(let i = 0; i < array.length; i += 1){
        if(i  !== index){
        return element === array[i]
        }
    }
  })


  //console.log(z);

  //teste

  