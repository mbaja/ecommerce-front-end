import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../objects/item';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  raw_items;
  // raw_items: Item [] = [ 
  // {
  //   Price: 12,  		// Holds the price of the particular item
  //   Product_Name: "something", // Contains the name of the item
  //   Type: "clothing", 		// Contains the type of the item (e.x. Book, Clothing, Computer, etc
  //   ItemID: 1, 		// AUTO_INCREMENT,
  //   Product_Desc: "some desc that is dope af and you cannot resist but to buy",	// Contains a short description of the item
  //   Quantity: 3,		
  //   Picture: "assets/5.jpg",		// Contains the file name of the picture (not the picture itself)
  //   UserID : "test",
  //   Available: 0
  // },
  // {
  //   Price: 13,  		// Holds the price of the particular item
  //   Product_Name: "something", // Contains the name of the item
  //   Type: "clothing", 		// Contains the type of the item (e.x. Book, Clothing, Computer, etc
  //   ItemID: 2, 		// AUTO_INCREMENT,
  //   Product_Desc: "some desc that is dope af and you cannot resist but to buy",	// Contains a short description of the item
  //   Quantity: 3,		
  //   Picture: "assets/5.jpg",		// Contains the file name of the picture (not the picture itself)
  //   UserID : "test",
  //   Available: 1
  // }
  // ];
  vendorName = "Big Baller Brand";
  vendorDesc = "The most BUCCI shit ya can buy mother fuckers";

  constructor(private http : HttpClient) { }

  ngOnInit() {
  	this.http.get('http://localhost:3000/items').subscribe(data => {

      this.raw_items = data;
      
    });
  }

  
}
