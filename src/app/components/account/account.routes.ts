import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';

export const USER_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit', component: EditComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];
