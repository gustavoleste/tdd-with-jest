const Shenlong = require('../index')

describe('Shenlong test', () => {
    beforeEach(() => Shenlong.clearDragonBallList())

    it('Should return my amount dragon balls', () => {
        expect(Shenlong.getAmountOfDragonBalls()).toBe(0)
    })
    it('Should return id Shenlong is visible', () => {
        expect(Shenlong.getVisibility()).toBe(false)
    })
    it('Sould return my dragon balls list', () => {        
        expect(Shenlong.getDragonBallsList()).toEqual([])
    })
    it('Sould chaange my dragon balls list', () => {
        Shenlong.changeDragonBallsList(['4 estrelas'])
        expect(Shenlong.getDragonBallsList()).toEqual(['4 estrelas'])
    })
    it('Sould chaange my dragon balls list', () => {
        const expected = ['4 estrelas', '1 estrela', '6 estrela']
        Shenlong.changeDragonBallsList(['4 estrelas', '1 estrela', '6 estrela'])
        expect(Shenlong.getDragonBallsList()).toEqual(expected)
    })
    it('Should not invoke Shenlong without 7 gragon balls', () => {
        expect(Shenlong.invokeShenlong()).toEqual('Você precisa ter as 7 esferas para ivocar o Shenlong')
    })
    it('Should not invoke Shenlong without magic words', () => {
        Shenlong.changeDragonBallsList(['1 estrela','2 estrela','3 estrela','4 estrela','5 estrela','6 estrela','7 estrela'])
        expect(Shenlong.invokeShenlong()).toEqual('Você precisa dizer as palavras mágicas')
    })
    it('Should invoke Shenlong', () => {
        const magicWords = 'Apareça Shenlong e realize meu desejo'
        Shenlong.changeDragonBallsList(['1 estrela','2 estrela','3 estrela','4 estrela','5 estrela','6 estrela','7 estrela'])
        expect(Shenlong.invokeShenlong(magicWords)).toEqual('Você tem direito a 3 pedidos')
    })
})