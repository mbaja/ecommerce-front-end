import { Component, OnInit } from '@angular/core';
import { Payment } from '../objects/payment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shippingType;
  deliveryType;
  paymentOption;

  paymentOptionNum = 0;
  newCardSave;
  newCardFirstName;
  newCardLastName;
  newCardNumber;
  newCardCVC;
  newCardExpMM;
  newCardExpYYYY;
  newCardAddressStreet;
  newCardAddressCity;
  newCardAddressState;
  newCardAddressZip;

  // HARDCODED VALUE TO BE PULLED FROM BACKEND
  payments: Payment[] = [
  {
    Cardholder_FirstName:"TestFirstName", 
    Cardholder_LastName:"TestLastName",  
    Card_Num:1234123412341234,             
    Card_CCV:123,        
    Card_ExpirDate:1234,             
    Street:"Street",          
    Zip:12312,                  
    City:"City",              
    State:"NY",                
    Country:"USA",            
    CustomerID:"test"           
  },
  {
    Cardholder_FirstName:"TestFirstName", 
    Cardholder_LastName:"TestLastName",  
    Card_Num:1234123412341231,             
    Card_CCV:123,        
    Card_ExpirDate:1234,             
    Street:"Street",          
    Zip:12312,                  
    City:"City",              
    State:"NY",                
    Country:"USA",            
    CustomerID:"test"           
  }
  ];  
  constructor() { }

  ngOnInit() {
  }

  placeOrder(e) {
  	console.log("Place Order");
  	console.log("shippingType: ", this.shippingType);
    console.log("deliveryType: ", this.deliveryType);

    console.log("paymentOption: ", this.paymentOption);

    // console.log("newCardSave: ", this.newCardSave);
    // console.log("newCardFirstName: ", this.newCardFirstName);
    // console.log("newCardLastName: ", this.newCardLastName);
    // console.log("newCardNumber: ", this.newCardNumber);
    // console.log("newCardCVC: ", this.newCardCVC);
    // console.log("newCardExpMM: ", this.newCardExpMM);
    // console.log("newCardExpYYYY: ", this.newCardExpYYYY);
    // console.log("newCardAddressStreet: ", this.newCardAddressStreet);
    // console.log("newCardAddressCity: ", this.newCardAddressCity);
    // console.log("newCardAddressState: ", this.newCardAddressState);
    // console.log("newCardAddressZip: ", this.newCardAddressZip); 
  }
}
