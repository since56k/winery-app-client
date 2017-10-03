import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute }    from "@angular/router";

//Services
import { CompanyService } from '../../../services/company/company.service';

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

	companies: any;
  message: any;
  companyId: any;

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
  	private companyService: CompanyService
  	) { }

  ngOnInit() {
    this.getListCompany();
  }

  getListCompany(){
    this.companyService.getListCompany()
    .subscribe((company) => {
      this.companies = company;
      console.log(company)
    });
  }

  handleNewCompany(form) {
    const newCompany = {username: form.value.username, email: form.value.email, role: form.value.role };
      this.companyService.newCompany(newCompany)
      .subscribe(res => {
        this.message = res.message; 
        this.getListCompany();
    });
  }

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









 
  



