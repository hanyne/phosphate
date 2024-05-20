export interface User {
    id?: number;
    email: string;
    username: string;
  }
  
  export interface Formateur {
    id?: number;
    user: User;
    expertise: string;
    bio?: string;
  }
  