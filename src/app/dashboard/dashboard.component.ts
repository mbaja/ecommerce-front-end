import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FlashMessage } from 'angular-flash-message';

//import { INVENTORY } from '../objects/mock-items';    // HARDCODED VALUES TO BE DELETED

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  items;
  raw_items;

  constructor(private router:Router, private user:UserService, private flashMessage:FlashMessage, private http : HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/items').subscribe(data => {

      this.raw_items = data;
    });

/*    this.items = Array();
    for(let raw_item of this.raw_items)  {
      this.items.push(raw_item.item_desc);
    }

    console.log(this.items);*/

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
