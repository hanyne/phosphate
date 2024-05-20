import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8000/api/employee/';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.get<Employee>(url);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    // Remove 'id' from the employee object before sending it to the server
    const { id, ...employeeWithoutId } = employee;
    return this.http.post<Employee>(this.apiUrl, employeeWithoutId);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}${employee.id}/`;
    return this.http.put<Employee>(url, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.delete(url);
  }
}
