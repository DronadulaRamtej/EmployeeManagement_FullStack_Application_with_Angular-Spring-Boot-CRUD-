import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data) => {
        console.log(data);
        this.goToEmployeeList();
      },
      error: (error) => {
        console.log(error);
      }
      
    });
  }


  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    // Here, you would typically handle the form submission,
    // such as sending the employee data to a backend service.
    console.log(this.employee);
    // Example: this.employeeService.addEmployee(this.employee).subscribe(...);
    this.saveEmployee();
  }
}