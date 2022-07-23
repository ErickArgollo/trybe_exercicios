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
*/
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
