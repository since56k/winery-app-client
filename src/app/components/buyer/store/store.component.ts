import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../../models/user.model';

//Services
import { BuyerService } from '../../../services/buyer/buyer.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Item } from '../../../services/buyer/item';
import { ItemService } from '../../../services/buyer/item.service';

@Component({
  selector: 'store-app',
  templateUrl: './store.component.html', 
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy { 

  @Input() buyer: any

  storeItems: Item[] = [];

  subscriptions = [];

  user: User;

  message: string;

   constructor(
    private itemService: ItemService,
    private authService: AuthService)
    { }


  ngOnInit() {
      this.getStoreItems();

      //Observable
      this.user = this.authService.getUser();
        let subscription = this.authService.userChange$.subscribe((user) => {
        this.user = user;
      });
      this.subscriptions.push(subscription);
   }
   
   getStoreItems() {
      this.itemService.getItems().subscribe(
          data => this.storeItems = data,
          error =>  this.message = error);
   }

   addItemInCart(item) {
	    this.itemService.addItem(item, this.user.id).subscribe(
        res => {
        this.message = res.message; 
        this.itemService.changeMessage('Observable for update the cart');
        console.log('update cart')
      },
        error => {
        console.log('error to upload cart');
      });
   }

   ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
    