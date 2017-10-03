import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Services
import { CompanyService } from '../../../services/company/company.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

	company: any;

  constructor(
  	private route: ActivatedRoute,
  	private companyService: CompanyService
  	) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
    this.getCompany(params['id']);
 		})
	}

  getCompany(id) {
    this.companyService.getCompany(id)
      .subscribe((company) => {
        this.company = company;
       })
  }

}
