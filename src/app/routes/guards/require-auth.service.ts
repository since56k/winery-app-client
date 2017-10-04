import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class RequireAuthService  implements CanActivate {

  canActivate() {
    return true;
  }

}
