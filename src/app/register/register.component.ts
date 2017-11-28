import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  registerUser(e) {
    e.preventDefault();
    console.log(e);
    var firstName = e.target.elements[0].value;
    var lastName = e.target.elements[1].value;
    var email = e.target.elements[2].value;
    var password = e.target.elements[3].value;
    var phone = e.target.elements[4].value;
    var addressStreet = e.target.elements[5].value;
    var addressCity = e.target.elements[6].value;
    var addressState = e.target.elements[7].value;
    var addressZip = e.target.elements[8].value;
    var addressCountry = e.target.elements[9].value;
    var DOBDD = e.target.elements[10].value;
    var DOBMM = e.target.elements[11].value;
    var DOBYYYY = e.target.elements[12].value;
    var gender = e.target.elements[13].value;
    var cardNum = e.target.elements[14].value;
    var cardCVC = e.target.elements[15].value;
    var cardExpMM = e.target.elements[16].value;
    var cardExpYYYY = e.target.elements[17].value;
    console.log("First Name:     ", firstName);
    console.log("Last Name:      ", lastName);
    console.log("Email:          ", email);
    console.log("Password:       ", password);
    console.log("Phone:          ", phone);
    console.log("Street Address: ", addressStreet);
    console.log("Address City:   ", addressCity);
    console.log("Address State:  ", addressState);
    console.log("Address Zip:    ", addressZip);
    console.log("Address Contry: ", addressCountry);
    console.log("DOBDD:          ", DOBDD);
    console.log("DOBMM:          ", DOBMM);
    console.log("DOBYYYY:        ", DOBYYYY);
    console.log("Gender:         ", gender);
    console.log("CardNum:        ", cardNum);
    console.log("CardCVC:        ", cardCVC);
    console.log("CardExpMM:      ", cardExpMM);
    console.log("CardExpYYYY:    ", cardExpYYYY);
  }
}
