import { Card } from '../../utils/models/global-models';
export class Global {
    chargerIsActivated?: boolean
    currentCarsByBrand?: Card[]
    selectedCar?: Card
    constructor() {
        this.chargerIsActivated = false;
        this.currentCarsByBrand = new Array<Card>()
        this.selectedCar = new Card()
    }
}