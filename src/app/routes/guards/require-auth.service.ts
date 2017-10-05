import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class RequireAuthService  implements CanActivate {

	user:any;

	constructor(
  	private authService: AuthService
  ) {}
  
  canActivate() {
    this.user = this.authService.getUser();
    if(this.user){
    	console.log(this.user)
    	return true;
    } 
    console.log('not logged')
    return false;
  }

}



