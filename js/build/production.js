// Get JSON from Google Doc
$.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/1XctAuEKcLieeQp5VAqO2bhjEgnDptoXCrBTLMYLJy-o/od6/public/values?alt=json", function(data) {
  //first row "title" column
  console.log(data.feed.entry[0]['gsx$title']['$t']);
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