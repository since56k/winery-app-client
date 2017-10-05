import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

	user = new User({
    username: '',
    email: '',
    password: ''
  });

  error: string;
  message: any;

  constructor(private session: AuthService, private router: Router) { }

  signup() {
     this.session.signup(this.user).subscribe(
       (data) => {
          if(data.id){
          	this.router.navigate(['/']);
          } else {this.message = data.message}
        },
        (err) => {
          this.error = err;
        });
 }

}



