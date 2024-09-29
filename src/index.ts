import { Starship, StarshipStatut } from "./Starship";; 
import type { planet } from "./Typeplanet";
import { calculateFlightDurationFromEarth } from './utils/flightCalculator';
import {type Iproduct} from './Interfaces/Iproduct';
import { v4 as uuidv4 } from 'uuid';
import { Cart } from './Classes/Cart';
import { Tomate} from './Classes/Tomate';
import { Sucre } from "./Classes/Sucre";
import { Citron } from "./Classes/Citron";
import { HuileOlive } from "./Classes/HuileOlive";

const starsphip:Starship = new Starship("Prometheus", 100000,StarshipStatut.PARKED);
//console.log(starsphip);
console.log("l'id est:",starsphip.id ,"le statut", starsphip.id);

starsphip.takeOff();  
console.log("l'id est:",starsphip.id ,"le statut", starsphip.id);
starsphip.fly(); 
console.log("l'id est:",starsphip.id ,"le statut", starsphip.id);     
starsphip.land(); 
console.log("l'id est:",starsphip.id ,"le statut", starsphip.id);    
starsphip.park();
console.log("l'id est:",starsphip.id ,"le statut", starsphip.id);
const planets: planet[] = [
    { name: 'Mercure', distanceFromEarth: 92 },
    { name: 'Venus', distanceFromEarth: 41 },
    { name: 'Mars', distanceFromEarth: 78 },
    { name: 'Jupiter', distanceFromEarth: 628 },
    { name: 'Saturne', distanceFromEarth: 1275 }, 
    { name: 'Uranus', distanceFromEarth: 2724 },
    { name: 'Neptune', distanceFromEarth: 4351 }
];

console.log(planets);
const duration = calculateFlightDurationFromEarth(planets[1], starsphip, 'days');
console.log(`Durée du vol: ${duration} jours:`);

console.log("la distance croissante est de:");
// Tri par distance croissante
const DCsort =planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log(DCsort);
console.log("la distance par ordre alphabetique croissantes est de:")
// Tri par ordre alphabétique croissant
const OACsort =planets.sort((a, b) => a.name.localeCompare(b.name));
console.log(OACsort);

console.log("la distance par ordre alphabetique décroissante est de:")
// Tri par ordre alphabétique décroissant
const OADsort =planets.sort((a, b) => b.name.localeCompare(a.name));
console.log(OADsort);

// Calcul de la distance moyenne
const totalDistance = planets.reduce((acc, planet) => acc + planet.distanceFromEarth, 0);
const averageDistance = totalDistance / planets.length;
console.log(`Distance moyenne: ${averageDistance}`);
// Création du panier
const cart = new Cart();

// Création des produits

const citron = new Citron(0.5, 1); // 0.5€ par unité, 5 unités
const huileDolive = new HuileOlive(5, 1);  // 5€ par litre, 1.5 litre
const sucre = new Sucre(3.9, 1); // 3.9€ par kg, 2 kg
const tomate = new Tomate(3.5, 1); // 3.5€ par kg, 2 kg

// Ajout des produits au panier
cart.add(citron, 2);  // 2 citrons
cart.add(huileDolive, 1.5);  // 1.5L d'huile d'olive
cart.add(sucre, 0.5);  // 500g de sucre
cart.add(citron, 5);  // 5 citrons supplémentaires
cart.add(sucre, 3);  // 3kg de sucre
cart.add(tomate, 1.5);  // 1.5 kg de tomates

// Affichage du nombre de types de produits
console.log(`Nombre de types de produits dans le panier: ${cart.orderLines.length}`);

console.log("Montant total pour les tomates: "+cart.calculateAmountByProduct(tomate));

console.log("Montant total pour les produits: "+cart.calculateTotalAmount());


