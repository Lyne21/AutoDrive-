//Définition des types

interface Voiture {
    id: string;
    marque: string;
    model: string;
    annee: number;
    prix_location: number;
    prix_vente: number;
    images: string[];
    isDisponible: boolean;
}

interface User {
    id: number;
    nom: string;
    prenom: string; 
    email: string; 
    password: string;
}

interface Reservation {
    id: number;
    voitureId: number;
    utilisateurId: number;
    dateDebut: Date;
    dateFin: Date;
    statut: string; 
    prixTotal: number;
    status: ReservationStatus
}


//enum 
export enum ReservationStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
  COMPLETED = "completed"

}