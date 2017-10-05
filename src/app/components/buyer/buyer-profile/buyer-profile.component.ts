import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../../models/user.model';

//Services
import { BuyerService } from '../../../services/buyer/buyer.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {

	buyer: any;
  loading: boolean = true;
  anon: boolean;
  user: User;
  formsVisible: boolean = false;

  constructor(
  	private route: ActivatedRoute,
  	private buyerService: BuyerService,
    private authService: AuthService
  	) { }

  private setUser(user: User | null) {
    this.loading = false;
    this.user = user;
    this.anon = !user;
  }

  ngOnInit() {
      this.authService.userChange$.subscribe((user) => {
      this.setUser(user)
      });

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

  toggleForms() {
    this.formsVisible = !this.formsVisible;
  }

}

