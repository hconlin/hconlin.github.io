const express = require('express');
const app = express();
const fs = require('fs');
let file = fs.readFileSync('analytics.json', 'utf-8');
let obj = JSON.parse(file);

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  obj.totalPageViews += 1;
  let date = new Date();
  obj.mostRecentView = formatDate(date);
  fs.writeFile('analytics.json', JSON.stringify(obj), function(err, result) {
     if(err) console.log('error', err);
   });
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});


function formatDate(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}
