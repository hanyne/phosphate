import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, AuthResponse } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}signup/`, user);
  }

  login(credentials: { username: string, password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}login/`, credentials);
  }
}
