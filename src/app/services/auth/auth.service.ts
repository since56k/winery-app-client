import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';

const apiUrl = environment.apiUrl + '/auth';

@Injectable()
export class AuthService {

  public isAuthenticated = false;
  private initialized: boolean;
  private user: User | null;
  private userChange: Subject<User | null> = new Subject();

  // Observable string stream
  userChange$ = this.userChange.asObservable();

  constructor(private http: Http, private router: Router) {}

  private setUser(user: User = null) {
    this.user = user;
    this.userChange.next(user);
  }

  getUser() : User | null {
    return this.user;
  }

  signup(user: User) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/signup', user, options)
      .map(res => {
        let user = new User(res.json());
        this.setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      });
  }

  login(user: User) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/signin', user, options)
      .map(res => {
        let user = new User(res.json());
        this.setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      });
  }

  logout() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/logout', {}, options)
    .map(res => {
      this.setUser();
      localStorage.removeItem('user');
      console.log('logout')
      return null;
    });
  }

  me() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + '/me', options)
      .map(res => {
        let user = new User(res.json());
        this.setUser(user);
        return user;
      }, (err) => {
        if(err.status=== 404) {
          console.log(err.status)
          this.setUser();
        }
      })
  }

  initialize() {
    if (!this.initialized) {
      this.initialized = true;
      this.me().subscribe();
    }
  }



}









