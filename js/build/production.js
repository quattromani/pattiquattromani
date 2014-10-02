$.getJSON('https://spreadsheets.google.com/feeds/list/1XctAuEKcLieeQp5VAqO2bhjEgnDptoXCrBTLMYLJy-o/od6/public/values?alt=json', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var specialist = data.feed.entry[i]['gsx$specialist']['$t'];
    var units = data.feed.entry[i]['gsx$units']['$t'];
    var value = data.feed.entry[i]['gsx$value']['$t'];
    var total = data.feed.entry[i]['gsx$total']['$t'];

    tr = $('<tr/>');
    tr.append('<td class="specialist">' + specialist + '</td><td>' + units + '</td><td>' + value + '</td><td class="total">' + total + '</td>');
    $('table').append(tr);
  }
});

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