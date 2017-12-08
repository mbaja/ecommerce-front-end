import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FlashMessage } from 'angular-flash-message';
import { User } from '../objects/user';
import { Vendor } from '../objects/vendor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customerUserName:string;
  customerFirstName:string;
  customerLastName:string;
  customerEmail:string;
  customerPassword:string;
  customerPhone:string;
  customerAddressStreet:string;
  customerAddressCity:string;
  customerAddressState:string;
  customerAddressZip:number;
  customerAddressCountry:string;

  vendorStoreName:string;
  vendorUserName:string;
  vendorPassword:string;
  vendorFirstName:string;
  vendorLastName:string;
  vendorEmail:string;
  vendorPhone:string;
  vendorAddressStreet:string;
  vendorAddressCity:string;
  vendorAddressState:string;
  vendorAddressZip:number;
  vendorAddressCountry:string;
  vendorStoreDesc:string;


//<<<<<<< HEAD
  constructor(private router:Router, private http: HttpClient,private flashMessage:FlashMessage) { }
//=======

  //constructor(private router:Router) { }
//>>>>>>> b4350d2fbfe26e097d17f744d87a8d6f70483bb8

  ngOnInit() {
  }

  selectCustomerTab(e){
    console.log("Customer");
    // Set tab toggle
    document.getElementById("customertab").className = "active";
    document.getElementById("vendortab").className = "";

    // Set content toggle
    document.getElementById("customercontent").className = "tab-pane fade in active";
    document.getElementById("vendorcontent").className = "tab-pane fade";    
  }

  selectVendorTab(e){
    console.log("Vendor");
    // Set tab toggle
    document.getElementById("customertab").className = "";
    document.getElementById("vendortab").className = "active";

    // Set content toggle
    document.getElementById("customercontent").className = "tab-pane fade";
    document.getElementById("vendorcontent").className = "tab-pane fade in active";    
  }

  registerCustomer(e) {
    console.log("User Name:            ", this.customerUserName);
    console.log("User First Name:      ", this.customerFirstName);
    console.log("User Last Name:       ", this.customerLastName);
    console.log("User Email:           ", this.customerEmail);
    console.log("User Password:        ", this.customerPassword);
    console.log("User Phone:           ", this.customerPhone);
    console.log("User Address Street:  ", this.customerAddressStreet);
    console.log("User Address City:    ", this.customerAddressCity);
    console.log("User Address State:   ", this.customerAddressState);
    console.log("User Address ZIP:     ", this.customerAddressZip);
    console.log("User Address Country: ", this.customerAddressCountry);

    if(!this.checkIfCustomerFormFilled()) {
      console.log("One or more data fields is empty is EMPTY");
      this.flashMessage.danger("Register Form Not Complete", {delay: 4000});
      return;
    }

    var newUser: User = {
      userid : this.customerUserName,
      first_name: this.customerFirstName,
      last_name: this.customerLastName,
      email: this.customerEmail,
      phone: this.customerPhone,
      password: this.customerPassword,
      address: this.customerAddressStreet,
      zip: this.customerAddressZip,
      city: this.customerAddressCity,
      state: this.customerAddressState,
      country: this.customerAddressState,
      type: "Customer"
    };

    this.http.post('http://localhost:3000/register', newUser).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.flashMessage.danger("Register Complete", {delay: 4000});
      this.router.navigate(['/login']);
      
    }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
            this.flashMessage.danger('Can\'t register this user', {delay : 3000});
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            this.flashMessage.danger('Can\'t register this user.', {delay : 3000});
          }
     });

  }

  registerVendor(e) {
    console.log("vendorStoreName:      ", this.vendorStoreName);
    console.log("vendorUserName:       ", this.vendorUserName);
    console.log("Vendor Password:      ", this.vendorPassword);
    console.log("vendorFirstName:      ", this.vendorFirstName);
    console.log("vendorLastName:       " ,this.vendorLastName);
    console.log("vendorEmail:          ", this.vendorEmail);
    console.log("vendorPhone:          ", this.vendorPhone);
    console.log("vendorAddressStreet:  ", this.vendorAddressStreet);
    console.log("vendorAddressCity:    ", this.vendorAddressCity);
    console.log("vendorAddressState:   ", this.vendorAddressState);
    console.log("vendorAddressZip:     ", this.vendorAddressZip);
    console.log("vendorAddressCountry: ", this.vendorAddressCountry);
    console.log("Vendor Desc:          ", this.vendorStoreDesc);

    if(!this.checkIfVendorFormFilled()) {
      console.log("One or more data fields is empty is EMPTY");
      this.flashMessage.danger("Register Form Not Complete", {delay: 4000});
      return;
    }

    var newVendor: Vendor = {
      userid : this.vendorUserName,
      first_name: this.vendorFirstName,
      last_name: this.vendorLastName,
      email: this.vendorEmail,
      phone: this.vendorPhone,
      password: this.vendorPassword,
      address: this.vendorAddressStreet,
      zip: this.vendorAddressZip,
      city: this.vendorAddressCity,
      state: this.vendorAddressState,
      country: this.vendorAddressState,
      type: "Vendor",
      store_name: this.vendorStoreName,
      store_desc: this.vendorStoreDesc
    };

    this.http.post('http://localhost:3000/register', newVendor).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.flashMessage.success("Register Complete", {delay: 4000});
      this.router.navigate(['/login']);
      
    }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
            this.flashMessage.danger('Can\'t register this user', {delay : 3000});
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            this.flashMessage.danger('Can\'t register this user.', {delay : 3000});
          }
     });
  }

  checkIfCustomerFormFilled() {
    if(
      this.customerUserName == null || this.customerUserName == "" ||
      this.customerFirstName == null || this.customerFirstName == "" ||
      this.customerLastName == null || this.customerLastName == "" ||
      this.customerEmail == null || this.customerEmail == "" ||
      this.customerPassword == null || this.customerPassword == "" ||
      this.customerPhone == null || this.customerPhone == "" ||
      this.customerAddressStreet == null || this.customerAddressStreet == "" ||
      this.customerAddressCity == null || this.customerAddressCity == "" ||
      this.customerAddressState == null || this.customerAddressState == "" ||
      this.customerAddressZip == null ||
      this.customerAddressCountry == null || this.customerAddressCountry == ""
      ) {
      return false;
    }
    return true;
  }

  checkIfVendorFormFilled() {
    if(
      this.vendorStoreName == null || this.vendorStoreName == "" ||
      this.vendorUserName == null || this.vendorUserName == "" ||
      this.vendorPassword == null || this.vendorPassword == "" ||
      this.vendorFirstName == null || this.vendorFirstName == "" || 
      this.vendorLastName == null || this.vendorLastName == "" ||
      this.vendorEmail == null || this.vendorEmail == "" ||
      this.vendorPhone == null || this.vendorPhone == "" ||
      this.vendorAddressStreet == null || this.vendorAddressStreet == "" ||
      this.vendorAddressCity == null || this.vendorAddressCity == "" ||
      this.vendorAddressState == null || this.vendorAddressState == "" ||
      this.vendorAddressZip == null ||
      this.vendorAddressCountry == null || this.vendorAddressCountry == "" ||
      this.vendorStoreDesc == null || this.vendorStoreDesc == "" 
      ) {
      return false;
    }
    return true;
  }
}
