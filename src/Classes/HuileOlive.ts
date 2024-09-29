import { v4 as uuidv4 } from 'uuid';
import {type Iproduct } from '../Interfaces/Iproduct';

export class HuileOlive implements Iproduct {
    id: string;
    name: string = 'Huile d\'Olive';
    pricePerLiter: number;
    quantity: number;
    unit: string = 'litre';

    constructor(pricePerLiter: number, quantity: number) {
        this.id = uuidv4();
        this.pricePerLiter = pricePerLiter;
        this.quantity = quantity;
    }

    getPrice(): number {
        return this.pricePerLiter * this.quantity;
    }
}