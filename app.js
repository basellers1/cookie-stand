'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStand(minCustomers, maxCustomers, averageCookiesPerCust, locationName, htmlID) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookiesPerCust = averageCookiesPerCust;
  this.totalDailyCookies = 0;
  this.totalCookiesPerHour = [];
  this.randomCustomersPerHour = [];
  this.locationName = locationName;
  this.htmlID = htmlID;
  this.calculateRandCustHour = function () {
    for(var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
    }
  };
  this.calculateTotalDailyCookies = function () {
    this.calculateRandCustHour();
    for(var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[j] * this.averageCookiesPerCust));
      this.totalDailyCookies += this.totalCookiesPerHour[j];
    }
  };
  this.render = function() {
    this.calculateTotalDailyCookies();
    var htmllist = document.getElementById(this.htmlID);
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      htmllist.appendChild(liEL);
    };
    var newlistel = document.createElement('li');
    newlistel.textContent = 'Total Cookies Sold Today: ' + this.totalDailyCookies;
    htmllist.appendChild(newlistel);

  };
  stores.push(this);
}

var stores = [];


new CookieStand(23, 65, 6.3, 'First and Pike', 'first-and-pike');
new CookieStand(3, 24, 1.2, 'Seatac Airport', 'seatac-airport');
new CookieStand(11, 38, 3.7, 'Seattle Center', 'seattle-center');
new CookieStand(20, 38, 2.3, 'Capitol Hill', 'capitol-hill');
new CookieStand(2, 16, 4.6, 'Alki', 'alki');

for (var i = 0; i < stores.length; i++) {
  stores[i].render();
}
