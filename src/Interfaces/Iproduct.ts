export interface Iproduct {
    id: string; // ID unique du produit
    name: string; // Nom du produit
    getPrice(): number; // Méthode pour obtenir le prix total
    unit: string; // Unité de mesure (kg, litre, unité)
}