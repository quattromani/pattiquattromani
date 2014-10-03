$.getJSON('https://spreadsheets.google.com/feeds/list/1XctAuEKcLieeQp5VAqO2bhjEgnDptoXCrBTLMYLJy-o/od6/public/values?alt=json', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var specialist = data.feed.entry[i]['gsx$specialist']['$t'];
    var units = data.feed.entry[i]['gsx$units']['$t'];
    var value = data.feed.entry[i]['gsx$value']['$t'];
    var total = data.feed.entry[i]['gsx$total']['$t'];

    if (units != 0) {
      tr = $('<tr/>');
      tr.append('<td class="specialist">' + specialist + '</td><td>' + units + '</td><td>' + value + '</td><td class="total">' + total + '</td>');
      $('table').append(tr);
    }
  }

});

// set the date we're counting down to
var target_date = new Date("Nov 28, 2014").getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById("countdown");

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    countdown.innerHTML = days + " days, " + hours + " hours, "
    + minutes + " minutes, " + seconds + " seconds";

}, 1000);

/* ==========================================================================
    Main -- Version: 0.4.0 - Updated: 2/20/2014
    ========================================================================== */

// Add classes to first and last li's for every instance
$(function() {
  // Add classes to first and last of each list
  $('li:first-child').addClass('js-first');
  $('li:last-child').addClass('js-last');
});

// Set year
(function($) {

  $.fn.getYear = function() {
    var d = new Date();
    var x = document.getElementById("year");
    x.innerHTML=d.getFullYear();
  }

}(jQuery));

$('.getYear').getYear();