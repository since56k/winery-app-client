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
  data: any;
  error: string;
  message: string;
  amount: number;
  price: number;
  sumTotal: number;
   
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
      })

      this.getItemsForCart(this.user); 

          
      //Observable
      this.itemService.currentMessage.subscribe(message => {
        this.message = message;
        this.getItemsForCart(this.user);
      }, error => {
          console.log('error')
      });


   }

   getItemsForCart(id) {
      this.itemService.getSelectedItems(id).subscribe(
        res => {
          this.amount = res.amount; 
          this.cartItems = res.cartItems; 
          this.calculateTotal();
      },
        error => {
            console.log('error to upload in cart');
      });
   }

   calculateTotal() {
     this.sumTotal = this.cartItems.reduce(function(sum, d) {
        return sum + d.price;
    }, 0);
  }
  
   removeItemFromCart(itemId) {
      this.itemService.removeItem(itemId, this.user).subscribe(
        res => {
          this.message = res.message; 
          this.getItemsForCart(this.user);
        console.log('Delete item in cart', this.message)
      },
        error => {
            console.log('error to delete item');
      });
   }

  
}
    