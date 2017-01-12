import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Employee } from './models/employee';

@Injectable()
export class EmployeesService {

  private employeesUrl = 'http://dinal-system-api.azurewebsites.net:80/api/Employees';

  constructor (private http: Http) {}

  getEmployees(): Observable<Employee> {
      return this.http.get(this.employeesUrl)
                      .map((res: Response) => res.json())
                      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // getEmployees (): Observable<Employee[]> {
  //   return this.http.get(this.heroesUrl)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }

  // private handleError (error: Response | any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
