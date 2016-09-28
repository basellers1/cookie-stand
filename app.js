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
      this.randomCustomersPerHour.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minimumCustomers)) + this.minimumCustomers);
    }
  },
  calculateTotalDailyCookies: function () {
    this.calculateRandCustHour();
    for(var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[j] * this.averageCookiesPerCustomers));
      this.totalDailyCookies += this.totalCookiesPerHour[j];
    }
  },
  render: function() {
    this.calculateTotalDailyCookies();
    var firstAndPikeUL = document.getElementById('first-and-pike');
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      firstAndPikeUL.appendChild(liEL);
    }
    var firstAndPikeTotalSalesLi = document.createElement('li');
    firstAndPikeTotalSalesLi.textContent = 'Total Cookies Sold Today: ' + this.totalDailyCookies;
    firstAndPikeUL.appendChild(firstAndPikeTotalSalesLi);

  }
};
firstAndPike.render();

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
      this.randomCustomersPerHour.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minimumCustomers)) + this.minimumCustomers);
    }
  },
  calculateTotalDailyCookies: function () {
    this.calculateRandCustHour();
    for(var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[j] * this.averageCookiesPerCustomers));
      this.totalDailyCookies += this.totalCookiesPerHour[j];
    }
  },
  render: function() {
    this.calculateTotalDailyCookies();
    var SeaTacAirportUL = document.getElementById('seatac-airport');
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      SeaTacAirportUL.appendChild(liEL);
    }
    var SeaTacAirportTotalSalesLi = document.createElement('li');
    SeaTacAirportTotalSalesLi.textContent = 'Total Cookies Sold Today: ' + this.totalDailyCookies;
    SeaTacAirportUL.appendChild(SeaTacAirportTotalSalesLi);
  }
};
SeaTacAirport.render();

var SeattleCenter = {
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageCookiesPerCustomers: 3.7,
  totalDailyCookies: 0,
  totalCookiesPerHour: [],
  randomCustomersPerHour:[],
  locationName: SeattleCenter,
  calculateRandCustHour: function () {
    for(var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minimumCustomers)) + this.minimumCustomers);
    }
  },
  calculateTotalDailyCookies: function () {
    this.calculateRandCustHour();
    for(var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[j] * this.averageCookiesPerCustomers));
      this.totalDailyCookies += this.totalCookiesPerHour[j];
    }
  },
  render: function() {
    this.calculateTotalDailyCookies();
    var SeattleCenterUL = document.getElementById('seattle-center');
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      SeattleCenterUL.appendChild(liEL);
    }
    var SeattleCenterTotalSalesLi = document.createElement('li');
    SeattleCenterTotalSalesLi.textContent = 'Total Cookies Sold Today: ' + this.totalDailyCookies;
    SeattleCenterUL.appendChild(SeattleCenterTotalSalesLi);

  }
};
SeattleCenter.render();

var CapitolHill = {
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageCookiesPerCustomers: 2.3,
  totalDailyCookies: 0,
  totalCookiesPerHour: [],
  randomCustomersPerHour:[],
  locationName: CapitolHill,
  calculateRandCustHour: function () {
    for(var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minimumCustomers)) + this.minimumCustomers);
    }
  },
  calculateTotalDailyCookies: function () {
    this.calculateRandCustHour();
    for(var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[j] * this.averageCookiesPerCustomers));
      this.totalDailyCookies += this.totalCookiesPerHour[j];
    }
  },
  render: function() {
    this.calculateTotalDailyCookies();
    var CapitolHillUL = document.getElementById('capitol-hill');
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      CapitolHillUL.appendChild(liEL);
    }
    var capitolHillTotalSalesLi = document.createElement('li');
    capitolHillTotalSalesLi.textContent = 'Total Cookies Sold Today: ' + this.totalDailyCookies;
    CapitolHillUL.appendChild(capitolHillTotalSalesLi);

  }
};
CapitolHill.render();

var Alki = {
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageCookiesPerCustomers: 4.6,
  totalDailyCookies: 0,
  totalCookiesPerHour: [],
  randomCustomersPerHour:[],
  locationName: Alki,
  calculateRandCustHour: function () {
    for(var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.ceil(Math.random() * (this.maximumCustomers - this.minimumCustomers)) + this.minimumCustomers);
    }
  },
  calculateTotalDailyCookies: function () {
    this.calculateRandCustHour();
    for(var j = 0; j < hours.length; j++) {
      var cookiesSoldThisHour = Math.ceil(this.randomCustomersPerHour[j] * this.averageCookiesPerCustomers);

      this.totalCookiesPerHour.push(cookiesSoldThisHour);
      this.totalDailyCookies += cookiesSoldThisHour;
      console.log('cookiesSoldThisHour: ', cookiesSoldThisHour);
      console.log('this.totalDailyCookies: ', this.totalDailyCookies);

    }
  },
  render: function() {
    this.calculateTotalDailyCookies();
    var alkiUL = document.getElementById('alki');
    for (var i = 0; i < hours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      alkiUL.appendChild(liEL);
    }

    var alkiTotalSalesLi = document.createElement('li');
    alkiTotalSalesLi.textContent = 'Total Cookies Sold Today: ' + this.totalDailyCookies;
    alkiUL.appendChild(alkiTotalSalesLi);


  }
};

Alki.render();



var locationNameEL = document.getElementById('firstAndPike');

var locations = ['first And Pike', 'SeaTacAirport', 'SeattleCenter', 'CapitolHill', 'Alki'];

// for (var i = 0; i < locations.length; i++){
//   var liEL = document.createElement('li');
//   liEL.textContent = locations[i];
//   console.log(liEL);
//   locationNameEL.appendChild(liEL);
// };
