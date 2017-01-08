import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent }   from './employees/employees.component';

const appRoutes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
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
export class EmployeesRoutingModule {}
