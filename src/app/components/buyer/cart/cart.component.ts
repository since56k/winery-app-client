import { Component, OnInit } from '@angular/core';
import { Item } from '../../../services/buyer/item';
import { ItemService } from '../../../services/buyer/item.service';

@Component({
  selector: 'cart-app',
  templateUrl: './cart.component.html', 
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit { 

   cartItems: Item[] = [];



   constructor(private itemService: ItemService) { }

   ngOnInit(): void {
        this.getItemsForCart();
   }

   getItemsForCart(): void {
        this.cartItems = this.itemService.getSelectedItems();
		console.log(this.cartItems);
   } 
   
   removeItemFromCart(id:number): void {
        this.itemService.removeItem(id);
   }
}
    