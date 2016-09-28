'use strict';

//-----------------------------------------------
//------------------------------------------------
//SET UP OUR data

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var salesDataTable = document.getElementById('salesdata');

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

    var rowElement = document.createElement('tr');

    var headerCell = document.createElement('th');
    headerCell.textContent = this.locationName;
    rowElement.appendChild(headerCell);

    for (var i = 0; i < hours.length; i++){
      headerCell = document.createElement('td');
      headerCell.textContent = hours[i];
      rowElement.appendChild(dataCell);
    }
    headerCell = document.createElement('td');
    headerCell.textContent = this.locationName;
    rowElement.appendChild(dataCell);

    salesDataTable.appendChild(rowElement);
  };

}
var stores = [];

new CookieStand(23, 65, 6.3, 'First and Pike', 'first-and-pike');
new CookieStand(3, 24, 1.2, 'Seatac Airport', 'seatac-airport');
new CookieStand(11, 38, 3.7, 'Seattle Center', 'seattle-center');
new CookieStand(20, 38, 2.3, 'Capitol Hill', 'capitol-hill');
new CookieStand(2, 16, 4.6, 'Alki', 'alki');

//-----------------------------------------------
//------------------------------------------------
//DEFINE OUR ACTIONS
function makeHeaderRow(){
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th');
  headerCell.textContent = 'Hours Open';
  rowElement.appendChild(headerCell);

  for (var i = 0; i < hours.length; i++){
    headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    rowElement.appendChild(headerCell);

  }
  salesDataTable.appendChild(rowElement);

}

function makeFooterRow(){
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th');
  headerCell.textContent = this.locationName;
  rowElement.appendChild(headerCell);

  var allLocations = 0;
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    for (var j = 0; i < allLocations.length; i++) {
      total += allLocations[j].totalCookiesPerHour[i];
    }
    headerCell = document.createElement('th');
    headerCell.textContent = this.locationName;


  }
}

function renderAllLocations(){
  for (var i = 0; i < stores.length; i++) {
    allLocations[i].render();
  }
}
//-----------------------------------------------
//------------------------------------------------
//this IS WHERE OUR CODE EXECUTES

makeHeaderRow();
//list the time across the top

renderAllLocations();
//loop through the array of objects representing eadh store location and call the render method that each one has, so as to display data in each row
makeFooterRow();

//make a row acrosss the bottom of the table that sums
