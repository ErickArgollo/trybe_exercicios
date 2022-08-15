// const sum = require('./sum');
// const sub = require('./sub')
const {
  sum, sub, myRemove, fizzBuzz
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
})