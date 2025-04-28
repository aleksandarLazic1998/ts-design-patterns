import ChairConcreteProduct from './chair'

class SmallChair extends ChairConcreteProduct {
    constructor() {
        super()
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}

class MediumChair extends ChairConcreteProduct {
    constructor() {
        super()
        this.height = 50
        this.width = 50
        this.depth = 50
    }
}

class LargeChair extends ChairConcreteProduct {
    constructor() {
        super()
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}

export { SmallChair, MediumChair, LargeChair }
