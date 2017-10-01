import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
  
  //Manage Buyers
  getListBuyer() {
    return this.http.get(`${this.BASE_URL}/api/buyer`)
      .map((res) => res.json());
  }
  
  getBuyer(id) {
    return this.http.get(`${this.BASE_URL}/api/buyer/${id}`)
      .map((res) => res.json());
  }
  
  editBuyer(buyer) {
    return this.http.put(`${this.BASE_URL}/api/buyer/${buyer.id}`, buyer)
      .map((res) => res.json());
  }
  
  removeBuyer(id) {
    return this.http.delete(`${this.BASE_URL}/api/buyer/${id}`)
      .map((res) => res.json());
  }

  //Manage Companies
  getListCompany() {
    return this.http.get(`${this.BASE_URL}/api/company`)
      .map((res) => res.json());
  }
  
  getCompany(id) {
    return this.http.get(`${this.BASE_URL}/api/company/${id}`)
      .map((res) => res.json());
  }
  
  editCompany(company) {
    return this.http.put(`${this.BASE_URL}/api/company/${company.id}`, company)
      .map((res) => res.json());
  }
  
  removeCompany(id) {
    return this.http.delete(`${this.BASE_URL}/api/company/${id}`)
      .map((res) => res.json());
  }
}



