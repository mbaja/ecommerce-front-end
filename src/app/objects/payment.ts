 export class Payment {
  cardholder_firstname:string; // VARCHAR(50) NOT NULL
  cardholder_lastname:string;  //VARCHAR(50) NOT NULL
  card_num:number;             // BIGINT UNSIGNED NOT NULL
  card_CVC:number;             // INT UNSIGNED NOT NULL
  card_expirdate;              // INT UNSIGNED NOT NULL
  street:string;               // VARCHAR(50) NOT NULL
  zip:number;                  // INT UNSIGNED NOT NULL
  city:string;                 // VARCHAR(50) NOT NULL
  state:string;                // CHAR(2) NOT NULL
  country:string;              //VARCHAR(50) NOT NULL
  customerID:string;           // VARCHAR(50) NOT NULL
}