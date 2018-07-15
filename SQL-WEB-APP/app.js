const express = require('express');
const app = express();


app.get("/",function(re1,res) {
    res.send("HELLO");
});

app.listen(5000,function () {

    console.log("SERVER RUNNING AT 5000!")

})