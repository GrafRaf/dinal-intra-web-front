import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent }   from './reports/reports.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ReportsComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ReportsRoutingModule {}
