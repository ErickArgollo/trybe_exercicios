/*
//teste para fixar
let pessoa = {
    nome: 'Erick',
    ultimoNome: 'Argollo',
    idade: '22',
    series: ['blacklist', 'sherlock']
    
}

//Puxando um elemento 
//forma 1 
console.log(`Eu sou ${pessoa.nome + ' ' + pessoa.ultimoNome} tenho ${pessoa.idade} anos e gosto de assistir essas series ${pessoa.series}`)
//forma 2
console.log(`Eu sou ${pessoa['nome'] + ' ' + pessoa['ultimoNome']}`)

//A ultima forma é mais utilizada para acrescentar ou alterar valores, mas consigo fazer com a primeira também
//acrescentando valor na forma 2
 pessoa['fullName'] = `${pessoa['nome'] + " " + pessoa['ultimoNome']}`;
console.log(pessoa)

//trocando valor na forma 2
pessoa['idade'] = 23;
console.log(pessoa)

//trocando valor na forma 1
pessoa.idade = 24;
console.log(pessoa)

//Adicionando um objeto dentro de outro objeto
pessoa['nascimento'] = {
    cidade: 'Salvador',
    estado: 'Bahia'
}
console.log(pessoa)

//Acessando um objeto dentro de outro
console.log(pessoa['nascimento']['cidade'] + pessoa['nascimento']['estado'])

//Objeto com nomenclatura kebab case (valor nomeado entre aspas e com - indicando fim da palavra), se meu objeto tem essa nomenclatura, devo coloca-lo entre aspas, e ao chama-lo ou modifica-lo devo usar a forma 2, utilizando chaves.
pessoa['teste-1'] = 'testando'
console.log(pessoa)

//acessando o kebab case
console.log(pessoa['teste-1'])
//dessa forma n funcionaria
//console.log(pessoa.'teste-1')

//Acessando uma posição de um array, que está dentro de um objeto
console.log(pessoa['series'][1])

//Acessando um objeto dentro de um array

let Pessoas = [
    {
        nome: 'Erick',
        lastname: 'Argollo',
    },

    {
        nome: 'Pedro',
        lastname: 'Silva',
    },
]

//Acessando todo o objeto forma 1
let primeiraPessoa = Pessoas[0];

console.log(primeiraPessoa)

//Forma 2
console.log(Pessoas[0]);

//Acessando um valor dentro de um objeto
console.log(primeiraPessoa['nome'])

// Exéricio 1 para fixar 
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

console.log(`A jogadora ${player['name']} tem ${player['age']} anos de idade`)

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(`A jogadora ${player['name']} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes`)
console.log(`A jogadora possui ${player['medals']['golden']} medalhas de ouro e ${player.medals.silver} de prata`)

// Exercicio 2 para fixar (for/in)

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let i in names){
    console.log(`Olá ${names[i]}`)
  }
 // Exercicio 3 para fixar
 let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }; 

  for(let i in car){
    console.log(`${i}: ${car[i]}`)
  }
*/

 function name(string1){
    return string1;
 }

 function lastName(string){
    return string;
 }

 function saudacao(){
    return `Olá, ${name('Erick')} ${lastName('Argollo')}!`;
 }

 saudacao();

 