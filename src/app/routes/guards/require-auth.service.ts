import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class RequireAuthService  implements CanActivate {

	user:any;
  me:any;

	constructor(
  	private authService: AuthService
  ) {}
  
  canActivate() {
    this.user = this.authService.getUser();
    this.me = this.authService.me();
    if(this.me){
    	this.user = JSON.parse(localStorage.getItem('user'));
    	return true;
    } 
    return false;
  }

}
