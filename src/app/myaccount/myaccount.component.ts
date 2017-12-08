import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FlashMessage } from 'angular-flash-message';
import { Payment } from '../objects/payment';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  paymentFirstName:string;
  paymentLastName:string;
  paymentCardNumber:string;
  paymentCardCVC:string;
  paymentCardExpMM:string;
  paymentCardExpYYYY:string;
  paymentAddressStreet:string;
  paymentAddressCity:string;
  paymentAddressState:string;
  paymentAddressZip:string;
  paymentAddressCountry:string;

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

  constructor(private router:Router, private user:UserService, private http : HttpClient, private flashMessage : FlashMessage) { }

  orders;
  payments: Payment[];
  //Orders is an array of objects where each object has the attributes Order and Item. Order has the Order info and Item has the Item info.

  ngOnInit() {

    this.http.get('http://localhost:3000/orders', { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Order Data", data);
      this.orders = data;
      this.orders.reverse();
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
        this.flashMessage.danger('Invalid login.', {delay : 3000});
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        this.flashMessage.danger('Invalid login.', {delay : 3000});
      }
    }); 

  }

  selectOrderHistoryTab(e){
  	console.log("Order History");
  	// Set tab toggle
  	document.getElementById("orderhistorytab").className = "active";
  	document.getElementById("paymenttab").className = "";

  	// Set content toggle
	document.getElementById("orderhistorycontent").className = "tab-pane fade in active";
  	document.getElementById("paymentcontent").className = "tab-pane fade";  	
  }

  selectPaymentTab(e){
  	console.log("Payment");
  	// Set tab toggle
  	document.getElementById("orderhistorytab").className = "";
  	document.getElementById("paymenttab").className = "active";

  	// Set content toggle
	  document.getElementById("orderhistorycontent").className = "tab-pane fade";
  	document.getElementById("paymentcontent").className = "tab-pane fade in active";  
  }

  submitPaymentDetails(e) {
    console.log("First Name:      ", this.paymentFirstName)
    console.log("Last Name:       ", this.paymentLastName)
    console.log("Card Number:     ", this.paymentCardNumber )
    console.log("Card CVC:        ", this.paymentCardCVC)
    console.log("Card Exp MM:     ", this.paymentCardExpMM)
    console.log("Card Exp YYYY:   ", this.paymentCardExpYYYY)
    console.log("Address Street:  ", this.paymentAddressStreet)
    console.log("Address City:    ", this.paymentAddressCity)
    console.log("Address State:   ", this.paymentAddressState)
    console.log("Address Zip:     ", this.paymentAddressZip)
    console.log("Address Country: ", this.paymentAddressCountry)

    var expir_date = this.paymentCardExpMM + this.paymentCardExpYYYY.slice(2, 4);
    var expir_date_num = parseInt(expir_date);



    var newPayment = {
      card_firstname: this.paymentFirstName,
      card_lastname: this.paymentLastName,
      card_num: this.paymentCardNumber,           
      card_ccv: parseInt(this.paymentCardCVC),    
      card_date: expir_date_num,        
      bill_street: this.paymentAddressStreet,          
      bill_zip: parseInt(this.paymentAddressZip),     
      bill_city: this.paymentAddressCity,          
      bill_state: this.paymentAddressState,     
      bill_country: this.paymentAddressCountry,
      CustomerID: "None"           
    }

    var newPayment_2 : Payment = {
      Cardholder_FirstName: this.paymentFirstName,
      Cardholder_LastName: this.paymentLastName,
      Card_Num: this.paymentCardNumber,           
      Card_CCV: parseInt(this.paymentCardCVC),    
      Card_ExpirDate: expir_date_num,        
      Street: this.paymentAddressStreet,          
      Zip: parseInt(this.paymentAddressZip),     
      City: this.paymentAddressCity,          
      State: this.paymentAddressState,     
      Country: this.paymentAddressCountry,
      CustomerID: "None"           
    }

    this.http.post('http://localhost:3000/payment', newPayment,  { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Payment Post Data", data);
      this.payments.push(newPayment_2);
      this.flashMessage.success('Successful Adding Payment', {delay : 3000});

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

  openReviewPage( OrderID ) {
    //this.user.setReviewItem(OrderID);
    console.log("Dashboard setReviewItem:   ", OrderID);
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
