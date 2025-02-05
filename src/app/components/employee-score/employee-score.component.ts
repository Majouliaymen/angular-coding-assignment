import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RatingModule} from 'primeng/rating';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-employee-score',
  templateUrl: './employee-score.component.html',
  imports: [
    FormsModule,
    CommonModule,
    RatingModule
  ],
  styleUrls: ['./employee-score.component.css']
})
export class EmployeeScoreComponent {
  @Input() score!: number;
}

