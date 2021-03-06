// Identify the month
var months    = ['january','february','march','april','may','june','july','august','september','october','november','december'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
var output = document.getElementById('output');
console.log(thisMonth);


 // ID of the Google Spreadsheet
 var spreadsheetID = "15t_UyCVhfBd7hebuJmbwD-sr67phcR3BdCi_SFinvKs";

 // Make sure it is public or set to Anyone with link can view
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/default/public/values?alt=json";

// The URL
// https://spreadsheets.google.com/feeds/list/15t_UyCVhfBd7hebuJmbwD-sr67phcR3BdCi_SFinvKs/default/public/values?alt=json

$.getJSON(url, function(data) {

  var entry = data.feed.entry[0];

  var branchName = entry['gsx$branchname']['$t'];
  var branchID = entry['gsx$branchid']['$t'];
  $('.branch h3').append(branchName);
  // $('.branch h3').append(branchName + ' - ' + branchID);

  var year = entry['gsx$year']['$t'];
  $('.year').append(year);

  var monthlyUnits = entry['gsx$' + thisMonth + '2018units']['$t'];
  $('.monthly-units').append('<span>' + monthlyUnits + '</span>');

  var yearlyUnits = entry['gsx$units']['$t'];
  $('.yearly-units').append('<span>' + yearlyUnits + '</span>');

  // Months
  var monthlyGoal = entry['gsx$' + thisMonth + '2018goal']['$t'];
  var monthlyGoalConverted = numeral(entry['gsx$' + thisMonth + '2018goal']['$t']).format('$0.0a');
  $('.monthly-goal').append(monthlyGoalConverted);

  var monthlyCurrent = entry['gsx$' + thisMonth + '2018actual']['$t'];
  var monthlyCurrentConverted = numeral(monthlyCurrent).format('$0.0a');
  $('.month-goal .monthly-current').append(monthlyCurrentConverted);

  var monthlyPerc = ((monthlyCurrent/monthlyGoal) * 100).toFixed(2) + '%';
  $('.month-goal .progress-bar').css('width', monthlyPerc);

  // Years
  var yearlyGoal = entry['gsx$branchgoal']['$t'];
  var yearlyGoalConverted = numeral(entry['gsx$branchgoal']['$t']).format('$0.0a');
  $('.yearly-goal').append(yearlyGoalConverted);

  var yearlyCurrent = entry['gsx$branchactual']['$t'];
  var yearlyCurrentConverted = numeral(yearlyCurrent).format('$0.0a');
  $('.year-goal .yearly-current').append(yearlyCurrentConverted);

  var yearlyPerc = ((yearlyCurrent/yearlyGoal) * 100).toFixed(2) + '%';
  $('.year-goal .progress-bar').css('width', yearlyPerc);

  $('.month').append(thisMonth);

});

// Date
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

date = month + "/" + day + "/" + year;

$('.date').append(date);

// Day-Year Tracker
function dateTracker() {
  var today = new Date();
  var start = new Date(today.getFullYear(), 0, 0);
  var diff = today - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  var goalYear = (((day / 365) * 100) + '%');

  var month = today.getMonth();
  var totalDays = (daysInMonth(month + 1, today.getFullYear()));
  var pastDays = (totalDays - (daysLeftInMonth(new Date())));
  var goalDay = (((pastDays / totalDays) * 100) + '%');

  $('.day-tracker').css({'left' : goalDay,'visibility': 'visible'});
  $('.year-tracker').css({'left' : goalYear,'visibility': 'visible'});
}

function daysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
}

function daysLeftInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate();
}

dateTracker();
