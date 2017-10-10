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
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit, OnDestroy { 

  sliderValue:number = 20;

  // item:Array<any> = [{
  //     name: 'Justin Bieber',
  //     price: 21
  //   }, {
  //     name: 'Miley Cyrus',
  //     price: 23
  //   }, {
  //     name: 'John Legend',
  //     price: 37
  //   }, {
  //     name: 'Betty White',
  //     price: 94
  //   }, {
  //     name: 'Roger Waters',
  //     price: 72
  //   }, {
  //     name: 'Larry Pprice',
  //     price: 42
  //   }];

  @Input() buyer: any

  storeItems: any;

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
          res => {
            this.storeItems = res;
            console.log(this.storeItems)
          },
          
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
    