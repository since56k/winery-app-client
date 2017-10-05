import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	user = new User({
    username: '',
    password: ''
  });

  error: string;
  message: any;
 
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.error = null;
    this.auth.login(this.user).subscribe(
      (user) => {
      	if(user.id){
      		this.user = user,
      		this.router.navigate(['/buyer/buyer-profile/' + this.user.id]);
      	} else {this.message = user.message} 	
      },
      (err) => this.error = err
    );
  }
}







