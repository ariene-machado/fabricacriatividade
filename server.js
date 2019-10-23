var express = require('express');
var app = express();
var router_user = require('./router.js');
var PORT = process.env.PORT || 8080;


app.use('/', router_user);

app.listen(PORT, function() {
    console.log('Server is running on Port: ', PORT);
});

module.exports = app;