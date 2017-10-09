import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequireAuthService  implements CanActivate {

	user:any;
  me:any;
  auth:boolean;

	constructor(
  	private authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(): boolean {
      this.me = this.authService.me();
      if(this.me){
        return true;
      } else {
        this.router.navigate(['/auth/signin']);
        console.log('logout')
        return false;
      }
  }
    
}

