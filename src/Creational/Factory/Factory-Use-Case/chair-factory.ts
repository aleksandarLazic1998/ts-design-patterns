import { IChairProduct } from './chair'
import { LargeChair, MediumChair, SmallChair } from './chair-concrete-product-items'

export default class ChairFactory {
    static getChair(chair: string): IChairProduct {
        if (chair == 'LargeChair') {
            return new LargeChair()
        } else if (chair == 'MediumChair') {
            return new MediumChair()
        } else {
            return new SmallChair()
        }
    }
}
