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

  public roles = [
    { value: 'Buyer', display: 'Buyer' },
    { value: 'Company', display: 'Company' }
  ];

	user = new User({
    username: '',
    email: '',
    role: '',
    password: '',
  });

  error: string;
  message: any;

  constructor(private session: AuthService, private router: Router) { }

  signup() {
      this.session.signup(this.user).subscribe(
        (data) => {
          if(data.id && data.role === this.roles[0].value){
            console.log('log as buyer')
          	this.router.navigate(['/buyer/buyer-profile/' + data.id]);
          } else if (data.id && data.role === this.roles[1].value){
            this.router.navigate(['/company/company-profile/' + data.id]);
            console.log('log as company')
          } else {this.message = data.message}
        },
        (err) => {
          this.error = err;
      });
  }

}



