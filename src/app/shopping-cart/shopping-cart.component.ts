import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../objects/user';
import { UserService } from '../user.service';
import { Cart } from '../objects/cart';

import { SHOPPING_CART } from '../objects/mock-cart';    // HARDCODED VALUES TO BE DELETED
import { INVENTORY } from '../objects/mock-items';		 // HARDCODED VALUES TO BE DELETED

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shopping_cart = SHOPPING_CART;
  customers:number;

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  	var user = this.user.getUserLoggedIn();
    console.log("Cart User: ", user);
  }

  getProductName( itemID ) {
  	for(let item of INVENTORY) {
  		if (item.itemID == itemID) {
  			return item.product_name
  		}
  	}
  	return "ERROR: BUCCI ITEM NOT FOUND"
  } 

  getProductPrice( itemID ) : number {
  	for(let item of INVENTORY) {
  		if (item.itemID == itemID) {
  			console.log("itemfound");
  			return item.price
  		}
  	}
  	console.log("notfound");
  	return 0
  } 

  getSubtotal( itemID, itemQuantity, cartID ) : number{
  	var price = this.getProductPrice(itemID);
  	console.log("Price found is: ", price);
  	// var itemQuantity = <HTMLInputElement>document.getElementById("someQuantityy").value;
  	return price*itemQuantity
  }
}
