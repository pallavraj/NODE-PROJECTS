const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host : "localhost",
    user : "pallav",
    password : "pallav",
    database : "join_us"

});

app.post("/register", function (req,res) {

var email = req.body.email;
var person ={
    email : req.body.email,
};

connection.query("insert into users set ?",person ,function (err ,results) {

    if(err) throw err;

    res.redirect("/");

});


});

app.get("/",function(re1,res) {
    var q = "select count(*) AS count from users";
    connection.query(q , function (err , results) {
    if(err) throw err;
    var count = results[0].count;
        res.render("home",{data : count});
    });

});

app.get("/joke", function (req , res) {

    res.render("home");
})

app.listen(5000,function () {

    console.log("SERVER RUNNING AT 5000!")

})