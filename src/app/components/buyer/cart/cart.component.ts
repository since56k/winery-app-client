import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { CartService } from '../../../services/buyer/cart.service';
import { ProductsService } from '../../../services/product/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

	product;
	user: any;
	cartItems = [];
  cartItemsId = [];
  cartTotal = 0;
  orderItems = []
  subscriptions = [];

  constructor( 	
  	private cartService: CartService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log("so that i can break point");
  }



  ngOnInit() {

  	this.user = this.authService.getUser();
      let subscription = this.authService.userChange$.subscribe((user) => {
        this.user = user;
				this.cartService.getCart(user.id)
        	.subscribe((data) => {
        	this.cartItems = data.current_cart
        //this.calculateTotal()
        	console.log(this.cartItems)
      });

    });

   	this.subscriptions.push(subscription);
     

	}

	addToCart() {
        
    let cartItem = {
      productId: '1',
      ordered_color: '5',
      ordered_size: '6',
    }

    let userId = this.user.id
    console.log(userId)
      this.cartService.addToCart(cartItem, userId)
  }


	ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}




