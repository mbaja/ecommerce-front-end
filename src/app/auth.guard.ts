import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private http : HttpClient) {}

	authenticated;
	type;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

  	let url : string = state.url;

  	if (url === '/login')	{

  	}
  	else if (url === '/register')	{

  	}
  	else if (url === '/dashboard')	{

  	}
  	else if (url.indexOf('/item/') >= 0)	{

  	}
  	else if (url === '/cart') 	{

  	}
  	else if (url === '/checkout')	{

  	}
  	else if (url === '/myaccount') {

  	}
  	else if (url === '/bucci') {

  	}
  	else if (url.indexOf('/review/') >= 0) {

  	}
  	else if (url === '/store') {

  	}
  	else if (url.indexOf('/vendor/') >= 0) {

  	}
  	else {

  	}

  	this.loggedIn();
  	this.getUserType();

  	console.log("Auth URL", url);
  	console.log("Auth loggedIn", this.authenticated);
  	console.log("Auth type", this.type);

    return true;
  }

  loggedIn() {

  	this.authenticated = false;

  	this.http.get('http://localhost:3000/loggedin', { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      
      this.authenticated = true;
      
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        //this.flashMessage.danger('Invalid login.', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        //this.flashMessage.danger('Invalid login.', {delay : 3000});
      }
    }); 
  }

  getUserType() {

  	this.type = "";

  	this.http.get('http://localhost:3000/profile', { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      
      var type_acc = data['User'].Type_Account;

    	this.type = type_acc;
      
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        //this.flashMessage.danger('Invalid login.', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        //this.flashMessage.danger('Invalid login.', {delay : 3000});
      }
    }); 

    

  }
}
