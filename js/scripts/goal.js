 // ID of the Google Spreadsheet
 var spreadsheetID = "15t_UyCVhfBd7hebuJmbwD-sr67phcR3BdCi_SFinvKs";

 // Make sure it is public or set to Anyone with link can view
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/default/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry[0];

  var branchName = entry['gsx$branchname']['$t'];
  var branchID = entry['gsx$branchid']['$t'];
  $('.branch h3').append(branchName + ' - ' + branchID);

  var year = entry['gsx$year']['$t'];
  $('.year').append(year);

  // Months
  var monthlyGoal = entry['gsx$feb2017goal']['$t'];
  var monthlyGoalConverted = numeral(entry['gsx$feb2017goal']['$t']).format('$0.0a');
  $('.monthly-goal').append(monthlyGoalConverted);

  var monthlyCurrent = entry['gsx$feb2017actual']['$t'];
  var monthlyCurrentConverted = numeral(monthlyCurrent).format('$0.0a');
  $('.month-goal progress').attr('value', monthlyCurrent);
  $('.month-goal progress').attr('max', monthlyGoal);
  $('.month-goal .monthly-current').append(monthlyCurrentConverted);

  // Years
  var yearlyGoal = entry['gsx$branchgoal']['$t'];
  var yearlyGoalConverted = numeral(entry['gsx$branchgoal']['$t']).format('$0.0a');
  $('.yearly-goal').append(yearlyGoalConverted);

  var yearlyCurrent = entry['gsx$branchactual']['$t'];
  var yearlyCurrentConverted = numeral(yearlyCurrent).format('$0.0a');
  $('.year-goal progress').attr('value', yearlyCurrent);
  $('.year-goal progress').attr('max', yearlyGoal);
  $('.year-goal .yearly-current').append(yearlyCurrentConverted);

  var month = entry['gsx$month']['$t'];
  $('.month').append(month);

});