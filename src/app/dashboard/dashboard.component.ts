import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FlashMessage } from 'angular-flash-message';

import { INVENTORY } from '../objects/mock-items';    // HARDCODED VALUES TO BE DELETED

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  items = INVENTORY;

  constructor(private router:Router, private user:UserService, private flashMessage:FlashMessage) { }

  ngOnInit() {
    console.log("Logged in as: ", this.user.getUserLoggedIn());
    console.log(this.user.getUser());
    var msg = this.user.getShowMessage();
    if(msg.length != 0){
      this.flashMessage.success(msg, {
        delay: 4000,
      });
    }
    this.user.getShowMessage();
    console.log("INIT CALLED");
  }

  logoutUser(e) {
  	console.log("LOGOUT");
  	this.router.navigate(['login']);
  }

  openItemPage(itemID) {
    this.user.setSelectedItem(itemID);
    console.log("Dashboard Value:   ", itemID);
  }
}
