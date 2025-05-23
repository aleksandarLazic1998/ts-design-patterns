// Builder Concept Sample Code
class Product {
    parts: string[] = []
}

interface IBuilder {
    buildPartA(): this
    buildPartB(): this
    buildPartC(): this
    getResult(): Product
}

class Builder implements IBuilder {
    // The Concrete Builder
    product: Product

    constructor() {
        this.product = new Product()
    }

    buildPartA() {
        this.product.parts.push('a')
        return this
    }
    buildPartB() {
        this.product.parts.push('b')
        return this
    }
    buildPartC() {
        this.product.parts.push('c')
        return this
    }

    getResult() {
        return this.product
    }
}

class Director {
    static construct() {
        // Constructs and returns the final product
        return new Builder().buildPartA().buildPartB().buildPartC().getResult()
    }
}

const DIRECTOR = Director.construct()

console.log(DIRECTOR.parts)
