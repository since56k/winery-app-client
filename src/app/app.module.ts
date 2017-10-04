//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

//Routes
import { routes } from './routes/app.routing';

//Admin Compoenents 
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { BuyerComponent } from './components/admin/buyer/buyer.component';
import { CompanyComponent } from './components/admin/company/company.component'

//Buyer Components
import { BuyerProfileComponent } from './components/buyer/buyer-profile/buyer-profile.component';

//Company Components
import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';

//Pages
import { NavbarAdminComponent } from './pages/admin-pages/navbar-admin/navbar-admin.component';
import { LoginAdminComponent } from './pages/admin-pages/login-admin/login-admin.component';
import { LoginUserComponent } from './pages/user-pages/login-user/login-user.component';

//Services
import { AdminService } from './services/admin/admin.service';
import { BuyerService } from './services/buyer/buyer.service';
import { CompanyService } from './services/company/company.service';

//Auth services
import { AuthService } from './services/auth/auth.service';
import { RequireAuthService } from './routes/guards/require-auth.service';

//Third parts module
import { FileSelectDirective} from "ng2-file-upload";
import { NavbarUserComponent } from './pages/user-pages/navbar-user/navbar-user.component';
import { FooterUserComponent } from './pages/user-pages/footer-user/footer-user.component';
import { SignupUserComponent } from './pages/user-pages/signup-user/signup-user.component';


@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    AdminComponent,
    LoginAdminComponent,
    BuyerComponent,
    CompanyComponent,
    NavbarAdminComponent,
    BuyerProfileComponent,
    CompanyProfileComponent,
    LoginUserComponent,
    NavbarUserComponent,
    FooterUserComponent,
    SignupUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [
    AdminService,
    BuyerService,
    CompanyService,
    RequireAuthService,
    AuthService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
