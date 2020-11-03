const express = require('express');
// const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

// const dbJson = require('./db/db.json')

// will share any static html files with the browser
app.use( express.static('html') )
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Taking Notes on PORT " + PORT);
});