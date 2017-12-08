import { Injectable } from '@angular/core';
import { User } from './objects/user';

//import { USERS } from './objects/mock-users';    // HARDCODED VALUES TO BE DELETED

@Injectable()
export class UserService {

  //users = USERS;
  private user = {
    UserID : "None",
    Type_Account : "None"
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
  	this.user = user;
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
  	return this.user.UserID;
  }

  getUserType() {
    return this.user.Type_Account;
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
