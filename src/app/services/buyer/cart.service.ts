import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl + '/api';


@Injectable()
export class CartService {

  private subject = new Subject<any>();

  counter = 0;

  constructor(
    private http: Http,

  ) { }

	getCart(id) {
	  return this.http.get(`${apiUrl}/buyers/cart/${id}`)
	      .map((res) => res.json());
	}

	getUserOrders(id){
	    return this.http.get(`${apiUrl}/buyers/orders/${id}`)
	      .map((res) => res.json());
	}

	addToCart(cartItem, userId) {
			 return this.http.put(`${apiUrl}/buyers/addToCart`, {cartItem, userId} )
	         .map((res) => res.json())
	}

	sendCartChanged() {
	  this.subject.next({"changed": true});
	}

	getCartChanged(): Observable<any> {
	  return this.subject.asObservable();
	}

	incrementCounter() {
	  console.log("increment counter");
	  this.counter++;
	}

}
