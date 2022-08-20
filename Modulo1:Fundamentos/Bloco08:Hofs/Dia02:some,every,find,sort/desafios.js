// Desafios pós aula
// Com base no Array abaixo e usando o forEach faça o log de todas as entradas no seguinte formato:
// `${nome} ${sobreNome} tem carta de motorista? ${temCNH ? Sim : Não}

const usuarios = [
  { nome: 'Homer', sobreNome: 'Simpson', temCNH: true },
  { nome: 'Marge', sobreNome: 'Simpson', temCNH: true },
  { nome: 'Bart', sobreNome: 'Simpson', temCNH: false },
  { nome: 'Lisa', sobreNome: 'Simpson', temCNH: false },
  { nome: 'Maggie', sobreNome: 'Simpson', temCNH: false },
];

// usuarios.forEach((element) =>{
//   console.log(`${element.nome} ${element.sobreNome} tem cara de motorista? ${element.temCNH === true ? 'sim' : 'não'}`)
// })


// Use o FIND para retornar o estado que tem a sigla RR (use mais siglas para validar seu código)
// Use o forEach para fazer o LOG de todos os estados do array da seguinte forma:
// Sigla: SP, Estado: São Paulo - Observação: em ordem alfabética por estado invertida
// Ordene o array de estados
const estados = [
  { AC: 'Acre' },
  { AL: 'Alagoas' },
  { AP: 'Amapá' },
  { AM: 'Amazonas' },
  { BA: 'Bahia' },
  { CE: 'Ceará' },
  { DF: 'Distrito Federal' },
  { ES: 'Espírito Santo' },
  { GO: 'Goías' },
  { MA: 'Maranhão' },
  { MT: 'Mato Grosso' },
  { MS: 'Mato Grosso do Sul' },
  { MG: 'Minas Gerais' },
  { PA: 'Pará' },
  { PB: 'Paraíba' },
  { PR: 'Paraná' },
  { PE: 'Pernambuco' },
  { PI: 'Piauí' },
  { RJ: 'Rio de Janeiro' },
  { RN: 'Rio Grande do Norte' },
  { RS: 'Rio Grande do Sul' },
  { RO: 'Rondônia' },
  { RR: 'Roraíma' },
  { SC: 'Santa Catarina' },
  { SP: 'São Paulo' },
  { SE: 'Sergipe' },
  { TO: 'Tocantins' },
];

const newArr = [...estados].reverse();
//console.log(newArr)
//const x = estados.find((element) => element['RR'])
estados.reverse().forEach((element) =>{
//console.log(`Sigla: ${Object.keys(element)}, Estado: ${Object.values(element)}`)
  //console.log(element)
})

// Ordene o vetor de estudantes da maior para a menor média, lembrando que a média
// pode ser calculada somando-se as notas de avalição, projeto e trabalho em grupo
// e dividindo por 3

const pessoasEstudantes = [
  { nome: 'Alexandre', avaliacao: 7, projeto: 5.5, trabalhoGrupo: 8 },
  { nome: 'Marcondes', avaliacao: 6, projeto: 7.5, trabalhoGrupo: 5 },
  { nome: 'Rodrigo', avaliacao: 8.5, projeto: 9, trabalhoGrupo: 7 },
  { nome: 'Marcella', avaliacao: 8, projeto: 7, trabalhoGrupo: 4 },
  { nome: 'Adriana', avaliacao: 9, projeto: 7, trabalhoGrupo: 7 },
  { nome: 'Marlene', avaliacao: 7.5, projeto: 8, trabalhoGrupo: 7 },
];


for(let i = 0; i < pessoasEstudantes.length; i += 1){
    let mediaAluno = (pessoasEstudantes[i].avaliacao + pessoasEstudantes[i].projeto + pessoasEstudantes[i].trabalhoGrupo) / 3;
    pessoasEstudantes[i].media = mediaAluno.toFixed(1);
}

console.table(pessoasEstudantes.sort((a, b) => {
  return a.media < b.media ? 1 : -1
}))

console.table(pessoasEstudantes)
//console.log(pessoasEstudantes[1].avaliacao)