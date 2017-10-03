import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl + '/api';

@Injectable()
export class CompanyService {
  
  constructor(private http: Http) {}

  getListCompany() {
    return this.http.get(`${apiUrl}/companies`)
      .map((res) => res.json());
  }
  
  getCompany(id) {
    return this.http.get(`${apiUrl}/companies/${id}`)
      .map((res) => res.json());
  }

  newCompany(company) {
    return this.http.post(`${apiUrl}/companies/newcompany`, company)
      .map((res) => res.json());
  }
  
  editCompany(company) {
    return this.http.put(`${apiUrl}/companies/${company.id}`, company)
      .map((res) => res.json());
  }
  
  removeCompany(id) {
    return this.http.delete(`${apiUrl}/companies/delete/${id}`)
      .map((res) => res.json());
  }
}



