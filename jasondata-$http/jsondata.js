var express = require('express');
var app = express();

app.use(express.static('design'));
// app.get('/',function(req,res){
//     res.send("Hello");
// });

app.listen(3000);