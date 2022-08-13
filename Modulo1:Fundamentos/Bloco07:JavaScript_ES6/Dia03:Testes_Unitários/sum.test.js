// const sum = require('./sum');
// const sub = require('./sub')
const {
  sum, sub
} = require('./sum')

describe('sum', () =>{ 
it('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

it('testa se 1 e 2 é igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
})
}),


describe('sub', ()=>{
  it('Subtração de 2 e 3', ()=>{
    expect(sub(3, 2)).toEqual(1)
  })
})