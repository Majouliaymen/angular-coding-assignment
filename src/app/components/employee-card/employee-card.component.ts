import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';
import {EmployeeScoreComponent} from '../employee-score/employee-score.component';
import {CommonModule} from '@angular/common';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {ChipModule} from 'primeng/chip';
import {TagModule} from 'primeng/tag';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  imports: [
    EmployeeScoreComponent,
    CommonModule,
    CardModule,
    AvatarModule,
    ChipModule,
    TagModule
  ],
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
}
