// enrollement service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from '../model/enrollment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  enroll(trainingId: number): Observable<any> {
    const authToken = this.authService.getAuthToken(); // Récupérer le jeton d'authentification
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`); // Créer les en-têtes de requête avec le jeton d'authentification

    return this.http.post(`${this.baseUrl}enrollments/`, { training: trainingId }, { headers });
  }
}
