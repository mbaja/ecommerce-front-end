import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Item } from '../objects/item';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { FlashMessage } from 'angular-flash-message';

//import { INVENTORY } from '../objects/mock-items';    // HARDCODED VALUES TO BE DELETED

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  starRating:number;
  textReview:string;
  reviewItem:Item;
  orderID:number;
  item;

  constructor(private router:Router, private user:UserService, private route : ActivatedRoute, private http : HttpClient, private flashMessage : FlashMessage) { }

  ngOnInit() {
    /*this.textReview = "";
  	this.starRating = 1;
    this.reviewItem = this.user.getReviewItem();
    console.log("Review reviewItem: ", this.reviewItem);
    // loop and find item
    for (let i of this.inv) {
      console.log(i.itemID);
      if(i.itemID == this.user.getReviewItem()) {
        this.reviewItem = {
          price:        i.price,
          product_name: i.product_name,
          type:         i.type,
          itemID:       i.itemID,
          product_desc: i.product_desc,
          quantity:     i.quantity,    
          picture:      i.picture
        };
        return
      }
    }
    console.log("Item Not Found");*/
    this.route.params.subscribe( params => {
        this.orderID = params['id'];

        this.http.get('http://localhost:3000/review/' + this.orderID, { headers : 
        new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }), withCredentials: true }).subscribe(data => {
          console.log("Review Item Data", data);
          this.item = data;
        }, (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
            this.flashMessage.danger('Can\'t add the review', {delay : 3000});
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            this.flashMessage.danger('Can\'t add the review.', {delay : 3000});
          }
        }); 
    });


  }

  submitReview() {
    console.log("this.textReview.length: ..", this.textReview.length,  "..");
  	console.log("Star Rating: ", this.starRating);
  	console.log("Text Review: ", this.textReview);
    if(this.textReview.length == 0){
      alert("Enter review in text field!")
    } else {


      this.http.post('http://localhost:3000/review', {rating : this.starRating, review_text : this.textReview, order_id : this.orderID}, { headers : 
        new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }), withCredentials: true }).subscribe(data => {
          console.log("Review Post Data", data);
          this.router.navigate(['/dashboard']);
          this.user.setShowMessage('Added Review Successfully');
        }, (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
            this.flashMessage.danger('Can\'t add the review', {delay : 3000});
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            this.flashMessage.danger('Can\'t add the review.', {delay : 3000});
          }
    }); 

  	  //alert("Review Submitted!");   
  	  //this.router.navigate(['dashboard']);
    }
  }

}
