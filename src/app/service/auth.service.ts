import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../model/user';

// Définir une interface pour la réponse d'authentification
interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/';
  private authTokenKey = 'authToken'; // Clé pour le stockage du jeton d'authentification dans le LocalStorage

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}login/`, credentials)
      .pipe(
        tap(response => {
          // Stocker le jeton d'authentification dans le LocalStorage après une connexion réussie
          localStorage.setItem(this.authTokenKey, response.token);
        })
      );
  }

  logout(): void {
    // Supprimer le jeton d'authentification du LocalStorage lors de la déconnexion
    localStorage.removeItem(this.authTokenKey);
  }

  isLoggedIn(): boolean {
    // Vérifier si l'utilisateur est connecté en fonction de la présence du jeton d'authentification dans le LocalStorage
    return !!localStorage.getItem(this.authTokenKey);
  }

  getAuthToken(): string | null {
    // Récupérer le jeton d'authentification du LocalStorage
    return localStorage.getItem(this.authTokenKey);
  }

  // Méthode pour récupérer le rôle de l'utilisateur depuis le backend
  getRole(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}get-role/`);
  }
  signUp(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}signup/`, user);
  }
}
