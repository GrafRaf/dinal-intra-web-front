//import { EmployeesService } from './../../shared/employees.service';
import { Component, OnInit } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private employeesUrl = 'http://dinal-system-api.azurewebsites.net:80/api/Employees';

  employees: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getComments()
      .subscribe(result => { this.employees = result; console.log('result', result); }, err => { console.log('err', err); });
  }


  getComments(): Observable<any> {
      return this.http.get(this.employeesUrl)
                      .map((res: Response) => res.json())
                      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
