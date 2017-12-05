import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../objects/user';
import { HttpClient } from '@angular/common/http';

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
  // customerDOBDD:number;
  // customerDOBMM:number;
  // customerDOBYYYY:number;
  // customerGender:string;

  vendorUserName:string;
  vendorPassword:string;
  vendorDesc:string;


  constructor(private router:Router, private http: HttpClient) { }

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
      this.router.navigate(['/login']);
    });

  }

  registerVendor(e) {
    console.log("Vendor Name:     ", this.vendorUserName);
    console.log("Vendor Password: ", this.vendorPassword);
    console.log("Vendor Desc:     ", this.vendorDesc);


  }
}
