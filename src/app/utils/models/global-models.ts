export class Card {
    id: number
    model: string
    year: string
    marker: string
    price: number
    mainPhoto: string
    description: string
    engines: string[]
    equipment: string
    constructor() {
        this.id = 0
        this.model = ''
        this.year = new Date().getFullYear().toString()
        this.marker = ''
        this.price = 0
        this.mainPhoto = ''
        this.description = ''
        this.engines = new Array<string>()
        this.equipment = ''
    }
}



