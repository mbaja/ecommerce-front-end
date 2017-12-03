import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Item } from "../objects/item";
import { INVENTORY } from '../objects/mock-items';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

  constructor(private user:UserService) { }

  itemQuantity:number = 0;
  item: Item;
  inv:Item[]=INVENTORY;

  ngOnInit() {
  	// loop and find item
  	for (let i of this.inv) {
	  console.log(i.itemID);
	  if(i.itemID == this.user.getSelectedItem()) {
	    this.item = {
		  price:        i.price,
		  product_name: i.product_name,
		  type:         i.type,
		  itemID:       i.itemID,
		  product_desc: i.product_desc,
		  quantity:     i.quantity,    
		  picture:      i.picture
  	    };
	  }
  	}
  	console.log("Selected Item: ", this.user.getSelectedItem());
  	
  }

  addQuantity() {
  	if(this.item.quantity != this.itemQuantity){
  	  this.itemQuantity += 1;	
  	}
  }

  minusQuantity() {
  	if(this.itemQuantity != 0){
  	  this.itemQuantity -= 1;
  	}
  }

}
