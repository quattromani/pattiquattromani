// Get JSON from Google Doc
$.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/1XctAuEKcLieeQp5VAqO2bhjEgnDptoXCrBTLMYLJy-o/od6/public/values?alt=json", function(data) {
  //first row "title" column
  console.log(data.feed.entry[0]['gsx$title']['$t']);
});
