import { v4 as uuidv4 } from 'uuid';
import { type Iproduct } from '../Interfaces/Iproduct';

export class Tomate implements Iproduct {
    id: string;
    name: string = 'Tomate';
    pricePerKg: number;
    quantity: number;
    unit: string = 'kg';

    constructor(pricePerKg: number, quantity: number) {
        this.id = uuidv4();
        this.pricePerKg = pricePerKg;
        this.quantity = quantity;
    }

    getPrice(): number {
        return this.pricePerKg * this.quantity;
    }
}