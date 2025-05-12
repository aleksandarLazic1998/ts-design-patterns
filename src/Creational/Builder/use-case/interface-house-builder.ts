import House from './house'

interface IHouseBuilder {
    readonly house: House
    setBuildingType(buildingType: string): this
    setWallMaterial(wallMaterial: string): this
    setNumberDoors(doors: number): this
    setNumberWindows(windows: number): this
    getResult(): House
}

export default IHouseBuilder
