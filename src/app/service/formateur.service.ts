import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formateur } from '../model/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  
  private loginUrl = 'http://127.0.0.1:8000/api/formateur/login/';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { email, password });
  }

  getFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.loginUrl);
  }

  getFormateur(id: number): Observable<Formateur> {
    return this.http.get<Formateur>(`${this.loginUrl}${id}/`);
  }

  addFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(this.loginUrl, formateur);
  }

  updateFormateur(id: number, formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(`${this.loginUrl}${id}/`, formateur);
  }

  deleteFormateur(id: number): Observable<any> {
    return this.http.delete<any>(`${this.loginUrl}${id}/`);
  }
}
