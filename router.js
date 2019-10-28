// page route module


var express = require('express');
var app = express();
var router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var Cliente = require('./model/Cliente');
var Problema = require('./model/Problema');
var Solucao = require('./model/Solucao');
var Ideacao = require('./model/ideacao');

var upload = multer({ dest: 'uploads/' })


//Creating client
router.post("/login", function(req, res) {

        Cliente.create({
        	
            nome: req.body.nome,
            email: req.body.email,
            whatsApp: req.body.whatsApp,
            clienteId: req.body.idCliente

        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://arienemachado.com/testApp/problema.html");
                  res.end();
                  console.log('saved login');
            }
        });
    });


//Creating problema
router.post("/problema", function(req, res) {

        Problema.create({
            problema1: req.body.problema1,
            porque1: req.body.porque1,
            porque2: req.body.porque2,
            porque3: req.body.porque3,
            problemaRaiz: req.body.problemaRaiz,
            clienteId: req.body.idCliente

        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://arienemachado.com/testApp/solucao.html");
                  res.end();
                  console.log('saved problema');
            }
        });
    });


//Creating problema
router.post("/solucao", function(req, res) {

        Solucao.create({
            ideia1: req.body.ideia1,
            ideia2: req.body.ideia2,
            ideia3: req.body.ideia3,
            ideiaForaCaixa: req.body.ideiaForaCaixa,
            clienteId: req.body.idCliente

        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://arienemachado.com/testApp/ideacao.html");
                  res.end();
                  console.log('saved solucao');
            }
        });
    });

//Creating problema
router.post("/ideacao", function(req, res) {

        Ideacao.create({
            ideacao1: 'test1',
            ideacao2: 'test2'
          
        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://arienemachado.com/testApp/index.html");
                  res.end();
                  console.log('saved ideacao');
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
//router.get('/problema', function(req, res) {
 //   res.send('Page problema');
//});

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