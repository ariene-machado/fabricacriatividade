var express = require('express');
var app = express();
var router_user = require('./router.js');
var port = 3000;


app.use('/', router_user);

app.listen(port, function() {
    console.log('Server is running on Port: ', port);
});

module.exports = app;