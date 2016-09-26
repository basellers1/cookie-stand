'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPike = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookiesPerCustomers: 6.3,
  totalDailyCookies: 0,
  totalCookiesPerHour: [],
  randomCustomersPerHour:[],
  locationName: firstAndPike,
  calculateRandCustHour: function () {
    for(var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers);
    }
  },
  calculateTotalDailyCookies: function () {
    this.calculateRandCustHour();
    for(var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(Math.random() + (this.randomCustomersPerHour[j]) * this.averageCookiesPerCustomers));
      this.totalDailyCookies += this.totalCookiesPerHour[j];
    }
  },
};
firstAndPike.calculateTotalDailyCookies();
console.log(firstAndPike.totalDailyCookies);

var SeaTacAirport = {
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageCookiesPerCustomers: 1.2,
  totalDailyCookies: 0,
  totalCookiesPerHour: [],
  randomCustomersPerHour:[],
  locationName: SeaTacAirport,
  calculateRandCustHour: function () {
    for(var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers);
    }
  },
  calculateTotalDailyCookies: function () {
    this.calculateRandCustHour();
    for(var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(Math.random() + (this.randomCustomersPerHour[j]) * this.averageCookiesPerCustomers));
      this.totalDailyCookies += this.totalCookiesPerHour[j];
    }
  },
};
SeaTacAirport.calculateTotalDailyCookies();
console.log(SeaTacAirport.totalDailyCookies);
