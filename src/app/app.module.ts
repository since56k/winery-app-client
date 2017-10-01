import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from "@angular/router";
import { routes } from './routes/app.routing';

//Admin Compoenents 
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { BuyerComponent } from './components/admin/buyer/buyer.component';
import { CompanyComponent } from './components/admin/company/company.component'
import { NavbarComponent } from './components/admin/navbar/navbar.component'

//Services
import { AdminService } from './services/admin/admin.service';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginAdminComponent,
    BuyerComponent,
    CompanyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
