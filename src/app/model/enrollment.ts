// enrollment.model.ts

export interface Enrollment {
  id: number;
  user: number;        // ID de l'utilisateur
  training: number;    // ID de la formation
  is_accepted: boolean;
}
