import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { CartService } from '../../../services/buyer/cart.service';
import { ProductsService } from '../../../services/product/products.service';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



