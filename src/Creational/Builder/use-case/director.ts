import House from './house'
import HouseBuilder from './house-builder'

class HouseDirectorForIgloo {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult()
    }
}

export default HouseDirectorForIgloo.construct()
