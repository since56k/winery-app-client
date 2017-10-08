import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Item } from './item';

//import { Subject } from 'rxjs/Subject';

import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl + '/api';



@Injectable()
export class ItemService {

  // private _subject = new Subject<any>();
  data: any;
  error: any;

	constructor(private http:Http) 
	{}

	//OBSERVABLE FOR UPDATE CART
	// newEvent(event) {
 //    this._subject.next(event);
 //  }

 //  get events$ () {
 //    return this._subject.asObservable();
 //  }
  //**//

	getItems() {
	   return this.http.get(`${apiUrl}/products`)
	   		.map((res) => res.json());
	}

	getSelectedItems(userId) {
			return this.http.get(`${apiUrl}/buyers/cart/${userId}`)
      .map((res) => res.json());
	   // return this.selectedItems;
	}	

	addItem(item, userId) {
       		 return this.http.put(`${apiUrl}/buyers/add/${userId}`, item  )
			 		 	.map((res) => res.json());
  }

  removeItem(item, userId) {
	  return this.http.put(`${apiUrl}/buyers/cart/delete/`, {item, userId} )
	  	.map((res) => res.json());
  }

}