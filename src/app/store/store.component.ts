import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  vendor_items;

  constructor(private http : HttpClient) { }

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
        this.vendor_items.splice(index, 1);
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
}
