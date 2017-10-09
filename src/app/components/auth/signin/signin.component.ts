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
 
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    

  }

  login() {
    this.error = null;
    this.auth.login(this.user).subscribe(
      (user) => {
      	if(user.id && user.role === this.roles[0].value){
          this.user = user;
          console.log('login as buyer');
            this.router.navigate(['/buyer/buyer-profile/' + this.user.id]);
          } else if(user.id && user.role === this.roles[1].value){
            this.user = user;
            console.log('login as company');
             this.router.navigate(['/company/company-profile/' + this.user.id]);
          } else {this.message = user.message} 
      },
      (err) => this.error = err
    );
  }

}

// else if(user.role === this.roles[1].value){
//             this.user = user;
//             console.log('login as company')
//             //this.router.navigate(['/company/company-profile/' + this.user.id]);
//           } else {console.log('somenthig was wrong') }


// login() {
//     this.error = null;
//     this.auth.login(this.user).subscribe(
//       (user) => {
//         if(user.id){
//           if(user.role === this.roles[0].value){
//             this.user = user;
//             console.log('login as buyer')
//             console.log(this.user.role)
//             //this.router.navigate(['/buyer/buyer-profile/' + this.user.id]);
//           } else if(user.role === this.roles[1].value){
//             this.user = user;
//             console.log('login as company')
//             //this.router.navigate(['/company/company-profile/' + this.user.id]);
//           } else {console.log('somenthig was wrong') }
//         } else {this.message = user.message}   
//       },
//       (err) => this.error = err
//     );
//   }








