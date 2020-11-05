const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;


const dbJson = require('./db/db.json')

const app = express();

// server looks in its parent folder for a folder called public and serves all the files within
app.use( express.static('public') )
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require("./apiroutes")(app);
// app.use('/home-page', function (req, res) {
//     res.send('This is a exported route from another file!')
// })

// app.use('/', function (req, res) {
//     res.send('Hello World! This is the Root route.')
// })
// app.use('*', function (req, res) {
//     res.send('This is a wild card route.')
// })

require("./htmlroutes")(app);

app.listen(PORT, function () {
    console.log("Taking Notes on PORT " + PORT);
    
});