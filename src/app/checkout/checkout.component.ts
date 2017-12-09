import { Component, OnInit } from '@angular/core';
import { Payment } from '../objects/payment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";
import { FlashMessage } from 'angular-flash-message';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shippingType;
  deliveryType;
  paymentOption;

  // HARDCODED VALUE TO BE PULLED FROM BACKEND
  /*payments: Payment[] = [
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
  ];  */

  payments : Payment[];

  constructor(private user:UserService, private http : HttpClient, private router : Router, private flashMessage : FlashMessage) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/payment', { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Payment Data", data);
      this.payments = <Payment[]>data;

    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        //this.flashMessage.danger('Invalid login.', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        //this.flashMessage.danger('Invalid login.', {delay : 3000});
      }
    }); 

  }

  placeOrder(e) {
  	console.log("Place Order");
  	console.log("shippingType: ", this.shippingType);
    console.log("deliveryType: ", this.deliveryType);

    console.log("paymentOption: ", parseInt(this.paymentOption));

    if(!this.checkIfCheckoutFilled()){
      console.log("One or more data fields is empty is EMPTY");
      this.flashMessage.danger("Invalid Form Data", {delay: 4000});
      return;
    }

    var body = {
      card_num : parseInt(this.paymentOption),
      delivery_type : this.deliveryType,
      shipment_company : this.shippingType
    };

    this.http.post('http://localhost:3000/checkout', body, { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Checkout Data", data);
      this.router.navigate(['/dashboard']);
      this.user.setShowMessage('Checkout Successful');
      // this.flashMessage.success('Checkout successful.', {delay : 3000});
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        //this.flashMessage.danger('Invalid login.', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        //this.flashMessage.danger('Invalid login.', {delay : 3000});
      }
    }); 


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

  checkIfCheckoutFilled() {
    if(
      this.shippingType == null ||
      this.deliveryType == null ||
      this.paymentOption == null
      ) {
      return false;
    }
    return true;
  }

  displayFormatCardNum(Card_Num) {

    var format_num = Card_Num + "";

    return '********' + format_num.slice(8, 12);

  }

  displayFormatExpirDate(Expir_Date) {

    var format_date = Expir_Date + "";

    if (format_date.length === 3)  {
      format_date = '0' + format_date;
    }

    return format_date.slice(0, 2) + '/' + format_date.slice(2, 4);

  }
}
