import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl + '/api';

@Injectable()
export class ProductsService {
  
  constructor(private http: Http) {}

  getListProduct() {
    return this.http.get(`${apiUrl}/products`)
      .map((res) => res.json());
  }
  
  getProduct(id) {
    return this.http.get(`${apiUrl}/products/${id}`)
      .map((res) => res.json());
  }

  newProduct(product) {
  	console.log(product)
    return this.http.post(`${apiUrl}/products/newproduct`, product)
      .map((res) => res.json());
  }
  
  editProduct(product) {
    return this.http.put(`${apiUrl}/products/${product.id}`, product)
      .map((res) => res.json());
  }
  
  removeProduct(id) {
    return this.http.delete(`${apiUrl}/products/delete/${id}`)
      .map((res) => res.json());
  }
}



