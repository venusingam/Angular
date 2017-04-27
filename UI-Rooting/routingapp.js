var express = require('express');
var app = express();
app.use(express.static('routing'));
app.listen("9000", function(err) {
    if (err) {
        console.log("port not working")
    } else {
        console.log("port working");
    }
});