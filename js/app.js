/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
// Seattle object
var Seattle = {
    mincustomer: 23,
    maxcustomer: 65,
    averagecookiesale: 6.3,
    customerperhour: [],
    cookiesperhour: [],
    hoursofworking: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'],

    getCustomerperhour: function () {
        this.customerperhour.push(getRandomNumber(this.mincustomer, this.maxcustomer));
        console.log(this.customerperhour + ' number of customers per hour');
    },

    thecookiesPerhour: function () {
        this.getCustomerperhour();
        for (var i = 0; i <= this.hoursofworking.length; i++) {
            var cookie = this.averagecookiesale * this.customerperhour[i];
            // this.cookiesPerhour.push(cookie);
            // console.log(this.cookiesperhour + ' number of sold cookies per hour');
            console.log(cookie);
            console.log(this.customerperhour[i]);
        }
    }

    // getCookiesperhour: function () {
    //     this.cookiesperhour = getCookiesarray();
    // }

};
// seattle.getCustomerperhour();
Seattle.thecookiesPerhour();


// function for creating random number
function getRandomNumber(mincustomer, maxcustomer) {
        var random = Math.random();
        random = (random * (maxcustomer - mincustomer + 1)) + mincustomer;
        random = Math.floor(random);
        // console.log('yasmeen');
        // console.log(random);
        return random;

}

// to make the number of cookies that paid ber hour
// seattle.getCookiesperhour();
// function getCookiesarray() {
//     for (var i = 0; i < 14; i++) {
//         cookiesperhour = customerperhour * averagecookiesale;
//         var arr = cookiesperhour];
//         resturn arr;
//     }
