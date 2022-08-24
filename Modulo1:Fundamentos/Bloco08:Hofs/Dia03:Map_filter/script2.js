//Exercicios agora a prática
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
  
  // Adicione o código do exercício aqui:

  //1 Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

  const apresenta = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)

  //console.log(apresenta)

  //2 Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

  const idadeAuthor = books.map((element) => {
    const newObject = {};
    newObject.age = element.releaseYear - element.author.birthYear;
    newObject.author = element.author.name
    return newObject
  }).sort((a, b) => a.age - b.age)

  // console.log(idadeAuthor)

  //3  Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const category = books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')

//console.log(category)

 //4 Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

 const more60 = books.filter((element) =>{
    const date = new Date();
    const currentYear = date.getFullYear();
    return (currentYear - element.releaseYear > 60)
 }).sort((a, b) => a.releaseYear - b.releaseYear)

 // console.log(more60)

 //5 Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

 const names = books.filter((element) => {
   return element.genre === 'Ficção Científica' || element.genre === 'Fantasia' 
 }).map((element) => element.author.name).sort()

 // ou

 const names2 = category.map((element) => element.author.name).sort();

 //console.log(names2)

 //6 Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBook () {
    const date = new Date();
    const currentYear = date.getFullYear();
    const maisDe60 = books.filter((element) => currentYear - element.releaseYear > 60);
    return maisDe60.map((element) => element.name)
}
console.log(oldBook())

//ou

 const oldBooks = more60.map((element) => {
    return element.name
 }).reverse()

 
 // console.log(oldBooks)

//7 Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const ehAtolkien = books.find((element) => element.author.name[1] === '.' && element.author.name[4] === '.' && element.author.name[7] === '.').author.name;
console.log(ehAtolkien)