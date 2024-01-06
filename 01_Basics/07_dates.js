// Dates   need to revise coz its a bit complex
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date()
console.log(myDate);             //2024-01-06T20:36:10.750Z
console.log(myDate.toString());   //Sat Jan 06 2024 20:36:10 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());    //Sat Jan 06 2024
console.log(myDate.toLocaleString());  //1/6/2024, 8:36:10 PM
console.log(typeof myDate);  //object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let myDte = new Date(2023, 0, 23, 5, 3)
console.log(myDte.toLocaleString());   // 1/23/2023, 5:03:00 AM

let mDte = new Date("01-14-2023")
console.log(mDte.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);   //gives values in millsec
console.log(mDte.getTime());   //gives values in ms
console.log(Math.floor(Date.now()/1000)); //gives values in sec

let nDate = new Date()
console.log(nDate.toLocaleString());
console.log(nDate.getMonth());
console.log(nDate.getDay());
console.log(nDate.getHours());

// sementics
console.log(`${nDate.getDay()} and the time`)

nDate.toLocaleString('default', {
    weekday:"long",
    timeZone: ''
})