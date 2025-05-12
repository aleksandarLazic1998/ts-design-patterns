import House from './house'
import IHouseBuilder from './interface-house-builder'

export default class HouseBuilder implements IHouseBuilder {
    readonly house: House

    constructor() {
        this.house = new House()
    }

    setBuildingType(buildingType: string) {
        this.house.buildingType = buildingType
        return this
    }

    setWallMaterial(wallMaterial: string) {
        this.house.wallMaterial = wallMaterial
        return this
    }

    setNumberDoors(doors: number) {
        this.house.doors = doors
        return this
    }

    setNumberWindows(windows: number) {
        this.house.windows = windows
        return this
    }

    getResult() {
        return this.house
    }
}
