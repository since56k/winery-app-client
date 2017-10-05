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

  subscriptions = [];

	buyer: any;

  user: User;

  constructor(
  	private route: ActivatedRoute,
  	private buyerService: BuyerService,
    private authService: AuthService,
    private router: Router
  ) {
    console.log("so that i can break point");
  }


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

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  logout() {
    this.authService.logout().subscribe();
      this.router.navigate(['/']);
  }
}




