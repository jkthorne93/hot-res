// Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


// Data
var reservations = [
  {
    routeName: 23424
  }

];

var waitlist = [
  {
    routeName: 1234
  }
]


// Routes
app.get("/", function (req, res) {
  res.send(path.join(__dirname, "home.html"));
});

app.get("/reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all tables
app.get("/api/tables", function (req, res) {
  var table = req.params.tables;
  console.log(table)

  for (var i = 0; i < tables.length; i++) {
    if (table === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }
  
  return res.json(tables);
});

// posts to tables 
app.post("/api/tables", function(req,res) {
  var newReservation = req.body;

  newReservation.routeName = newReservation.name.replace(/\s/g, "").toLowerCase();
  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);
})

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});