import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import {EmployeeStatisticsComponent} from '../components/employee-statistics/employee-statistics.component';
import {EmployeeCardComponent} from '../components/employee-card/employee-card.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  imports: [
    EmployeeStatisticsComponent,
    EmployeeCardComponent,
    FormsModule,
    CommonModule,
    InputTextModule
  ],
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filterText: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {

    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data;
    });
  }

  applyFilter(): void {
    this.filteredEmployees = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
