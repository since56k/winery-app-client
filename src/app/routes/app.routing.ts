import { Routes } from '@angular/router';

//Routes for Admin
import { LoginAdminComponent } from '../components/admin/login-admin/login-admin.component';
import { AdminComponent } from '../components/admin/admin/admin.component';
import { BuyerComponent } from '../components/admin/buyer/buyer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AdminComponent },
  { path: 'buyer/:id', component: BuyerComponent },
  { path: 'login', component: LoginAdminComponent },
];




