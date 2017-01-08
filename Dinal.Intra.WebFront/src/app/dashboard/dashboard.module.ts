import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { RsideComponent } from './rside/rside.component';
import { LsideComponent } from './lside/lside.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ResultsTodayComponent } from './lside/results-today/results-today.component';
import { ResultsWeekComponent } from './lside/results-week/results-week.component';
import { ResultsMonthComponent } from './lside/results-month/results-month.component';
import { DashboardMapComponent } from './lside/dashboard-map/dashboard-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DashboardRoutingModule
  ],
  declarations: [
    RsideComponent,
    LsideComponent,
    NewOrderComponent,
    ResultsTodayComponent,
    ResultsWeekComponent,
    ResultsMonthComponent,
    DashboardMapComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
