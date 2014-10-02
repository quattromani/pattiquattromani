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
