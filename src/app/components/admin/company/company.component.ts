import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute }    from "@angular/router";

//Services
import { CompanyService } from '../../../services/company/company.service';

import { environment } from '../../../../environments/environment';

//Third part
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

//URL = '/api/';
const URL = 'http://localhost:3000/api/companies/newcompany';

@Component({
  selector: 'app-comapny',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

  public roles = [
    { value: 'Buyer', display: 'Buyer' },
    { value: 'Company', display: 'Company' },
    { value: 'Guest', display: 'Guest' }
  ];

  public uploader:FileUploader = new FileUploader({url: URL});

	companies: Array<{}>;
  message: string;
  companyId: string;

  apiUrl = environment.apiUrl;

  newCompany = {
    username: '',
    email: '',
    role: '',
    password: '',
    organic: Boolean,
  };

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
  	private companyService: CompanyService
  	) { }

  ngOnInit() {
    this.getListCompany();

    //Upload Images
    this.uploader.onSuccessItem = (item, response) => {
      this.message = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.message = JSON.parse(response).message;
    };
  }

  getListCompany(){
    this.companyService.getListCompany()
    .subscribe((company) => {
      this.companies = company;
      console.log(company)
    });
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', this.newCompany.username);
      form.append('email', this.newCompany.email);
      form.append('organic', this.newCompany.organic);
      form.append('password', this.newCompany.password);
      form.append('role', this.newCompany.role);
    };

    this.uploader.uploadAll();


    
    setTimeout(()=>{this.getListCompany();}, 500); 
  }

  // handleNewCompany(form) {
  //   const newCompany = {username: form.value.username, email: form.value.email, role: form.value.role };
  //     this.companyService.newCompany(newCompany)
  //     .subscribe(res => {
  //       this.message = res.message; 
  //       this.getListCompany();
  //   });
  // }

  deleteCompany(companyId) {
  if (window.confirm('Are you sure?')) {
    this.companyService.removeCompany(companyId)
      .subscribe(res => {
        this.message = res.message; 
        this.getListCompany();
      });
    }
  }

}









 
  



