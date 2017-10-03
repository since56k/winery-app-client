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

  constructor() { }

  ngOnInit() {

  }

}
