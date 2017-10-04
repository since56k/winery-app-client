import { Routes } from '@angular/router';

//Routes for Admin
import { LoginAdminComponent } from '../pages/admin-pages/login-admin/login-admin.component';

import { LoginUserComponent } from '../pages/user-pages/login-user/login-user.component';
import { SignupUserComponent } from '../pages/user-pages/signup-user/signup-user.component';

import { AdminComponent } from '../components/admin/admin/admin.component';
import { BuyerComponent } from '../components/admin/buyer/buyer.component';
import { CompanyComponent } from '../components/admin/company/company.component';

import { BuyerProfileComponent } from '../components/buyer/buyer-profile/buyer-profile.component';
import { CompanyProfileComponent } from '../components/company/company-profile/company-profile.component';

import { RequireAuthService } from './guards/require-auth.service';



export const routes: Routes = [
  // * Default Route * //
  { path: '', redirectTo: 'admin', pathMatch: 'full' },

	// * Admin Routes * //
  { path: 'admin', component: AdminComponent },
  { path: 'admin/buyers', component: BuyerComponent },
  { path: 'admin/companies', component: CompanyComponent },
  { path: 'login-admin', component: LoginAdminComponent },

  // * User share Routes * //
  { path: 'auth/signin', component: LoginUserComponent },
  { path: 'auth/signup', component: SignupUserComponent },

  // * Buyer Routes * //
  //{ path: 'buyer/buyer-profile/:id', component: BuyerProfileComponent },

  { path: 'buyer/buyer-profile', canActivate: [RequireAuthService], children: [
    { path: '', component: BuyerProfileComponent },
    { path: ':id', component: BuyerProfileComponent }
  ] },

  // * Company Routes * //
  { path: 'company/company-profile/:id', component: CompanyProfileComponent },

  // * Redirect if not found * //
  { path: '**', redirectTo: 'admin', pathMatch: 'full' },

];


 


