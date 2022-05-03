const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.REACT_APP_SERVER_PORT || 8080;
const fs = require("fs");
// create an instance of express to serve our end points
const app = express();

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// for prevent cors issue
app.use(cors());
// this is where we'll handle our various routes from
const routes = require("./route.js")(app, fs);

// finally, launch our server on port 8080.
const server = app.listen(port, () => {
	console.log("listening on port %s...", server.address().port);
});
