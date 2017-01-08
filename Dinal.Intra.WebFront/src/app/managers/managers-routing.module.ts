import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagersComponent }   from './managers/managers.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ManagersComponent,
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
export class ManagersRoutingModule {}
