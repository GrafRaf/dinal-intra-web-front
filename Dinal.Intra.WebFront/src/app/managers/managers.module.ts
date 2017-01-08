import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers/managers.component';

@NgModule({
  imports: [
    CommonModule,
    ManagersRoutingModule
  ],
  declarations: [ManagersComponent]
})
export class ManagersModule { }
