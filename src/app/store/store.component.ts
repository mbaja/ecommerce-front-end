import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  vendor_item;

  constructor() { }

  ngOnInit() {
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

  deleteInventoryItem() {
  	console.log("Clicked delte inv item");
  	
  }
}
