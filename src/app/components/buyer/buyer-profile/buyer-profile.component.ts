import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Services
import { BuyerService } from '../../../services/buyer/buyer.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {

	buyer: any;

  constructor(
  	private route: ActivatedRoute,
  	private buyerService: BuyerService
  	) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
    this.getBuyer(params['id']);
 		})
	}

  getBuyer(id) {
    this.buyerService.getBuyer(id)
      .subscribe((buyer) => {
        this.buyer = buyer;
       })
  }

}
