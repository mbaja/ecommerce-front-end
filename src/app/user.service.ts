import { Injectable } from '@angular/core';
import { User } from './objects/user';

import { USERS } from './objects/mock-users';    // HARDCODED VALUES TO BE DELETED

@Injectable()
export class UserService {

  users = USERS;
  private user: User = {
    userid : null,
    first_name: null,
    last_name: null,
    email: null,    
    phone: null,
    password: null,
    address: null,
    zip: null,
    city: null,
    state: null,
    country: null,
    type: null
  };

  private selectedItem;
  private reviewItem;
  private showMessage;

  constructor() {
    this.selectedItem = 0;
    this.reviewItem = 0;
    this.showMessage = "";
  }

  setUserLoggedIn( user ) {
  	this.user.userid = user;
    for(let i of this.users) {
      if(i.userid == user) {
        this.user.type = i.type
      }
    }
  }

  setShowMessage( message ) {
    this.showMessage = message;
    console.log("User showMessage set as: ", this.showMessage);
  }

  getShowMessage() {
    return this.showMessage;
  }

  getUser() {
  	return this.user;
  }

  getUserLoggedIn() {
  	return this.user.userid;
  }

  setSelectedItem( itemID ) {
    this.selectedItem = itemID;
    console.log("Service selectedItem: ", this.selectedItem);
  }

  setReviewItem( itemID ) {
    this.reviewItem = itemID;
    console.log("Service reviewItem: ", this.reviewItem);
  }

  getSelectedItem() {
    return this.selectedItem;
  }

  getReviewItem() {
    return this.reviewItem;
  }
}
