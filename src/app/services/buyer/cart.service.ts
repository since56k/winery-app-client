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

  //Has api
	getCart(id) {
		console.log('api', id)
	  return this.http.get(`${apiUrl}/buyers/cart/${id}`)
	      .map((res) => res.json());
	}

	// has api
	addToCart(cartItem, userId) {
		console.log(cartItem, userId);
			 return this.http.put(`${apiUrl}/buyers/add`, {cartItem, userId} )
			 		.subscribe((res) => {
              this.incrementCounter();
              this.sendCartChanged();
            });
	}

	getUserOrders(id){
	    return this.http.get(`${apiUrl}/buyers/orders/${id}`)
	      .map((res) => res.json());
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
