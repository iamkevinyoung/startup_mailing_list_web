var express = require('express');
var app = express();
var mysql = require('mysql');
var faker = require('faker');
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host : 'localhost',
    user: 'iamkevinyoung',
    database : 'join_us'
});

app.get("/", function(req, res) {
    //find count of users in db
    var q = "SELECT COUNT (*) AS count FROM users";
    connection.query(q, function(error, results){
       if(error) throw error;
       var count = results[0].count;
        //respond with count
        // res.send("We have " + count + " users in our db.")
        res.render("home", {data: count});
    });
});

app.post("/register", function(req, res) {
    var person = {
        email: req.body.email
    };
    connection.query('INSERT INTO users SET ?', person, function(error, result) {
        console.log(error);
        console.log(result);
        res.redirect("/");
    });
});


app.get("/joke", function(req, res) {
    var joke = "<strong>Knock knock...</strong>"
    res.send(joke)
});

app.get("/random_number", function(req, res) {
    var random = Math.floor(Math.random() * 10) + 1;
    res.send("Your lucky number is " + random)
});

app.listen(8080, function() {
    console.log("Server running on 8080!")
});