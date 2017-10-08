import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Item } from '../../../services/buyer/item';
import { ItemService } from '../../../services/buyer/item.service';
import { BuyerService } from '../../../services/buyer/buyer.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'cart-app',
  templateUrl: './cart.component.html', 
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit { 

   cartItems: any;
   user: any;
   subscriptions: any;
   error: any;
   data: any;
   message: any;

   @Input() buyer: any


   constructor(
     private itemService: ItemService, 
     private authService: AuthService, 
     private buyerService: BuyerService,
     private route: ActivatedRoute,
     ) 
   { }

   ngOnInit() {
        this.route.params.subscribe(params => {
        this.user = params['id'];
        this.getItemsForCart(this.user);
        
       })

        //*OBSERVABLE*//
       //this.itemService.events$.forEach(event => console.log(event));

   }

   getItemsForCart(id) {
      this.itemService.getSelectedItems(id).subscribe(
        res => {
          this.cartItems = res.cartItems; 
          console.log('CART ITEMS', this.cartItems)
      },
        error => {
            console.log('error to upload in cart');
      });
   }

   
   removeItemFromCart(itemId) {
      this.itemService.removeItem(itemId, this.user).subscribe(
        res => {
          this.data = res; 
        console.log('Delete item in cart', this.data)
      },
        error => {
            console.log('error to delete item');
      });
   }

  
}
    