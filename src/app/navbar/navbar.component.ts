import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../objects/user';
import { FlashMessage } from 'angular-flash-message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCustomer = false;
  isVendor = false;
  
  constructor(private http: HttpClient, private router : Router, private flashMessage : FlashMessage) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/profile', { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("User data", data);

      if (data['User'].Type_Account === "Customer")  {
        this.isCustomer = true;
        this.isVendor = false;
      }
      else {
        this.isCustomer = false;
        this.isVendor = true;
      }
     
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
       
      }
    }); 
  }

  onSignOut()	{
  	this.http.get('http://localhost:3000/logout').subscribe(data => {
      console.log("Logout data", data);
      this.router.navigate(['/']);
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        this.flashMessage.danger('Invalid logout.', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        this.flashMessage.danger('Invalid logout.', {delay : 3000});
      }
    }); 
  }

}
