import {Component, OnInit} from '@angular/core';
import {Employee} from '../model/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
          console.log(data);
          this.employee = data;
        },
        error => console.log(error));
  }

  list() {
    this.router.navigate(['employees']);
  }

}
