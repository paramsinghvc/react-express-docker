const express = require('express');
const path = require('path');

const app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "x-my-token");
	res.header("Access-Control-Allow-Methods", "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT");
	res.header("Access-Control-Allow-Credentials", "true");
	// res.header("Access-Control-Expose-Headers", "x-token");
	res.header('x-token', 'foo');

	next();
});

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
	console.log(req.method);
	var list = ["item1", "item2", "item3"];
	res.setHeader('Cache-Control', "public, max-age=60")
	res.json(list);
	console.log('Sent list of items');
});

app.post('/api/token', (req, res) => {
	console.log(req.method);
	res.cookie('X-TOKEN', 'cookie_value', {
		httpOnly: true
	});
	res.send('Cookie is set');
});

// Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
