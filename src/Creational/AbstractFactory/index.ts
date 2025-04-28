interface dimensions {
    width: number
    height: number
    depth: number
}

interface ConcreteProductInterfaceA extends dimensions {
    getDimensions(): dimensions
}

interface ConcreteProductInterfaceB extends dimensions {
    getDimensions(): dimensions
}

interface IAbstractProduct
    extends ConcreteProductInterfaceA,
        ConcreteProductInterfaceB {}

class AbstractConcreteProductA implements IAbstractProduct {
    width = 0
    height = 0
    depth = 0

    getDimensions(): dimensions {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth,
        }
    }
}

class AbstractConcreteProductB implements IAbstractProduct {
    width = 0
    height = 0
    depth = 0

    getDimensions(): dimensions {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth,
        }
    }
}

class AFactory {
    static getObject(some_property: string): ConcreteProductInterfaceA {
        try {
            // logic here
            //    else {
            //         throw new Error('Class Not Found')
            //     }
        } catch (e) {
            console.log(e)
        }
        return new AbstractConcreteProductA()
    }
}

class BFactory {
    static getObject(some_property: string): ConcreteProductInterfaceB {
        try {
            // logic here
            //    else {
            //         throw new Error('Class Not Found')
            //     }
        } catch (e) {
            console.log(e)
        }
        return new AbstractConcreteProductB()
    }
}

// class Factory {
//     static createObject(factory: string): IAbstractProduct | undefined {
//         try {
//             //    if(log for A factory) return AFactory.getObject(factory)
//             //     if(log for B factory)  return BFactory.getObject(factory)
//             throw new Error('No Factory Found')
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }

// Factory.createObject('a', 'small') ->From previous feature this will return the first factory small item dimensions
