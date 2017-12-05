import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Item } from '../objects/item';

import { INVENTORY } from '../objects/mock-items';    // HARDCODED VALUES TO BE DELETED

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  starRating:number;
  textReview:string;
  reviewItem:Item;
  inv:Item[]=INVENTORY;

  constructor(private router:Router, private user:UserService) { }

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
  }

  submitReview() {
    console.log("this.textReview.length: ..", this.textReview.length,  "..");
  	console.log("Star Rating: ", this.starRating);
  	console.log("Text Review: ", this.textReview);
    if(this.textReview.length == 0){
      alert("Enter review in text field!")
    } else {
  	  alert("Review Submitted!");   
  	  this.router.navigate(['dashboard']);
    }
  }

}
