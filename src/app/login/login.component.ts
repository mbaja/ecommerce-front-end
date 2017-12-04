import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../objects/user';
import { FlashMessage } from 'angular-flash-message';

import { USERS } from '../objects/mock-users';    // HARDCODED VALUES TO BE DELETED

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users = USERS;

  constructor(private router:Router, private user:UserService, private flashMessage:FlashMessage) { }

  ngOnInit() {
  }

  loginUser(e) {
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log("Username:  ", username);
    console.log("Password:  ", password);

    var foundUser = false;
    for( let i of this.users) {
      if(username == i.userID && password == i.password) {
        this.user.setUserLoggedIn(username);
        this.router.navigate(['dashboard']);
        foundUser = true;
      }
    }
    if(!foundUser) {
      this.flashMessage.danger('Not a valid user!', {
        delay: 5000,
        cssClass: 'success-class', 
    });
    } 
  }
}
