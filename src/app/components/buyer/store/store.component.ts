import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../../models/user.model';

//Services
import { BuyerService } from '../../../services/buyer/buyer.service';
import { AuthService } from '../../../services/auth/auth.service';
import { ItemService } from '../../../services/buyer/item.service';
import { Item } from '../../../services/buyer/item';



@Component({
  selector: 'store-app',
  templateUrl: './store.component.html', 
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit, OnDestroy { 

  sliderValue:number = 20;

  @Input() buyer: any

  storeItems: any;

  subscriptions = [];

  user: User;

  message: string;

  organic: boolean = false;

  constructor(
    private itemService: ItemService,
    private authService: AuthService
    )
  { }

  ngOnInit() {
      this.getStoreItems();

      this.user = this.authService.getUser();
        let subscription = this.authService.userChange$.subscribe((user) => {
        this.user = user;
      });
      this.subscriptions.push(subscription);
   }
   
   getStoreItems() {
      this.itemService.getItems().subscribe(
          res => {
            this.storeItems = res;
          },   
          error =>  this.message = error);
   }

   addItemInCart(item) {
	    this.itemService.addItem(item, this.user.id).subscribe(
        res => {
        this.message = res.message; 
        this.itemService.changeMessage('Observable for update the cart');
        console.log('update cart');
      },
        error => {
        console.log('error to upload cart');
      });
   }

   isOrganic(){
      this.organic = !this.organic;
    }

   ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
    