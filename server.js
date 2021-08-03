var express = require('express');
var app = express();
var port = 4000;


app.get('/', (req, res, next)=>{
    res.send('Hello world !');
})


app.listen(port, ()=>{
    console.log(`Application started with port ${port}`);
})