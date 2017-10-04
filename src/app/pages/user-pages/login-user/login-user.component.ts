import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

	user = new User({
    username: '',
    password: ''
  });

  error: string;
 


  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.error = null;
    this.auth.login(this.user).subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }

}
