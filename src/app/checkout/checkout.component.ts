import { Component, OnInit } from '@angular/core';
import { Payment } from '../objects/payment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shipping;
  payment: Payment = {
    Cardholder_FirstName:"TestFirstName", // VARCHAR(50) NOT NULL
    Cardholder_LastName:"TestLastName",  //VARCHAR(50) NOT NULL
    Card_Num:1234123412341234,             // BIGINT UNSIGNED NOT NULL
    Card_CCV:123,        // INT UNSIGNED NOT NULL
    Card_ExpirDate:1234,              // INT UNSIGNED NOT NULL
    Street:"Street",               // VARCHAR(50) NOT NULL
    Zip:12312,                  // INT UNSIGNED NOT NULL
    City:"City",                 // VARCHAR(50) NOT NULL
    State:"NY",                // CHAR(2) NOT NULL
    Country:"USA",              //VARCHAR(50) NOT NULL
    CustomerID:"test"           // VARCHAR(50) NOT NULL
  };  // WE NEED TO FILL IN THIS DATA WITH PAYMENT TYPE
  constructor() { }

  ngOnInit() {
  }

  placeOrder(e) {
  	console.log("clicked");
  	console.log(this.shipping);
  }
}
