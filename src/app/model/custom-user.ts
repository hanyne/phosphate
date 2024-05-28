export interface CustomUser {
    id: number;
    email: string;
    username: string;
    // Ajoutez d'autres champs utilisateur si nécessaire
  }
  export interface AuthResponse {
    access: string;
    refresh: string;
  }