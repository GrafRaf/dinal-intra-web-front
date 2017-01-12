import { Component, OnInit } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private ordersUrl = 'http://dinal-system-api.azurewebsites.net:80/api/Orders';

  orders: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getOrders()
      .subscribe(result => { this.orders = result; console.log('result', result); }, err => { console.log('err', err); });
  }


  getOrders(): Observable<Comment[]> {
      return this.http.get(this.ordersUrl)
                      .map((res: Response) => res.json())
                      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
