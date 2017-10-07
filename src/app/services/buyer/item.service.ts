import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Item } from './item';

import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl + '/api';

@Injectable()
export class ItemService {

  observableItems: Observable<Item[]>;
	allItems: Item[] = [];
  selectedItems: Item[] = [];
	errorMessage: string;



	constructor(private http:Http) 
	{}


	getItems() {
	   return this.http.get(`${apiUrl}/products`)
	   		.map((res) => res.json());
	}

	getSelectedItems(userId) {
		console.log(userId)
			return this.http.get(`${apiUrl}/buyers/cart/${userId}`)
      .map((res) => res.json());
	   // return this.selectedItems;
	}	

	addItem(item, userId) {
       		 return this.http.put(`${apiUrl}/buyers/add/${userId}`, item  )
			 		 	.map((res) => res.json());

			 		 	//	let item = this.allItems.find(ob => ob._id === idItem);
    //    if (this.selectedItems.indexOf(item) < 0) {	   
	   //    this.selectedItems.push(item);

	   // }
  }

  // removeItem(id:number): void {
	 //  let item = this.selectedItems.find(ob => ob._id === id);
	 //  let itemIndex = this.selectedItems.indexOf(item);
  //      this.selectedItems.splice(itemIndex, 1);
  // }

}