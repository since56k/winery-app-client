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
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { BuyerComponent } from './components/admin/buyer/buyer.component';
import { CompanyComponent } from './components/admin/company/company.component'
import { NavbarAdminComponent } from './components/admin/navbar-admin/navbar-admin.component';

//Services
import { AdminService } from './services/admin/admin.service';
import { BuyerService } from './services/buyer/buyer.service';
import { CompanyService } from './services/company/company.service';

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
    NavbarAdminComponent
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
    CompanyService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
