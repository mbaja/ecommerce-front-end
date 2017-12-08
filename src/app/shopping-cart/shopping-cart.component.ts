import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../objects/user';
import { UserService } from '../user.service';
import { Cart } from '../objects/cart';
import { FlashMessage } from 'angular-flash-message';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

//import { SHOPPING_CART } from '../objects/mock-cart';    // HARDCODED VALUES TO BE DELETED
//import { INVENTORY } from '../objects/mock-items';		   // HARDCODED VALUES TO BE DELETED

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shopping_cart;
  customers:number;
  total;

  constructor(private router:Router, private user:UserService, private flashMessage:FlashMessage, private http : HttpClient) { }

  ngOnInit() {
  	//var user = this.user.getUserLoggedIn();
    //console.log("Cart User: ", user);

    this.http.get('http://localhost:3000/cart', { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Cart Data", data);
      this.shopping_cart = data;
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

  getProductName( itemID ) {
  	/*for(let item of INVENTORY) {
  		if (item.ItemID == itemID) {
  			return item.Product_Name
  		}
  	}*/
    this.http.get('http://localhost:3000/items/' + itemID).subscribe(data => {
      return data['Product_Name'];
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        this.flashMessage.danger('Invalid request.', {delay : 3000});
        return "None";
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        this.flashMessage.danger('Invalid request.', {delay : 3000});
        return "None";
      }
    });
  } 

  getProductPrice( itemID ) : number {
/*  	for(let item of INVENTORY) {
  		if (item.itemID == itemID) {
  			console.log("itemfound");
  			return item.price
  		}
  	}
  	console.log("notfound");*/
  	return 0
  } 

  getSubtotal( itemID, itemQuantity, cartID ) : number{
  	var price = this.getProductPrice(itemID);
  	console.log("Price found is: ", price);
  	// var itemQuantity = <HTMLInputElement>document.getElementById("someQuantityy").value;
  	return price*itemQuantity;
  }

  sumTotal2()  {

  }

  continueShopping() {
    console.log("continue shopping pressed")
    this.saveCart();
    this.user.setShowMessage("Shopping Cart Saved!");
    this.router.navigate(['/dashboard']);
  }

  checkout() {
    console.log("checkout pressed");
    this.router.navigate(['/checkout']);
  };

  sumTotal() {
/*    var total = 0.0;
    var array = this.shopping_cart;
    for (var i = 0; i<array.length; i++) {
      var element = array[i];
      var elementPrice = this.getProductPrice(element.itemID);
      var elementQuantity = element.quantity;
      total += elementPrice * elementQuantity;
    }
    return total*/

    /*this.http.get('http://localhost:3000/cart', { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      
      var total = 0;
      for (let item of <Object[]>data)  {
        total += item['Item'].Price * item['Cart'].Quantity;
      }

      console.log(total);

      this.total = total;
      
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        this.flashMessage.danger('Invalid login.', {delay : 3000});
        this.total = 0;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        this.flashMessage.danger('Invalid login.', {delay : 3000});
        this.total = 0;
      }
    }); */

    var total = 0.0;
    for (let item of this.shopping_cart)  {
      total += item['Item'].Price * item['Cart'].Quantity;
    }

    return total;
  }

  deleteItem( cartID ) {
    console.log("Cart ID", cartID);

    this.http.post('http://localhost:3000/cart/delete', {cartid : cartID}, { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Cart Delete", data);
      
      var index = -1;
      for (var i = 0; i < this.shopping_cart.length; i++)  {
        if (cartID === this.shopping_cart[i].Cart.CartID)  {
          index = i;
        }
      }

      if (index >= 0)  {
        this.shopping_cart.splice(index, 1);
      }

      this.flashMessage.success('Successfully deleted item.', {delay : 3000});

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

  // USE THIS TO SAVE THE CART AFTER OR BEFORE EXITING
  saveCart() {
    console.log(this.shopping_cart);
    /*
    Format: [
      
      {
  
        Item: {},
        Cart: {}

      }

    ]

    We want to update the quantity for the specific cart id
    */

    this.http.put('http://localhost:3000/cart', this.shopping_cart).subscribe(data => {
      console.log("SaveCart",data);
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        this.flashMessage.danger('Invalid Cart.', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        this.flashMessage.danger('Invalid Cart.', {delay : 3000});
      }
    });
  }
}
