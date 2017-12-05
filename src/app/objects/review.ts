export class Review {
  ReviewID:number;		// INT UNSIGNED NOT NULL AUTO_INCREMENT,
  CustomerID:string;	// VARCHAR(50) NOT NULL,
  VendorID:string;		// VARCHAR(50) NOT NULL,
  OrderID:number;		// INT UNSIGNED NOT NULL,		// INT NOT NULL DEFAULT 0,
  Rating:number;		// INT UNSIGNED NOT NULL,
  Date_Posted:Date;		// DATE NOT NULL,
  Text:string;			// VARCHAR(4000) NOT NULL,
  ItemID: number;
}