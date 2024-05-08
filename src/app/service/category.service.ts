import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8000/category/';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}${id}/`);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }

  createCategory(categoryData: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, categoryData);
  }

  updateCategory(categoryData: Category): Observable<Category> {
    const url = `${this.baseUrl}${categoryData.id}/`;
    return this.http.put<Category>(url, categoryData);
  }
}
