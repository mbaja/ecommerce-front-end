 export class Payment {
  Cardholder_FirstName:string; // VARCHAR(50) NOT NULL
  Cardholder_LastName:string;  //VARCHAR(50) NOT NULL
  Card_Num:number;             // BIGINT UNSIGNED NOT NULL
  Card_CCV:number;             // INT UNSIGNED NOT NULL
  Card_ExpirDate;              // INT UNSIGNED NOT NULL
  Street:string;               // VARCHAR(50) NOT NULL
  Zip:number;                  // INT UNSIGNED NOT NULL
  City:string;                 // VARCHAR(50) NOT NULL
  State:string;                // CHAR(2) NOT NULL
  Country:string;              //VARCHAR(50) NOT NULL
  CustomerID:string;           // VARCHAR(50) NOT NULL
}


