import { dimensions } from './dimensions'

export interface IChairProduct {
    height: number
    width: number
    depth: number
    getDimensions(): dimensions
}

export default class ChairConcreteProduct implements IChairProduct {
    width = 0
    height = 0
    depth = 0

    getDimensions(): dimensions {
        return { width: this.width, depth: this.depth, height: this.height }
    }
}
