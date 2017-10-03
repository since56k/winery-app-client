import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../../services/company/company.service';

@Component({
  selector: 'app-comapny',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

	companies: any;
  message: any;


  constructor(
  	private route: ActivatedRoute,
  	private companyService: CompanyService
  	) { }

  ngOnInit() {
    this.getListCompany();
  }

  getListCompany(){
    this.companyService.getListCompany()
    .subscribe((company) => {
      this.companies = company;
    });
  }

  handleNewCompany(form) {
    const newCompany = {username: form.value.username, email: form.value.email, role: form.value.role };
      this.companyService.newCompany(newCompany).subscribe(res => {
      this.message = res.message; 

      this.getListCompany();
    });
  }
}









 
  



