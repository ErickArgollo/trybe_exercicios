/*
// Parte I - Objetos e for/in
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

 //1 
 //console.log(`Bem vindo(a), ${info['personagem']}!`) 

 //2
 info['recorrente'] = 'Sim';
 //console.log(info)

 //3
 for(let key in info){
    //console.log(key)
 }

 //4

 for(let value in info){
    //console.log(info[value])
 }

 //5

 let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

 let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for(let key in info){
    if(info[key] != info['recorrente']){
    console.log(`${info[key]} e ${info2[key]}`)
    }
    else{
        console.log('Ambos recorrentes')
    }
  }

//6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },

      
    ],
  };
  console.log(`O livro favorito de Julia ${leitor['nome']} ${leitor['sobrenome']} se chama ${leitor['livrosFavoritos'][0]['titulo']}.`)

 //7
 leitor['livrosFavoritos'][1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
  
  //8
  console.log(`${leitor['nome']} tem ${leitor['livrosFavoritos'].length} livros favoritos`)

 
//Parte II - Funções

//1
function ehPalindromo(a){
    let array = [...a];
    let newArray = [...a];
    
    let teste = newArray.reverse()
      
    
    if(array.join() === teste.join()){     
        console.log(true)
    }
    else{
        
        console.log(false)
    }
    
}

ehPalindromo('arara')

//2 retornar indice de maior valor

function maiorValor(){


let array = [2, 3, 6, 7, 10, 1, 11, 50, 40, 100, 12, 45];
let maior = array[0];
let indice = 0;
  
for(let i = 0; i < array.length; i += 1){
  if(array[i] > maior) {
    maior = array[i]
  }
 for(let i = 0; i < array.length; i+=1){
  if(array[i] === maior){
    indice =  i;
  }
 } 
}
return indice;
}

console.log(maiorValor())
//3 retornar indice de menor valor
function menorValor(){
  let array = [2, 4, 6, 7, 10, 0, -3, 8, -4, 15, 23, -5];
  let menor = array[0];
  position = 0;
  for(let i=0; i < array.length; i += 1){
    if(array[i] < menor) {
        menor = array[i]
      }
    }
    for(let i=0; i < array.length; i += 1){
      if(array[i] === menor)
    position = i
  }
  return position;
}
console.log(menorValor())

//4 retorna o nome com maior quantidade de caracteres
function retornaMaior(){
  
  let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
  let maiornome = array[0];
  for(let i=0; i < array.length; i+=1){
    if(array[i].length > maiornome.[i];
    }
  }
length){
      maiornome = array  return maiornome;
}
console.log(retornaMaior())
//5 retornar o inteiro que mais se repete ****************************************************

function maiorRepete(){
  
  let array = [2, 3, 2, 5, 8, 2, 3, 3];
  let array2 = [0];
  
  for(let i = 0; i < array.length; i+=1){
        
    let contadorRepeticao = 0;
    
    for(let k = 0; k < array.length; k += 1){
      
      if(array[k] == array[i]){
        contadorRepeticao += 1;
      }
      
    }
    
    if(contadorRepeticao > array2[0]){
      
      array2=[array[i],contadorRepeticao]
    }
   
  }
  
  return array2[0];
  
}

console.log(maiorRepete())

//6
function somatorio(a){
  let array = [];
  let total = 0;
  for(let i = 1; i <= a; i+=1){
    array.push(i)
  }
  for(let j = 0; j < array.length; j +=1){
    total += array[j];
  }
  
  return total;
}

console.log(somatorio(200))


//7

function verificaFinal(word, ending){
  
  let palavra = word.split('').reverse().join('')
  let final = ending.split('').reverse().join('')
  console.log(palavra)
  console.log(final)
  let resultado = false;
  
  
  for(let i = 0; i < final.length; i += 1){
      if(final[i] != palavra[i]){
        resultado = false;
        break;
      }
      else {
        resultado = true;
      }
      }
  return resultado;
}


console.log(verificaFinal('joaofernando', 'ando'));

//bonus 2



//console.log(vector[0][0])

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
  
function arrayNumbers(vector){
  let arrayPares = [];
  for(let i=0; i < vector.length; i += 1){

    for(let j=0; j < vector[i].length; j += 1){
      if(vector[i][j] % 2 === 0){
        arrayPares.push(vector[i][j])
      }
    }
  }
  return (arrayPares);
}
 
console.log(arrayNumbers(vector))

//bonus 3
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];


let ordem = basket.sort();
  let objectFruit = {};
 
  for(let i = 0; i < ordem.length; i += 1){
        let count = 0;
        for(let j =0; j < ordem.length; j += 1){
          if(ordem[i] == ordem[j+1]){
              count += 1
              objectFruit[ordem[i]] = count
            }
          }
          
        }
        objectFruit['Abacate'] += 1
        console.log(objectFruit)
        
        console.log(`Sua cesta possui ${objectFruit.Abacate} Abacates, ${objectFruit['Banana']}
        Bananas`)
        //bonus 4
        let moradores = {
     blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(`O morador do bloco 2 de nome ${moradores['blocoDois'][1]['nome']} mora no ${moradores['blocoDois'][1]['andar']} andar, apartamento ${moradores['blocoDois'][1]['apartamento']}`)
*/
//bonus 5
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

//Bloco 1
for(let i = 0; i < moradores['blocoUm'].length; i += 1){
  console.log(moradores['blocoUm'][i]['nome'] + ' ' + moradores['blocoUm'][i]['sobrenome'])
}





