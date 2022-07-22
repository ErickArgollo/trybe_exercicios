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
*/
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

 