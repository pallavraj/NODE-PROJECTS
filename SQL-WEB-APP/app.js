const express = require('express');
const app = express();
const mysql = require('mysql');

app.set("view engine", "ejs");

var connection = mysql.createConnection({
    host : "localhost",
    user : "pallav",
    password : "pallav",
    database : "join_us"

});



app.get("/",function(re1,res) {
    var q = "select count(*) AS count from users";
    connection.query(q , function (err , results) {
    if(err) throw err;
    var count = results[0].count;
    });

    res.render("home");

});

app.get("/joke", function (req , res) {

    res.render("home");
})

app.listen(5000,function () {

    console.log("SERVER RUNNING AT 5000!")

})