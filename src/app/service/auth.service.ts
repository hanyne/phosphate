import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/';
  private authTokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}login/`, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem(this.authTokenKey, response.token);
        })
      );
  }
  
  
  logout(): void {
    localStorage.removeItem(this.authTokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  getRole(): Observable<string> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}get-role/`, { headers })
      .pipe(
        map(response => response.role) // Assuming the role is returned in the 'role' field of the response
      );
  }
  

  signUp(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}signup/`, user);
  }
}
