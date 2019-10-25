// page route module


var express = require('express');
var app = express();
var router = express.Router();

var cliente = require('./model/Cliente');


//Creating client
router.post("/login", function(req, res) {

        cliente.create({
            nome: req.body.nome,
            email: req.body.email,
            whatsApp: req.body.whatsApp
        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	res.setHeader("Location", "http://arienemachado.com/testApp/problema.html");

                //res.send("Saved User");

            }
        });
    });



//Home page route
router.get('/user', function(req, res) {
    res.send('Home page user Ariene app fabrica!!!');
});

//Login page route
//router.get('/login', function(req, res) {
  //  res.send('Page login');
//});

//Problema page route
router.get('/problema', function(req, res) {
    res.send('Page problema');
});

//Ideacao page route
router.get('/ideacao', function(req, res) {
    res.send('Page ideacao');
});

//Prototipacao page route
router.get('/prototipacao', function(req, res) {
    res.send('Page prototipacao');
});

//Solucao page route
router.get('/solucao', function(req, res) {
    res.send('Page solucao');
});

//Ideias page route
router.get('/view-ideias', function(req, res) {
    res.send('Page view ideais');
});

//View Ideias page route
router.get('/criar-livro', function(req, res) {
    res.send('Page view criar livro');
});

module.exports = router;