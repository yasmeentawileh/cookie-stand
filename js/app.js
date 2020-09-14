/* eslint-disable no-redeclare */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
var hoursofworking = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
// Seattle object
var Seattle = {
    locatin: 'Seattle',
    mincustomer: 23,
    maxcustomer: 65,
    averagecookiesale: 6.3,
    customerperhour: [],
    cookiesperhour: [],
    total:0,
    getCustomerperhour: function () {
        for (var b = 0; b <= hoursofworking.length; b++) {
            this.customerperhour.push(getRandomNumber(this.mincustomer, this.maxcustomer));
            console.log(this.customerperhour + ' number of customers per hour');
        }

    },

    thecookiesPerhour: function () {
        this.getCustomerperhour();

        for (var i = 0; i <= hoursofworking.length; i++) {

            var cookie = Math.floor(this.averagecookiesale * this.customerperhour[i]);
            this.cookiesperhour.push(cookie);
            // console.log(this.cookiesperhour + ' number of sold cookies per hour');

            console.log(cookie + ' number of sold cookies per hour');
            console.log(this.cookiesperhour);
            this.total=this.total+cookie;
            console.log(this.total);
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var h1 = document.createElement('h1');
        h1.textContent = this.locatin;
        parentElement.appendChild(h1);
        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (var c = 0; c <= hoursofworking.length; c++) {
            var li = document.createElement('li');
            li.textContent = hoursofworking[c] + ' : ' + this.cookiesperhour[c]+' cookies';
            ul.appendChild(li);
        }
var li2=document.createElement('li2');
li.textContent='Total:' +this.total;
ul.appendChild(li2);
    }
};




// Seattle.getCustomerperhour();
Seattle.thecookiesPerhour();
Seattle.render();

// function for creating random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Tokyo
var Tokyo = {
    locatin: 'Tokyo',
    mincustomer: 3,
    maxcustomer: 24,
    averagecookiesale: 1.2,
    customerperhour: [],
    cookiesperhour: [],
    total:0,
    getCustomerperhour: function () {
        for (var b = 0; b <= hoursofworking.length; b++) {
            this.customerperhour.push(getRandomNumber(this.mincustomer, this.maxcustomer));
            console.log(this.customerperhour + ' number of customers per hour');
        }

    },

    thecookiesPerhour: function () {
        this.getCustomerperhour();

        for (var i = 0; i <= hoursofworking.length; i++) {

            var cookie = Math.floor(this.averagecookiesale * this.customerperhour[i]);
            this.cookiesperhour.push(cookie);
            // console.log(this.cookiesperhour + ' number of sold cookies per hour');

            console.log(cookie + ' number of sold cookies per hour');
            console.log(this.cookiesperhour);
            this.total=this.total+cookie;
            console.log(this.total);
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var h1 = document.createElement('h1');
        h1.textContent = this.locatin;
        parentElement.appendChild(h1);
        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (var c = 0; c <= hoursofworking.length; c++) {
            var li = document.createElement('li');
            li.textContent = hoursofworking[c] + ' : ' + this.cookiesperhour[c]+' cookies';
            ul.appendChild(li);
        }
var li2=document.createElement('li2');
li.textContent='Total:' +this.total;
ul.appendChild(li2);
    }
};

// Seattle.getCustomerperhour();
Tokyo.thecookiesPerhour();
Tokyo.render();

// function for creating random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// DUBAI
var Dubai = {
    locatin: 'Dubai',
    mincustomer: 11,
    maxcustomer: 38,
    averagecookiesale: 3.7,
    customerperhour: [],
    cookiesperhour: [],
    total:0,
    getCustomerperhour: function () {
        for (var b = 0; b <= hoursofworking.length; b++) {
            this.customerperhour.push(getRandomNumber(this.mincustomer, this.maxcustomer));
            console.log(this.customerperhour + ' number of customers per hour');
        }

    },

    thecookiesPerhour: function () {
        this.getCustomerperhour();

        for (var i = 0; i <= hoursofworking.length; i++) {

            var cookie = Math.floor(this.averagecookiesale * this.customerperhour[i]);
            this.cookiesperhour.push(cookie);
            // console.log(this.cookiesperhour + ' number of sold cookies per hour');

            console.log(cookie + ' number of sold cookies per hour');
            console.log(this.cookiesperhour);
            this.total=this.total+cookie;
            console.log(this.total);
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var h1 = document.createElement('h1');
        h1.textContent = this.locatin;
        parentElement.appendChild(h1);
        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (var c = 0; c <= hoursofworking.length; c++) {
            var li = document.createElement('li');
            li.textContent = hoursofworking[c] + ' : ' + this.cookiesperhour[c]+' cookies';
            ul.appendChild(li);
        }
var li2=document.createElement('li2');
li.textContent='Total:' +this.total;
ul.appendChild(li2);
    }
};




// Dubai.getCustomerperhour();
Dubai.thecookiesPerhour();
Dubai.render();

// function for creating random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// PARIS
var Paris = {
    locatin: 'Paris',
    mincustomer: 20,
    maxcustomer: 38,
    averagecookiesale: 2.3,
    customerperhour: [],
    cookiesperhour: [],
    total:0,
    getCustomerperhour: function () {
        for (var b = 0; b <= hoursofworking.length; b++) {
            this.customerperhour.push(getRandomNumber(this.mincustomer, this.maxcustomer));
            console.log(this.customerperhour + ' number of customers per hour');
        }

    },

    thecookiesPerhour: function () {
        this.getCustomerperhour();

        for (var i = 0; i <= hoursofworking.length; i++) {

            var cookie = Math.floor(this.averagecookiesale * this.customerperhour[i]);
            this.cookiesperhour.push(cookie);
            // console.log(this.cookiesperhour + ' number of sold cookies per hour');

            console.log(cookie + ' number of sold cookies per hour');
            console.log(this.cookiesperhour);
            this.total=this.total+cookie;
            console.log(this.total);
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var h1 = document.createElement('h1');
        h1.textContent = this.locatin;
        parentElement.appendChild(h1);
        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (var c = 0; c <= hoursofworking.length; c++) {
            var li = document.createElement('li');
            li.textContent = hoursofworking[c] + ' : ' + this.cookiesperhour[c]+' cookies';
            ul.appendChild(li);
        }
var li2=document.createElement('li2');
li.textContent='Total:' +this.total;
ul.appendChild(li2);
    }
};




// paris.getCustomerperhour();
Paris.thecookiesPerhour();
Paris.render();

// function for creating random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Lima
var Lima = {
    locatin: 'Lima',
    mincustomer: 2,
    maxcustomer: 16,
    averagecookiesale: 4.6,
    customerperhour: [],
    cookiesperhour: [],
    total:0,
    getCustomerperhour: function () {
        for (var b = 0; b <= hoursofworking.length; b++) {
            this.customerperhour.push(getRandomNumber(this.mincustomer, this.maxcustomer));
            console.log(this.customerperhour + ' number of customers per hour');
        }

    },

    thecookiesPerhour: function () {
        this.getCustomerperhour();

        for (var i = 0; i <= hoursofworking.length; i++) {

            var cookie = Math.floor(this.averagecookiesale * this.customerperhour[i]);
            this.cookiesperhour.push(cookie);
            // console.log(this.cookiesperhour + ' number of sold cookies per hour');

            console.log(cookie + ' number of sold cookies per hour');
            console.log(this.cookiesperhour);
            this.total=this.total+cookie;
            console.log(this.total);
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var h1 = document.createElement('h1');
        h1.textContent = this.locatin;
        parentElement.appendChild(h1);
        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (var c = 0; c < hoursofworking.length; c++) {
            var li = document.createElement('li');
            li.textContent = hoursofworking[c] + ' : ' + this.cookiesperhour[c]+' cookies';
            ul.appendChild(li);
        }
var li2=document.createElement('li2');
li.textContent='Total:' +this.total;
ul.appendChild(li2);
    }
};




// Seattle.getCustomerperhour();
Lima.thecookiesPerhour();
Lima.render();

// function for creating random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
