/* eslint-disable no-inner-declarations */
/* eslint-disable no-redeclare */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
var hoursofworking = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var allLocations = [];
var hoursTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var body = document.getElementById('sales');
var table = document.createElement('table');
body.appendChild(table);

function addHeader() {
    var headerRow = document.createElement('tr');
    var th = document.createElement('th');
    headerRow.appendChild(th);
    for (var i = 0; i < hoursofworking.length; i++) {
        th = document.createElement('th');
        th.textContent = hoursofworking[i];
        headerRow.appendChild(th);
    }
    th = document.createElement('th');
    th.textContent = 'Daily Location Total';
    headerRow.appendChild(th);
    table.appendChild(headerRow);
}

function addFooter() {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = 'Totals';
    tr.appendChild(td);
    for (var i = 0; i < hoursTotal.length; i++) {
        td = document.createElement('td');
        td.textContent = hoursTotal[i];
        tr.appendChild(td);
    }
}

function Stores(location, mincustomer, maxcustomer, averagecookiesale) {
    this.location = location;
    this.mincustomer = mincustomer;
    this.maxcustomer = maxcustomer;
    this.averagecookiesale = averagecookiesale;
    this.customerperhour = [];
    this.cookiesperhour = [];
    this.total = 0;
    allLocations.push(this);
}

Stores.prototype.getCustomerperhour = function () {
    for (var b = 0; b <= hoursofworking.length; b++) {
        this.customerperhour.push(getRandomNumber(this.mincustomer, this.maxcustomer));
        console.log(this.customerperhour + ' number of customers per hour');
    }
};

Stores.prototype.getCookiesperhour = function () {
    for (var i = 0; i <= hoursofworking.length; i++) {
        var cookie = Math.floor(this.averagecookiesale * this.customerperhour[i]);
        this.cookiesperhour.push(cookie);
        console.log(cookie + ' number of sold cookies per hour');
        // console.log(this.cookiesperhour);
        this.total = this.total + cookie;
        console.log(this.total);
        hoursTotal[i] += cookie;
    }
    hoursTotal[hoursTotal.length - 1] += this.total;
};

Stores.prototype.render = function () {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = this.location;
    tr.appendChild(td);
    for (var i = 0; i < hoursofworking.length; i++) {
        var td = document.createElement('td');
        td.textContent = this.cookiesperhour[i];
        tr.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = this.total;
    tr.appendChild(td);
};

var Seattle = new Stores('Seattle', 23, 65, 6.3);
// Tokyo
var Tokyo = new Stores('Tokyo', 3, 24, 1.2);
// dubai
var Dubai = new Stores('Dubai', 11, 38, 3.7);
// paris
var Paris = new Stores('Paris', 20, 38, 2.3);
// lima
var Lima = new Stores('Lima', 2, 16, 4.6);
addHeader();
for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].getCustomerperhour();
    allLocations[i].getCookiesperhour();
    allLocations[i].render();
}
addFooter();
// function for creating random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


