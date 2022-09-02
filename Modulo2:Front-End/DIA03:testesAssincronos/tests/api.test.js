const takeApi = require('../script');

describe('Testando requisição de Api', ()=>{
    it('Testa se ao requisitar o login, retorna Erick Argollo', async()=>{
        const newData = await takeApi('ErickArgollo');
        const {name} = newData;
        expect(name).toBe('Erick Argollo')
    })
})