import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Item } from "../objects/item";
import { Review } from "../objects/review";

//import { INVENTORY } from '../objects/mock-items';    // HARDCODED VALUES TO BE DELETED
//import { BUCCIREVIEWS } from '../objects/mock-reviews'// HARDCODED VALUES TO BE DELETED

import { HttpClient } from '@angular/common/http';

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

  constructor(private user:UserService, private http : HttpClient, private route : ActivatedRoute) { }

  itemQuantity:number = 0;
  item;
  //inv:Item[]=INVENTORY;
  //reviews = BUCCIREVIEWS;
  //reviews : Review[];

  ngOnInit() {

    console.log(this.user.getSelectedItem());

    this.route.params.subscribe( params => {
        this.http.get('http://localhost:3000/items/' + params['id']).subscribe(data => {
        this.item = data;
      });
    });
    

  	// loop and find item
/*  	for (let i of this.inv) {
	  console.log(i.itemID);
	  if(i.itemID == this.user.getSelectedItem()) {
	    this.item = {
		    price:        i.price,
		    product_name: i.product_name,
		    type:         i.type,
		    itemID:       i.itemID,
		    product_desc: i.product_desc,
		    quantity:     i.quantity,    
		    picture:      i.picture
  	  };
	    }
  	}
  	console.log("Selected Item: ", this.user.getSelectedItem());*/


  }

  addQuantity() {
  	if(this.item.Quantity != this.itemQuantity){
  	  this.itemQuantity += 1;	
  	}
  }

  minusQuantity() {
  	if(this.itemQuantity != 0){
  	  this.itemQuantity -= 1;
  	}
  }

  makeStars( review ) {
    var stars: number[] = [];
    var rating = review.rating;
    var count = 0;
    while(count < review.rating) {
      stars.push(0);
      count += 1;
    }
    return stars
  }
}
