
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    RatingModule,
    CardModule,
    InputTextModule
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Employee Management';
}
