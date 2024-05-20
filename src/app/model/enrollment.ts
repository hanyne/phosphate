import { Employee } from "./employee";
import { Training } from "./training";

export interface Enrollment {
    id: number; // Identifiant de l'inscription
    employee: Employee; // Employé inscrit
    training: Training; // Formation à laquelle l'employé est inscrit
    is_accepted: boolean; // Statut de l'inscription (accepté ou non)
  }
  