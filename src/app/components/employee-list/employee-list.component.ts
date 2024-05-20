// employee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];
  newEmployee: Employee = { name: '', department: '' };
  selectedEmployee?: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getAllEmployees()
      .subscribe({
        next: employees => this.employees = employees,
        error: error => console.error('Une erreur est survenue lors de la récupération des employés:', error)
      });
  }

  createEmployee(): void {
    this.employeeService.createEmployee(this.newEmployee)
      .subscribe({
        next: () => {
          this.getEmployees();
          this.newEmployee = { name: '', department: '' };
        },
        error: error => console.error('Une erreur est survenue lors de la création de l\'employé:', error)
      });
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  updateEmployee(): void {
    if (this.selectedEmployee) {
      this.employeeService.updateEmployee(this.selectedEmployee)
        .subscribe({
          next: () => {
            this.getEmployees();
            this.selectedEmployee = undefined;
          },
          error: error => console.error('Une erreur est survenue lors de la mise à jour de l\'employé:', error)
        });
    }
  }

}