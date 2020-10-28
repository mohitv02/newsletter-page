const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// app.post(function(req, res) {

// });
app.listen(3000, function() {
    console.log("server is running");
});