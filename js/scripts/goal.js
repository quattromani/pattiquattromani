 // ID of the Google Spreadsheet
 var spreadsheetID = "15t_UyCVhfBd7hebuJmbwD-sr67phcR3BdCi_SFinvKs";

 // Make sure it is public or set to Anyone with link can view
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/default/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;

  var year = entry[0]['gsx$year']['$t'];
  $('.year').append(year);

  var yearlyGoal =entry[0]['gsx$goal']['$t'];
  $('.yearly-goal').append(monthlyGoal);

  var month = entry[0]['gsx$month']['$t'];
  $('.month').append(month);

  var monthlyGoal =entry[0]['gsx$goal']['$t'];
  $('.month-goal').append(monthlyGoal);
});
