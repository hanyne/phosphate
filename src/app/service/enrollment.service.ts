// Angular imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Model
import { Enrollment } from '../model/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:8000/api/enrollments/';

  constructor(private http: HttpClient) { }
  enroll(trainingId: number): Observable<Enrollment> {
    const enrollmentData = { training: trainingId };
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post<Enrollment>(this.apiUrl, enrollmentData, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}  
