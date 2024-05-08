import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../model/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private baseUrl = 'http://localhost:8000/training/';

  constructor(private http: HttpClient) { }

  getAllTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.baseUrl);
  }

  getTrainingById(id: number): Observable<Training> {
    return this.http.get<Training>(`${this.baseUrl}${id}/`);
  }

  deleteTraining(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }

  // Méthode pour créer une formation
  createTraining(trainingData: Training): Observable<Training> {
    return this.http.post<Training>(this.baseUrl, trainingData);
  }

  // Méthode pour mettre à jour une formation
  updateTraining(trainingData: Training): Observable<Training> {
    const url = `${this.baseUrl}${trainingData.id}/`;
    return this.http.put<Training>(url, trainingData);
  }
}
