import { v4 as uuidv4 } from "uuid";
import validator from "validator";


 export enum StarshipStatut {
    PARKED = "parked",
    TAKING_OFF = "taking_off",
    FLYING = "flying",
    LANDING = "landing"
}

export class Starship {
    public ref: string;
    public speed: number;
    public statuts: StarshipStatut;
    public id: string;

    
    constructor(ref: string, speed: number, statuts: StarshipStatut, id?: string) {
        this.ref = ref;
        this.speed = speed;
        this.statuts = statuts || StarshipStatut.PARKED;
        this.id = id ? (validator.isUUID(id, 4) ? id : uuidv4()) : uuidv4();
    }

    
    takeOff(): void {
        if (this.statuts !== StarshipStatut.PARKED) {
            throw new Error('Un vaisseau qui n\'est pas stationné ne peut pas décoller.');
        }
        this.statuts = StarshipStatut.TAKING_OFF;
        console.log(`${this.ref} est en train de décoller.`);
    }

    park(): void {
        if (this.statuts !== StarshipStatut.LANDING) {
            throw new Error('Le vaisseau doit atterrir avant de pouvoir se garer.');
        }
        this.statuts = StarshipStatut.PARKED;
        console.log(`${this.ref} est maintenant stationné.`);
    }

    fly(): void {
        if (this.statuts !== StarshipStatut.TAKING_OFF) {
            throw new Error('Le vaisseau doit décoller avant de pouvoir voler.');
        }
        this.statuts = StarshipStatut.FLYING;
        console.log(`${this.ref} est en vol.`);
    }

    land(): void {
        if (this.statuts !== StarshipStatut.FLYING) {
            throw new Error('Le vaisseau doit être en vol pour pouvoir atterrir.');
        }
        this.statuts = StarshipStatut.LANDING;
        console.log(`${this.ref} est en cours d\'atterrissage.`);
    }
}
