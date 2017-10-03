import { Routes } from '@angular/router';

//Routes for Admin
import { LoginAdminComponent } from '../pages/admin-pages/login-admin/login-admin.component';
import { AdminComponent } from '../components/admin/admin/admin.component';
import { BuyerComponent } from '../components/admin/buyer/buyer.component';
import { CompanyComponent } from '../components/admin/company/company.component';
import { BuyerProfileComponent } from '../components/buyer/buyer-profile/buyer-profile.component';
import { CompanyProfileComponent } from '../components/company/company-profile/company-profile.component';


export const routes: Routes = [
	// * Admin Routes * //

  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/buyers', component: BuyerComponent },
  { path: 'admin/companies', component: CompanyComponent },
  { path: 'login-admin', component: LoginAdminComponent },

  // * Buyer Routes * //
  { path: 'buyer/buyer-profile/:id', component: BuyerProfileComponent },

  // * Company Routes * //
  { path: 'company/company-profile/:id', component: CompanyProfileComponent },
];





