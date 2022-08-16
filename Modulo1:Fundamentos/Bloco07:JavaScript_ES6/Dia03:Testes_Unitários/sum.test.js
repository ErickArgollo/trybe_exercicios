// const sum = require('./sum');
// const sub = require('./sub')
const {
  sum, sub, myRemove, fizzBuzz, encode, techList, searchEmployee
} = require('./sum');

describe('testes sum', () =>{ 

it('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

it('testa se 1 e 2 é igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
})

it('Testa se a função sum lança um erro quando os parâmetros são 4 e "5" string 5' , () => {
  expect(()=>sum(4, '5')).toThrow('parameters must be numbers')
})

}),


describe('testes sub', ()=>{
  it('Subtração de 2 e 3', ()=>{
    expect(sub(3, 2)).toEqual(1)
  })
})


describe('Testes myRemove', () => {

  it('Verifica se ao receber o array [1,2,3,4] e 3, retorna o array [1,2,4]', () =>{
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4])
  })

  it('Verifica se ao receber o array [1,2,3,4] e 3, não retorna o array [1,2,3,4]', () =>{
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4])
  })

  it('Verifica se ao receber o array [1,2,3,4] e 5, retorna o array [1,2,3,4]', () =>{
    expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4])
  })

})

describe('testes do fizzbuzz', ()=>{
  it('Verifica se ao chamar a função com o número 15, retorna fizzBuzz', () =>{
    expect(fizzBuzz(15)).toBe('fizzBuzz')
  })

  it('Verifica se ao chamar a função com o número 9, retorna buzz', () => {
    expect(fizzBuzz(9)).toBe('buzz')
  })

  it('Verifica se ao chamar a função com o número 5, retorna fizz', () =>{
    expect(fizzBuzz(5)).toBe('fizz')
  })

  it('Verifica se ao chamar a função com o número 4, retorna o própio número', ()=>{
    expect(fizzBuzz(4)).toBe(4);
  })

  it('Verifica se ao chamar a função com um parametro que não representa um número, retorna false', ()=>{
    expect(fizzBuzz('teste')).toBe(false)
  })
})

describe('encode e decode', ()=>{
  it('Verifica se as funções encode e decode são funções', ()=>{
    expect(typeof encode).toBe('function')
  })
  it('Verifica se a função encode, ao receber as vogais a, e, i, o, u retorna 1, 2, 3, 4, 5', ()=>{
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
  })
  it('Verifica se as demais letras da palavra não são convertidas em números, a string "la vai a bela moça", deverá retornar "l1 v13 1 b2l1 m4ç1', ()=>{
    expect(encode('la vai a bela moça')).toBe('l1 v13 1 b2l1 m4ç1')
  })
  it('Verifica se a string retornada possui a mesma quantidade de caracteres da original', ()=>{

    expect(encode('la vai a bela moça').length).toBe(18);
  })
})

describe('Teste techlist', ()=>{
  it('Testa a função techList', () =>{
   expect(typeof techList).toBe('function')
  })

  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', ()=>{
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  })

})

describe('Função para procurar empregados', () => {
  it('Verifica se a função searchEmployer é uma função', ()=>{
    expect(typeof searchEmployee).toBe('function')
  })
  it('Verifica se ao digitar um ID correspondente, o retorno é esse ID',() =>{
    expect(searchEmployee('4678-2', 'id')).toBe('4678-2')
  })
  it('Verifica se ao digitar um ID inexistente, é retornado um erro', ()=>{
    expect(() => {searchEmployee('1111-2', 'id')}).toThrow()
  })
  it('Verifica se id,lastname retorna o sobrenome do usuario' , ()=>{
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds')
  })
})