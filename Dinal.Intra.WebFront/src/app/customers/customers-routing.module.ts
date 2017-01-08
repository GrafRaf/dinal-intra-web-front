import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent }   from './customers/customers.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CustomersComponent,
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
export class CustomersRoutingModule {}
