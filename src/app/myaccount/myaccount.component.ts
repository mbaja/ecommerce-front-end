import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
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
    console.log("Address City:    ", this.paymentAddressStreet)
    console.log("Address State:   ", this.paymentAddressState)
    console.log("Address Zip:     ", this.paymentAddressZip)
    console.log("Address Country: ", this.paymentAddressCountry)
  }

  openReviewPage( itemID ) {
    this.user.setReviewItem(itemID);
    console.log("Dashboard setReviewItem:   ", itemID);
  }
}
