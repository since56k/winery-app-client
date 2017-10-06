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

//Buyer Cart
import { CartComponent } from './components/buyer/cart/cart.component';

//Company Components
import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';

//Products
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';

//Auth Components 
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';

//Pages not working now
import { NavbarAdminComponent } from './pages/admin-pages/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './pages/user-pages/navbar-user/navbar-user.component';
import { FooterUserComponent } from './pages/user-pages/footer-user/footer-user.component';
import { LoginAdminComponent } from './pages/admin-pages/login-admin/login-admin.component';
import { LoginUserComponent } from './pages/user-pages/login-user/login-user.component';
import { SignupUserComponent } from './pages/user-pages/signup-user/signup-user.component';

//Services
import { AdminService } from './services/admin/admin.service';
import { BuyerService } from './services/buyer/buyer.service';
import { CartService } from './services/buyer/cart.service';
import { CompanyService } from './services/company/company.service';
import { ProductsService } from './services/product/products.service';

//Auth services
import { AuthService } from './services/auth/auth.service';
import { RequireAuthService } from './routes/guards/require-auth.service';

//Third parts module
import { FileSelectDirective} from "ng2-file-upload";



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
    NavbarUserComponent,
    FooterUserComponent,
    SignupUserComponent,
    SignupComponent,
    SigninComponent,
    CartComponent,
    ProductListComponent,
    ProductDetailsComponent
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
    AuthService,
    CartService,
    ProductsService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
