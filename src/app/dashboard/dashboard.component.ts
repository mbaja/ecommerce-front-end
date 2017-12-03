import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { INVENTORY } from '../objects/mock-items';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  items = INVENTORY;

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
    console.log("Logged in as: ", this.user.getUserLoggedIn());
    console.log(this.user.getUser());
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
