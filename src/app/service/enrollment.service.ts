import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Enrollment } from '../model/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private baseUrl = 'http://localhost:8000/api/enrollments/';

  constructor(private http: HttpClient) { }

  enroll(trainingId: number): Observable<Enrollment> {
    const url = `${this.baseUrl}${trainingId}/`;
    return this.http.post<Enrollment>(url, {}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
