import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { ProjectService } from '../services/project.service';
import { Employee } from '../models/employee.model';
import { Project } from '../models/project.model';
import {CommonModule} from '@angular/common';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {TagModule} from 'primeng/tag';
import {ChipModule} from 'primeng/chip';
import {DividerModule} from 'primeng/divider';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    TagModule,
    ChipModule,
    DividerModule
  ],
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee!: Employee;
  projects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployee(id).subscribe(emp => {
      this.employee = emp;


      this.projectService.getProjects().subscribe(projects => {
        this.projects = projects.filter(proj =>
          emp.projects.includes(Number(proj.id))
        );

      });
    });
  }

  get seniority(): number {
    const today = new Date();
    const recruitmentDate = new Date(this.employee.recruitmentDate);
    return today.getFullYear() - recruitmentDate.getFullYear();
  }
}

