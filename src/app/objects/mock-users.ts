import { User } from './user';

export const USERS: User[] = [
  {
    userID:      "BigBucciBaller",       // string VARCHAR(50) NOT NULL
    first_name:  "Lavar",                // string VARCHAR(50) NULL,
    last_name:   "Ball",                 // string VARCHAR(50) NULL,
    email:       "bucci@gmail.com",      // string VARCHAR(50) NOT NULL COMMENT 'Will be used as the username for logging in
    date_joined:  null,                  // Date DATE NULL
    phone_number: "(420)420-6969",       // string VARCHAR(50) NULL
    password:     "ballcontrol",         // string VARCHAR(100) NOT NULL COMMENT 'Contains an encrypted password of the customer
    street:       "1488 Supreme Street", // string VARCHAR(50) NULL
    zip:          90210,                 // number INT NULL
    city:         "Brick City",          // string VARCHAR(50) NULL
    state:        "CA",                  // string CHAR(2) NULL
    country:      "USA",                 // string VARCHAR(50) NULL,
    type_account: "customer"             // string VARCHAR(10) NULL COMMENT 'Either \'Admin\', \'Customer\', or \'Vendor\''
  },
  {
    userID:      "TommySalami",          // string VARCHAR(50) NOT NULL
    first_name:  "Tommy",                // string VARCHAR(50) NULL,
    last_name:   "Salami",               // string VARCHAR(50) NULL,
    email:       "tomsal@gmail.com",     // string VARCHAR(50) NOT NULL COMMENT 'Will be used as the username for logging in
    date_joined:  null,                  // Date DATE NULL
    phone_number: "(420)420-1488",       // string VARCHAR(50) NULL
    password:     "bucci",               // string VARCHAR(100) NOT NULL COMMENT 'Contains an encrypted password of the customer
    street:       "69 Supreme Street",   // string VARCHAR(50) NULL
    zip:          90211,                 // number INT NULL
    city:         "Brick City",          // string VARCHAR(50) NULL
    state:        "CA",                  // string CHAR(2) NULL
    country:      "USA",                 // string VARCHAR(50) NULL,
    type_account: "user"             // string VARCHAR(10) NULL COMMENT 'Either \'Admin\', \'Customer\', or \'Vendor\''
  },
  {
    userID:      "admin",                // string VARCHAR(50) NOT NULL
    first_name:  "Lavar",                // string VARCHAR(50) NULL,
    last_name:   "Ball",                 // string VARCHAR(50) NULL,
    email:       "bucci@gmail.com",      // string VARCHAR(50) NOT NULL COMMENT 'Will be used as the username for logging in
    date_joined:  null,                  // Date DATE NULL
    phone_number: "(420)420-6969",       // string VARCHAR(50) NULL
    password:     "admin",               // string VARCHAR(100) NOT NULL COMMENT 'Contains an encrypted password of the customer
    street:       "1488 Supreme Street", // string VARCHAR(50) NULL
    zip:          90210,                 // number INT NULL
    city:         "Brick City",          // string VARCHAR(50) NULL
    state:        "CA",                  // string CHAR(2) NULL
    country:      "USA",                 // string VARCHAR(50) NULL,
    type_account: "admin"                // string VARCHAR(10) NULL COMMENT 'Either \'Admin\', \'Customer\', or \'Vendor\''
  },
  {
    userID:      "BigBallerBrand",       // string VARCHAR(50) NOT NULL
    first_name:  "Lavar",                // string VARCHAR(50) NULL,
    last_name:   "Ball",                 // string VARCHAR(50) NULL,
    email:       "bucci@gmail.com",      // string VARCHAR(50) NOT NULL COMMENT 'Will be used as the username for logging in
    date_joined:  null,                  // Date DATE NULL
    phone_number: "(420)420-6969",       // string VARCHAR(50) NULL
    password:     "bucci",               // string VARCHAR(100) NOT NULL COMMENT 'Contains an encrypted password of the customer
    street:       "1488 Supreme Street", // string VARCHAR(50) NULL
    zip:          90210,                 // number INT NULL
    city:         "Brick City",          // string VARCHAR(50) NULL
    state:        "CA",                  // string CHAR(2) NULL
    country:      "USA",                 // string VARCHAR(50) NULL,
    type_account: "vendor"               // string VARCHAR(10) NULL COMMENT 'Either \'Admin\', \'Customer\', or \'Vendor\''
  }

];
