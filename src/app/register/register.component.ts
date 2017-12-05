import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../objects/user';

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
  vendorDesc:string;



  constructor(private router:Router) { }

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

    var newUser: User = {
      userID : this.customerUserName,
      first_name: this.customerFirstName,
      last_name: this.customerLastName,
      email: this.customerEmail,    
      date_joined: null,
      phone_number: this.customerPhone,
      password: this.customerPassword,
      street: this.customerAddressStreet,
      zip: this.customerAddressZip,
      city: this.customerAddressCity,
      state: this.customerAddressState,
      country: this.customerAddressState,
      type_account: "customer"
    };


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
    console.log("Vendor Desc:          ", this.vendorDesc);
  }
}
