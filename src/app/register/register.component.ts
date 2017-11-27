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
    var fullName = e.target.elements[0].value;
    var email = e.target.elements[1].value;
    var password = e.target.elements[2].value;
    var address = e.target.elements[3].value;
    var DOBDD = e.target.elements[4].value;
    var DOBMM = e.target.elements[5].value;
    var DOBYYYY = e.target.elements[6].value;
    var gender = e.target.elements[7].value;
    var cardNum = e.target.elements[8].value;
    var cardCVC = e.target.elements[9].value;
    var cardExpMM = e.target.elements[10].value;
    var cardExpYYYY = e.target.elements[11].value;
    console.log("Full Name:  ", fullName);
    console.log("Email:      ", email);
    console.log("Password:   ", password);
    console.log("Address:    ", address);
    console.log("DOBDD:      ", DOBDD);
    console.log("DOBMM:      ", DOBMM);
    console.log("DOBYYYY:    ", DOBYYYY);
    console.log("Gender:     ", gender);
    console.log("CardNum:    ", cardNum);
    console.log("CardCVC:    ", cardCVC);
    console.log("CardExpMM:  ", cardExpMM);
    console.log("CardExpYYYY:", cardExpYYYY);
  }
}
