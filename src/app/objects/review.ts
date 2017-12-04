export class Review {
  reviewID:number;		// INT UNSIGNED NOT NULL AUTO_INCREMENT,
  customerID:string;	// VARCHAR(50) NOT NULL,
  vendorID:string;		// VARCHAR(50) NOT NULL,
  orderID:number;		// INT UNSIGNED NOT NULL,
  upvotes:number;		// INT NOT NULL DEFAULT 0,
  rating:number;		// INT UNSIGNED NOT NULL,
  date_posted:Date;		// DATE NOT NULL,
  text:string;			// VARCHAR(4000) NOT NULL,
}