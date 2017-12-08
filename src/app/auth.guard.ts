import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private http : HttpClient, private user : UserService, private router : Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

  	let url : string = state.url;
  	let username : string = this.user.getUserLoggedIn();
  	let type : string = this.user.getUserType();

  	if (url === '/login')	{
  		return true;
  	}
  	else if (url === '/register')	{
  		return true;
  	}
  	else if (url === '/dashboard')	{
  		if (username !== "None")	{
  			return true;
  		}
  		else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}
  	else if (url.indexOf('/item/') >= 0)	{
  		if (username !== "None")	{
  			return true;
  		}
  		else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}
  	else if (url === '/cart') 	{
  		if (username !== "None")	{
  			if (type === "Customer")	{
  				return true;
  			}
  			else {
  				this.router.navigate(['/dashboard']);
  				return false;
  			}
  		}
  		else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}
  	else if (url === '/checkout')	{
  		if (username !== "None")	{
  			if (type === "Customer")	{
  				return true;
  			}
  			else {
  				this.router.navigate(['/dashboard']);
  				return false;
  			}
  		}
  		else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}
  	else if (url === '/myaccount') {
  		if (username !== "None")	{
  			if (type === "Customer")	{
  				return true;
  			}
  			else {
  				this.router.navigate(['/dashboard']);
  				return false;
  			} 
  		}
  		else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}
  	else if (url === '/bucci') {
  		if (username !== "None")	{
  			return true;
  		}
  		else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}
  	else if (url.indexOf('/review/') >= 0) {
  		if (username !== "None")	{
  			if (type === "Customer")	{
  				return true;
  			}
  			else {
  				this.router.navigate(['/dashboard']);
  				return false;
  			}
  		}
  		else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}
  	else if (url === '/store') {
  		if (username !== "None")	{
  			if (type === "Vendor")	{
  				return true;
  			}
  			else {
  				this.router.navigate(['/dashboard']);
  				return false;
  			}
  		}
  		else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}
  	else if (url.indexOf('/vendor/') >= 0) {
  		if (username !== "None")	{
  			return true;
  		}
  		else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}
  	else {
  		this.router.navigate(['/login']);
  		return false;
  	}

  }

  

   
}
