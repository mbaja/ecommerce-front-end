import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../objects/user';
import { FlashMessage } from 'angular-flash-message';

//import { USERS } from '../objects/mock-users';    // HARDCODED VALUES TO BE DELETED

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //users = USERS;

  constructor(private router:Router, private user:UserService, private flashMessage:FlashMessage, private http: HttpClient) { }

  ngOnInit() {
  }

  loginUser(e) {
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log("Username:  ", username);
    console.log("Password:  ", password);

/*    var foundUser = false;
    for( let i of this.users) {
      if(username == i.userid && password == i.password) {
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
    } */

    this.http.post('http://localhost:3000/login', {username : username, password : password}, { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {

      this.user.setUserLoggedIn(data['User']);

      console.log("Login data", data);
      this.router.navigate(['/dashboard']);
      this.user.setShowMessage('Login Successful');
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        this.flashMessage.danger('Invalid login.', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        this.flashMessage.danger('Invalid login.', {delay : 3000});
      }
    }); 
  }
}
