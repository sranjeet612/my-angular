import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Details';
  EmpNo=100;
  Name="Ranjeet";
  Job="Developer";
  Salary="40000";
  Address="Hyderabad";
}
