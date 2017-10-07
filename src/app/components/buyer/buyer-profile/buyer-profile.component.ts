import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { User } from '../../../models/user.model';

//Services
import { BuyerService } from '../../../services/buyer/buyer.service';
import { AuthService } from '../../../services/auth/auth.service';

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

	buyer: any;

  user: User;

  message: any;


  constructor(
  	private route: ActivatedRoute,
  	private buyerService: BuyerService,
    private authService: AuthService,
    private router: Router
  ) {}
    


  ngOnInit() {
      //get user from sigin
      this.user = this.authService.getUser();
      let subscription = this.authService.userChange$.subscribe((user) => {
        this.user = user;
      });

      this.subscriptions.push(subscription);

      //call get buyer if i get param from route
      this.route.params.subscribe(params => {
        this.getBuyer(params['id']);
 		  })
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

  handleUpdateBuyer(form) {
    const editBuyer = { id: this.user.id, username: form.value.username, email: form.value.email, role: form.value.role };
      this.buyerService.editBuyer(editBuyer)
      .subscribe(
        res => {
        this.message = res.message; 
        this.getBuyer(this.user.id)
      },
        error => {
            console.log('error to upload buyer');
      });
   
    //this.router.navigate(['buyer/buyer-profile/'+this.user.id]);
  }


  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  logout() {
    this.authService.logout().subscribe();
      this.router.navigate(['/']);
  }
}




