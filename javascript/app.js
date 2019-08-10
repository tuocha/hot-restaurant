// dependencies
var express = require("express");
var path = require("path");

// Express setup
var app = express();
var PORT = 3000;

// data parsing for Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// data points
var reservations = [
    {
        name: "tuocha",
        phone: 1231231234,
        email: "mushroom@gmail.com",
        uniqueID: "daenerys_stormborn"
    },
    {
        name: "gritty",
        phone: 2152151251,
        email: "gritty@gmail.com",
        uniqueID: "gritteeth"
    },
    {
        name: "memelord",
        phone: 5555555555,
        email: "memelord@gmail.com",
        uniqueID: "meme_lord_420"
    }
]

app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
   });