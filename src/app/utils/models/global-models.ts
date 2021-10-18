export class ListMarkerByCard {
    hyundai: Card[]
    mazda: Card[]
    constructor() {
        this.hyundai = []
        this.mazda = []
    }
}

export class Card {
    id: number
    model: string
    year: string | null
    marker: string
    price: number
    mainPhoto: string
    features: Features[]
    constructor() {
        this.id = 0
        this.model = ''
        this.year = null
        this.marker = ''
        this.price = 0
        this.mainPhoto = ''
        this.features = []
    }
}

export class Features {
    label: string
    description: string[]
    constructor() {
        this.label = ''
        this.description = new Array<string>()
    }
}

export class Header {
    title: string
    message: string
    search: string
    constructor() {
        this.title = ''
        this.message = ''
        this.search = ''
    }
}



