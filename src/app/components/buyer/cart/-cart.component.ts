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
  message: any;
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
      productId: '5',
      ordered_color: '6',
      ordered_size: '8',
    }

    let userId = this.user.id
    console.log(userId)
      this.cartService.addToCart(cartItem, userId).subscribe(
        res => {
        this.message = res.message; 
        //this.getBuyer(this.user.id)
      },
        error => {
            console.log('error to upload buyer');
      });
  }



  // handleUpdateBuyer(form) {
  //   const editBuyer = { id: this.user.id, username: form.value.username, email: form.value.email, role: form.value.role };
  //     this.buyerService.editBuyer(editBuyer)
      // .subscribe(
      //   res => {
      //   this.message = res.message; 
      //   this.getBuyer(this.user.id)
      // },
      //   error => {
      //       console.log('error to upload buyer');
      // });
   
  // }


	ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}




