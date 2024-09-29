import { type Iproduct } from '../Interfaces/Iproduct';

export class Cart {
    orderLines: {product: Iproduct, quantity: number}[] = [];

    add(product: Iproduct, quantity: number): void {
        
        this.orderLines.push({product , quantity});
    }

    calculateAmountByProduct(product: Iproduct): number {
        const orderLine = this.orderLines.find(line => line.product.id === product.id);
        return orderLine ? orderLine.product.getPrice() * orderLine.quantity : 0;
    }
    
    

    //Calcul du montant total du panier
    calculateTotalAmount(): number {
        return this.orderLines.reduce((total, { product, quantity }) => total + product.getPrice() * quantity, 0);
    }

    // Affichage des détails des produits
    displayDetails(): string[] {
        return this.orderLines.map(({ product, quantity }) => {
            const totalPrice = product.getPrice() * quantity;
            return `ID: ${product.id}, Nom: ${product.name}, Prix unitaire: ${product.getPrice()}€, Unité: ${product.unit}, Quantité: ${quantity}, Montant: ${totalPrice}€`;
        });
    }
}