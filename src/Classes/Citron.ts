import { v4 as uuidv4 } from 'uuid';
import { type Iproduct } from '../Interfaces/Iproduct';

export class Citron implements Iproduct {
    id: string;
    name: string = 'Citron';
    unitPrice: number;
    quantity: number;
    unit: string = 'unité'; // Unité de mesure

    constructor(unitPrice: number, quantity: number) {
        this.id = uuidv4();
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }

    getPrice(): number {
        return this.unitPrice * this.quantity;
    }
}