import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../../models/user.model';

//Services
import { BuyerService } from '../../../services/buyer/buyer.service';
import { AuthService } from '../../../services/auth/auth.service';
import { CompanyService } from '../../../services/company/company.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit, OnDestroy {



  public roles = [
    { value: 'Buyer', display: 'Buyer' },
    { value: 'Company', display: 'Company' },
    { value: 'Guest', display: 'Guest' }
  ];

  subscriptions = [];

  updateBuyer = []

  user: User;

  message: any;

  loading: string;

  buyer: any;

  companies: any;

  auth: boolean = true;
  showHide: boolean = true;


  constructor(
    private buyerService: BuyerService,
  	private companyService: CompanyService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
    


  ngOnInit() {
     
    this.auth = false;

    this.user = this.authService.getUser();
      let subscription = this.authService.userChange$.subscribe((user) => {
      this.user = user;
    });
    this.subscriptions.push(subscription);

    this.route.params.subscribe(params => {
      this.getBuyer(params['id']);
 		})

    this.getListCompany();
	}

  getBuyer(id) {
    //Guard id
    if(id){
      this.buyerService.getBuyer(id)
      .subscribe((buyer) => {
        this.buyer = buyer;
       })
    }   
  }

  getListCompany(){
    this.companyService.getListCompany()
    .subscribe((company) => {
      this.companies = company;
    });
  }

  handleUpdateBuyer(form) {
    const editBuyer = { id: this.user.id, username: form.value.username, email: form.value.email, role: form.value.role };
      this.buyerService.editBuyer(editBuyer)
      .subscribe(
        res => {
        this.message = res.message; 
        this.getBuyer(this.user.id);
        this.showHide = true;

      },
        error => {
            console.log('error to upload buyer');
      });
   
  }

  displayForm(){
     this.showHide = false;
  }


  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  logout() {
    this.authService.logout().subscribe();
      this.router.navigate(['/']);
  }

}




