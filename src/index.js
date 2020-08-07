class Shenlong {
    constructor(){
        this.isVisible = false
        this.dragonBalls = []
    }

    getAmountOfDragonBalls(){
        return this.dragonBalls.length
    }

    getVisibility(){
        return this.isVisible
    }

    getDragonBallsList(){
        return this.dragonBalls
    }

    clearDragonBallList(){
        this.dragonBalls = []
    }

    changeDragonBallsList(balls){
        this.dragonBalls.push(...balls)
    }

    invokeShenlong(magicWords){
        const magic = 'Apareça Shenlong e realize meu desejo'
        if(this.dragonBalls < 7) return 'Você precisa ter as 7 esferas para ivocar o Shenlong'
        if(!magicWords || magicWords !== magic) return 'Você precisa dizer as palavras mágicas'
        this.isVisible = true
        return 'Você tem direito a 3 pedidos'
    }
}

module.exports = new Shenlong()