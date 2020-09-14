/* eslint-disable no-inner-declarations */
/* eslint-disable no-redeclare */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
var hoursofworking = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
function Stores(location, mincustomer, maxcustomer, averagecookiesale, customerperhour, cookiesperhour, Total) {
    this.location = location;
    this.mincustomer = mincustomer;
    this.maxcustomer = maxcustomer;
    this.averagecookiesale = averagecookiesale;
    this.customerperhour = customerperhour;
    this.cookiesperhour = cookiesperhour;
    this.Total = Total;
}
Stores.prototype.getCustomerperhour = function () {
    for (var b = 0; b <= hoursofworking.length; b++) {
        this.customerperhour.push(getRandomNumber(this.mincustomer, this.maxcustomer));
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

};
Stores.prototype.getCookiesperhour = function () {

    for (var i = 0; i <= hoursofworking.length; i++) {
        var cookie = Math.floor(this.averagecookiesale * this.customerperhour[i]);
        this.cookiesperhour.push(cookie);
        // console.log(cookie + ' number of sold cookies per hour');
        // console.log(this.cookiesperhour);
        this.total = this.total + cookie;
        console.log(this.total);
    }

};
var Seattle = new Stores('Seattle', 23, 65, 6.3, [], [], 0);
Seattle.getCustomerperhour();
Seattle.getCookiesperhour();
console.log(Seattle);
// Tokyo
var Tokyo = new Stores('Tokyo', 3, 24, 1.2, [], [], 0);
Tokyo.getCustomerperhour();
Tokyo.getCookiesperhour();
console.log(Tokyo);
// dubai
var Dubai = new Stores('Dubai', 11, 38, 3.7, [], [], 0);
Dubai.getCustomerperhour();
Dubai.getCookiesperhour();
console.log(Tokyo);
// paris
var Paris = new Stores('Paris', 20, 38, 2.3, [], [], 0);
Tokyo.getCustomerperhour();
Tokyo.getCookiesperhour();
console.log(Paris);
// lima
var Lima = new Stores('Lima', 2, 16, 4.6, [], [], 0);
Lima.getCustomerperhour();
Lima.getCookiesperhour();
console.log(Lima);

Stores.prototype.render=function(){
var lastrow=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var parentElement = document.getElementById('sales');
var table = document.createElement('table');
parentElment.appendChild(table);
for (var rowsCount = 0; rowsCount < 5; rowsCount++) {
    // for rows
    var row = document.createElement('tr');
    table.appendChild(row);
    var rowSum=0;
    for (var columnCount = 0; columnCount <15; columnCount++) {
        var td = document.createElement('td');
        row.appendChild(td);
        if(columnCount<14){
        td.textContent=this.cookiesperhour;
        rowSum=rowSum+this.cookiesperhour;
        } else {
            td.textContent=rowSum;
        }
    }
}
};
Stores.render();

// Seattle objct
// var Seattle = {
//     locatin: 'Seattle',
//     mincustomer: 23,
//     maxcustomer: 65,
//     averagecookiesale: 6.3,
//     customerperhour: [],
//     cookiesperhour: [],
//     total:0,
//     getCustomerperhour: function () {
//         for (var b = 0; b <= hoursofworking.length; b++) {
//             this.customerperhour.push(getRandomNumber(this.mincustomer, this.maxcustomer));
//             console.log(this.customerperhour + ' number of customers per hour');
//         }

//     },

// thecookiesPerhour: function () {
//     this.getCustomerperhour();

//     for (var i = 0; i <= hoursofworking.length; i++) {

//         var cookie = Math.floor(this.averagecookiesale * this.customerperhour[i]);
//         this.cookiesperhour.push(cookie);
//         // console.log(this.cookiesperhour + ' number of sold cookies per hour');

//         console.log(cookie + ' number of sold cookies per hour');
//         console.log(this.cookiesperhour);
//         this.total=this.total+cookie;
//         console.log(this.total);
//     }
//     },
//     render: function () {
//         var parentElement = document.getElementById('sales');
//         var h1 = document.createElement('h1');
//         h1.textContent = this.locatin;
//         parentElement.appendChild(h1);
//         var ul = document.createElement('ul');
//         parentElement.appendChild(ul);
//         for (var c = 0; c <= hoursofworking.length; c++) {
//             var li = document.createElement('li');
//             li.textContent = hoursofworking[c] + ' : ' + this.cookiesperhour[c]+' cookies';
//             ul.appendChild(li);
//         }
// var li2=document.createElement('li2');
// li.textContent='Total:' +this.total;
// ul.appendChild(li2);
//     }
// };




// // Seattle.getCustomerperhour();
// Seattle.thecookiesPerhour();
// Seattle.render();

// // function for creating random number
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


