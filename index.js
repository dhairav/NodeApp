const express = require('express');
const app = express();

app.get('/', function (req, res) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	res.send('Your IP seems to be : ' + ip);
	console.log('IP Hit from : ' + ip);
});

app.listen(3000, function () {
  console.log('Listening for requests on post 3000');
});