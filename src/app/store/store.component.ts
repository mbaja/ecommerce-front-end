import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FlashMessage } from 'angular-flash-message';
import { UserService } from '../user.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  vendor_items;

  addItemName;
  addItemType;
  addItemPrice;
  addItemQuantity;
  addItemPicture;
  addItemDesc;

  constructor(private http : HttpClient, private flashMessage : FlashMessage, private user : UserService) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/inventory', { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Inventory data", data);
      this.vendor_items = data;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        
      }
    }); 

  }

  selectStoreInventoryTab(e){
  	console.log("Store Inventory");
  	// Set tab toggle
  	document.getElementById("storeinventorytab").className = "active";
  	document.getElementById("additemtab").className = "";

  	// Set content toggle
	document.getElementById("storeinventorycontent").className = "tab-pane fade in active";
  	document.getElementById("additemcontent").className = "tab-pane fade";  	
  }

  selectAddItemTab(e){
  	console.log("Add Item");
  	// Set tab toggle
  	document.getElementById("storeinventorytab").className = "";
  	document.getElementById("additemtab").className = "active";

  	// Set content toggle
	  document.getElementById("storeinventorycontent").className = "tab-pane fade";
  	document.getElementById("additemcontent").className = "tab-pane fade in active";  	
  }

  deleteInventoryItem(ItemID) {
  	console.log("Clicked delte inv item");


  	this.http.delete('http://localhost:3000/items/' + ItemID, { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Delete Item data", data);

      var index = -1;

      for (var i = 0; i < this.vendor_items.length; i++) {
        if (this.vendor_items[i].Item.ItemID === ItemID)  {
          index = i;
        }
      }

      if (index >= 0)  {
        this.vendor_items[index].Item.Available = 0;
      }

    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        
      }
    }); 
  }

  availableInventoryItem(ItemID)  {

    this.http.request('post', 'http://localhost:3000/available/' + ItemID, { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Available Item data", data);

      var index = -1;

      for (var i = 0; i < this.vendor_items.length; i++) {
        if (this.vendor_items[i].Item.ItemID === ItemID)  {
          index = i;
        }
      }

      if (index >= 0)  {
        this.vendor_items[index].Item.Available = 1;
      }

    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        
      }
    }); 
  }

  addItemToInventory() {
  	this.addItemDesc = document.getElementById("productDesc").textContent;

  	console.log("Clicked");
  	console.log("addItemName: ", this.addItemName);
  	console.log("addItemType: ", this.addItemType);
  	console.log("addItemPrice: ", this.addItemPrice);
  	console.log("addItemQuantity: ", this.addItemQuantity);
  	console.log("addItemPicture: ", this.addItemPicture);
  	console.log("addItemDesc", this.addItemDesc);

    if(!this.checkIfAddItemFormFilled()){
      console.log("One or more data fields is empty is EMPTY");
      this.flashMessage.danger("Invalid Form Data", {delay: 4000});
      return;
    }
/*    var userid = req.user.userid;
  var price = req.body.price;
  var prod_name = req.body.prod_name;
  var type = req.body.type;
  var prod_desc = req.body.prod_desc;
  var quantity = req.body.quantity;
  var picture = req.body.picture;*/

    var body = {
      price : this.addItemPrice,
      prod_name : this.addItemName,
      type : this.addItemType,
      prod_desc : this.addItemDesc,
      quantity : this.addItemQuantity,
      picture : this.addItemPicture
    };

    this.http.post('http://localhost:3000/inventory', body,{ headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Item Add Data", data);
      this.user.setShowMessage('Add Item Successful');

      this.addItemName = "";
      this.addItemType = "";
      this.addItemPrice = "";
      this.addItemQuantity = "";
      this.addItemPicture = "";
      this.addItemDesc = "";


      this.http.get('http://localhost:3000/inventory', { headers : 
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), withCredentials: true }).subscribe(data => {
      console.log("Inventory data", data);
      this.vendor_items = data;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        
      }
    }); 




    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        
      }
    }); 

  } 

  checkIfAddItemFormFilled() {
    if(
      this.addItemName == "" || this.addItemName == null ||
      this.addItemType == "" || this.addItemType == null ||
      this.addItemPrice == "" ||
      this.addItemQuantity == "" || this.addItemQuantity == null ||
      this.addItemPicture == "" || this.addItemPicture == null ||
      this.addItemDesc == "" || this.addItemName == ""
     ) {
      return false;
    }
    return true;
  } 
}
