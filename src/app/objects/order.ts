export class Order {
  orderID: number;			   // INT UNSIGNED NOT NULL AUTO_INCREMENT,
  shipped_date: Date;		   // DATE NULL,
  ordered_date: Date;   	 // DATE NULL,
  delivery_type:string; 	 // VARCHAR(50) NULL,
  tracking_num:number;		 // BIGINT NULL,
  shipment_company:string; // VARCHAR(50) NULL,
  vendorID:string;			   // VARCHAR(50) NOT NULL,
  customerID:string;		   // VARCHAR(50) NOT NULL,
  street:string;			     // VARCHAR(50) NOT NULL,
  zip:number;				       // INT NOT NULL,
  city:string;				     // VARCHAR(50) NOT NULL,
  state:string;				     // CHAR(2) NOT NULL,
  country:string;			     // VARCHAR(50) NOT NULL,
}