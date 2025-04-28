interface IProduct {
    name: string
}

class ConcreteProduct implements IProduct {
    name = ''
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductC'
    }
}

class Creator {
    static createObject(someProperty: string): IProduct {
        const propertyObj: { [key: string]: IProduct } = {
            a: new ConcreteProductA(),
            b: new ConcreteProductB(),
            c: new ConcreteProductC(),
        }

        return propertyObj[someProperty]
    }
}

const creator1 = Creator.createObject('a')
console.log(creator1.name, 'Concrete Product: a')
const creator2 = Creator.createObject('b')
console.log(creator2.name, 'Concrete Product: b')
const creator3 = Creator.createObject('c')
console.log(creator3.name, 'Concrete Product: c')
