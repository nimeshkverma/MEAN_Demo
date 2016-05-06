var express = require('express'),
path = require('path'),
app = express(),
PORT = 9000;
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/app'));

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, 'app/index.html'));
});
app.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});
