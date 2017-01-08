/// <reference path="ymaps.d.ts" />
import { Component, OnDestroy, OnInit, Input, NgZone } from '@angular/core';
import { Order } from './../models/order';
import { Workman } from './../models/workman';
import { ScheduledOrder } from './../models/scheduledorder';

@Component({
  selector: 'app-dashboard-map',
  templateUrl: './dashboard-map.component.html',
  styleUrls: ['./dashboard-map.component.css']
})
export class DashboardMapComponent implements OnInit {

    // @Input('orders')
    // set orders(orders: Order[]){
    //     this._orders = orders;
    //     console.log('orders:', orders);
    // }
    // get orders(): Order[]{
    //     return this._orders;
    // }

    // @Input('workmans')
    // set workmans(workmans: Workman[]){
    //     this._workmans = workmans;
    //     console.log('workmans:', workmans);
    // }
    // get workmans(): Workman[]{
    //     return this._workmans;
    // }

    // @Input('newScheduledOrder')
    // set newScheduledOrder(newScheduledOrder: ScheduledOrder){
    //     console.log('set newScheduledOrder:', newScheduledOrder);
    //     this._newScheduledOrder = newScheduledOrder;
    //     if (this._newScheduledOrder
    //         && this._newScheduledOrder.order
    //         && this._newScheduledOrder.workman){
    //         //this.refreshRoute();
    //     }
    // }
    // get newScheduledOrder(): ScheduledOrder{
    //     return this._newScheduledOrder;
    // }

    private _orders: Order[] = [];
    private _workmans: Workman[] = [];
    private _newScheduledOrder: ScheduledOrder;
    private _map: any;
    private zone: NgZone;


  constructor(zone: NgZone){
    this.zone = zone;
  }

  ngOnInit() {
        ymaps.ready().then(() => {
            this._map = new ymaps.Map('main_map', {
                center: [55.00081759026249, 82.95627699999989],
                zoom: 12,
                controls: ['smallMapDefaultSet']
            });
            // for (let i = 0; i < this.orders.length; i++){
            //     //this.drawOrderPlacemark(this.orders[i]);
            // }
            // for (let i = 0; i < this.workmans.length; i++){
            //     //this.drawWorkmanPlacemark(this.workmans[i]);
            // }
            // console.log(this.newScheduledOrder);
            // //this.refreshRoute();
        });
  }

}
