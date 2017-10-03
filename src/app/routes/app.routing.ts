import { Routes } from '@angular/router';

//Routes for Admin
import { LoginAdminComponent } from '../components/admin/login-admin/login-admin.component';
import { AdminComponent } from '../components/admin/admin/admin.component';
import { BuyerComponent } from '../components/admin/buyer/buyer.component';
import { CompanyComponent } from '../components/admin/company/company.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/buyers', component: BuyerComponent },
  { path: 'admin/companies', component: CompanyComponent },
  { path: 'login-admin', component: LoginAdminComponent },

  // * Buyer Routes * //
];





