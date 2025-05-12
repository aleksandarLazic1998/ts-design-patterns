import ChairFactory from './chair-factory'

const CHAIR = ChairFactory.getChair('LargeChair')
console.log(CHAIR.getDimensions())
