import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../../services/buyer/item';
import { ItemService } from '../../../services/buyer/item.service';

@Component({
  selector: 'store-app',
  templateUrl: './store.component.html', 
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit { 


   storeItems: Item[] = [];

   errorMessage: string;


   constructor(private itemService: ItemService) { }


   getStoreItems(): void {
	    this.itemService.getItems().subscribe(
		          data => this.storeItems = data,
				  error =>  this.errorMessage = <any>error);
   }


   ngOnInit(): void {
        this.getStoreItems();
   }


   addItemInCart(id:number): void {
	    this.itemService.addItem(id);
   }
}
    