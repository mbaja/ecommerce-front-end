import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";

import { Item } from '../objects/item';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  raw_items;

  vendorName = "Big Baller Brand";
  vendorDesc = "The most BUCCI shit ya can buy mother fuckers";

  constructor(private http : HttpClient, private route : ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe( params => {

      this.vendorName = params['name'];

      this.http.get('http://localhost:3000/vendor/items/' + params['name'], { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Single Vendor Item Data", data);
      this.raw_items = data;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        //this.flashMessage.danger('Can\'t add to cart', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        //this.flashMessage.danger('Can\'t add to cart.', {delay : 3000});
      }
    }); 

    this.http.get('http://localhost:3000/vendor/' + params['name'], { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Single Vendor Data", data);
      this.vendorDesc = data['Description'];
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        //this.flashMessage.danger('Can\'t add to cart', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        //this.flashMessage.danger('Can\'t add to cart.', {delay : 3000});
      }
    }); 

    });

    
  }
}
