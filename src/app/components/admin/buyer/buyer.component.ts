import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyerService } from '../../../services/buyer/buyer.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css'],
  providers: [BuyerService]
})
export class BuyerComponent implements OnInit {

	buyers: any;

  constructor(
  	private route: ActivatedRoute,
  	private buyerService: BuyerService
  	) { }

  ngOnInit() {
    this.getListBuyer();
  }

  getListBuyer(){
    this.buyerService.getListBuyer()
    .subscribe((buyer) => {
      this.buyers = buyer;
    });
  }
}




