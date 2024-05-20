import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formateur } from '../model/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  
  private apiUrl = 'http://localhost:8000/api/formateurs/';

  constructor(private http: HttpClient) { }

  getFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.apiUrl);
  }

  getFormateur(id: number): Observable<Formateur> {
    return this.http.get<Formateur>(`${this.apiUrl}${id}/`);
  }

  addFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(this.apiUrl, formateur);
  }

  updateFormateur(id: number, formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(`${this.apiUrl}${id}/`, formateur);
  }

  deleteFormateur(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }
}
