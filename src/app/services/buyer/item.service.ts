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

	//url = "http://localhost:4200/assets/data/products.json";


	constructor(private http:Http) { 
	   this.observableItems = this.http.get(`${apiUrl}/products`)
	   .map((res: Response) => res.json());
	   		this.observableItems.subscribe(
	      	data => this.allItems = data,
					error =>  this.errorMessage = <any>error);
	}

	getItems(): Observable<Item[]> {
	   return this.observableItems;
	}

	getSelectedItems(): Item[] {
	   return this.selectedItems;
	}	

		//  return this.http.put(`${apiUrl}/buyers/update/${buyer.id}`, buyer)
  //     .map((res) => res.json());
  // }

	addItem(idItem, userId) {
  	console.log('find', idItem, userId)
  				let item = this.allItems.find(ob => ob._id === idItem);
       		 return this.http.put(`${apiUrl}/buyers/add/${userId}`, item  )
			 		 	.map((res) => res.json());

    //    if (this.selectedItems.indexOf(item) < 0) {	   
	   //    this.selectedItems.push(item);

	   // }
  }

  removeItem(id:number): void {
	  let item = this.selectedItems.find(ob => ob._id === id);
	  let itemIndex = this.selectedItems.indexOf(item);
       this.selectedItems.splice(itemIndex, 1);
  }

}