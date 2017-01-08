import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent }   from './not-found/not-found.component';
//import { CanDeactivateGuard }      from './can-deactivate-guard.service';
//import { AuthGuard }               from './auth-guard.service';

const appRoutes: Routes = [
//   {
//     path: 'compose',
//     component: ComposeMessageComponent,
//     outlet: 'popup'
//   },
//   {
//     path: 'admin',
//     loadChildren: 'app/admin/admin.module#AdminModule',
//     canLoad: [AuthGuard]
//   },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'customers',
    loadChildren: 'app/customers/customers.module#CustomersModule'
  },
  {
    path: 'employees',
    loadChildren: 'app/employees/employees.module#EmployeesModule'
  },
  {
    path: 'managers',
    loadChildren: 'app/managers/managers.module#ManagersModule'
  },
  {
    path: 'orders',
    loadChildren: 'app/orders/orders.module#OrdersModule'
  },
  {
    path: 'reports',
    loadChildren: 'app/reports/reports.module#ReportsModule'
  },
  {
    path: 'settings',
    loadChildren: 'app/settings/settings.module#SettingsModule'
  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
//   providers: [
//     CanDeactivateGuard
//   ]
})
export class AppRoutingModule {}