import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeScoreComponent } from './components/employee-score/employee-score.component';
import { EmployeeStatisticsComponent } from './components/employee-statistics/employee-statistics.component';
import { AgePipe } from './pipes/age.pipe';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EmployeesComponent,
    FormsModule,
    RatingModule,
    CardModule,
    InputTextModule,
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeCardComponent,
    EmployeeScoreComponent,
    EmployeeStatisticsComponent,
    AgePipe,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
