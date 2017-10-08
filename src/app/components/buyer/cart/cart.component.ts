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
   errorMessage: any;

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
        this.getItemsForCart(params['id']);
       })

   }


   getItemsForCart(id) {
      this.itemService.getSelectedItems(id).subscribe(
        res => {
        this.cartItems = res.cartItems; 
        console.log('CART ITEMS', this.cartItems)
      },
        error => {
            console.log('error to upload buyer');
      });
   }

   
   // removeItemFromCart(id:number) {
   //      this.itemService.removeItem(id);
   // }

  
}
    