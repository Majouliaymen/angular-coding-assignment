import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-employee-statistics',
  templateUrl: './employee-statistics.component.html',
  imports: [
    CardModule

  ],
  styleUrls: ['./employee-statistics.component.css']
})
export class EmployeeStatisticsComponent {
  @Input() employees!: Employee[];

  get totalEmployees(): number {
    return this.employees.length;
  }

  get maleEmployees(): number {
    return this.employees.filter(emp => emp.gender === 'male').length;
  }

  get femaleEmployees(): number {
    return this.employees.filter(emp => emp.gender === 'female').length;
  }

  get teams(): number {
    return new Set(this.employees.map(emp => emp.team)).size;
  }

  get employeeOfTheYear(): Employee {
    return this.employees.reduce((prev, curr) => (prev.score > curr.score ? prev : curr));
  }

  get lastHiredEmployee(): Employee {
    return this.employees.reduce((prev, curr) => (new Date(prev.recruitmentDate) > new Date(curr.recruitmentDate) ? prev : curr));
  }
}
