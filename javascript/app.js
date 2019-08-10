// dependencies
// =============================================================

var express = require("express");
var path = require("path");

// Express setup
// =============================================================
var app = express();
var PORT = 3000;

// data parsing for Express
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// data points
// =============================================================
const reservations = [
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

const waitlist = [
    {
        name: "dan",
        phone: 1231231234,
        email: "mushroom@gmail.com",
        uniqueID: "Bronn-of-the-blackwater"
    },
    {
        name: "rick",
        phone: 2152151251,
        email: "gritty@gmail.com",
        uniqueID: "tyrion-lannister"
    }
]

// routing
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "../tables.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(waitlist)
});

app.get("/api/waitlist", function (req, res) {
    return res.json(reservations)
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "../reservation.html"));
   });

// create new reservation - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newReservation
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });

app.post("/api/waitlist", function(req, res) {
    var newWaitlist = req.body;
  
    newWaitlist.routeName = newWaitlist.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newWaitlist);
  
    waitlist.push(newWaitlist);
  
    res.json(newWaitlist);
  });
  
// port listener
app.listen(PORT, function() {
    console.log("App listening to : " + PORT)
})