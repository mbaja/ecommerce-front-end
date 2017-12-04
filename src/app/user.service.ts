import { Injectable } from '@angular/core';
import { User } from './objects/user';

import { USERS } from './objects/mock-users';    // HARDCODED VALUES TO BE DELETED

@Injectable()
export class UserService {

  users = USERS;
  private user: User = {
    userID : null,
    first_name: null,
    last_name: null,
    email: null,    
    date_joined: null,
    phone_number: null,
    password: null,
    street: null,
    zip: null,
    city: null,
    state: null,
    country: null,
    type_account: null
  };

  private selectedItem;

  constructor() {
    this.selectedItem = 0;
  }

  setUserLoggedIn( user ) {
  	this.user.userID = user;
    for(let i of this.users) {
      if(i.userID == user) {
        this.user.type_account = i.type_account
      }
    }
  }

  getUser() {
  	return this.user;
  }

  getUserLoggedIn() {
  	return this.user.userID;
  }

  setSelectedItem(itemID) {
    this.selectedItem = itemID;
    console.log("Service value: ", this.selectedItem);
  }

  getSelectedItem() {
    return this.selectedItem;
  }
}
