// page route module


var express = require('express');
var app = express();
var router = express.Router();


http = require('http');
const path = require('path');


var formidable = require('formidable');
var cloudinary = require('cloudinary').v2

var request = require('request');


var Cliente = require('./model/Cliente');
var Problema = require('./model/Problema');
var Problema2 = require('./model/Problema2');

var Solucao = require('./model/Solucao');
var Ideacao = require('./model/Ideacao');

var Photo = require('./model/Photo');
var Photo2 = require('./model/Photo2');


const PDF = require('pdfkit');
const blobStream  = require('blob-stream');

const fs = require('fs');


const axios = require('axios')



//Creating client
router.post("/login", function(req, res) {
        Cliente.create({
            nome: req.body.nome,
            email: req.body.email,
            whatsApp: req.body.whatsApp,
            empresa: req.body.empresa,
            cargo: req.body.cargo,
            clienteId: req.body.idCliente

        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://sfc.fabricadecriatividade.com.br/problema.html");
                  res.end();
                  console.log('saved login');
            }
        });
    });


//Creating problema 1
router.post("/problema", function(req, res) {

        Problema.create({
            problema1: req.body.problema1,
            clienteId: req.body.idCliente

        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://sfc.fabricadecriatividade.com.br/problema2.html");
                  res.end();
                  console.log('saved problema');
            }
        });
    });


//Creating problema 2
router.post("/problema2", function(req, res) {

        Problema2.create({
            problema2: req.body.problema2,
            clienteId: req.body.idCliente

        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://sfc.fabricadecriatividade.com.br/ideacao.html");
                  res.end();
                  console.log('saved problema2');
            }
        });
    });

//Creating ideacao
router.post("/ideacao", function(req, res) {

        Ideacao.create({
            ideiaAusenteCampo1: req.body.ideiaAusenteCampo1,
            ideiaAusenteCampo2: req.body.ideiaAusenteCampo2,
            ideiaConexaoCampo1: req.body.ideiaConexaoCampo1,
            ideiaConexaoCampo2: req.body.ideiaConexaoCampo2,
            ideiaOpenCampo1: req.body.ideiaOpenCampo1,
            ideiaOpenCampo2: req.body.ideiaOpenCampo2,
            ideiaFazerCampo1: req.body.ideiaFazerCampo1,
            ideiaFazerCampo2: req.body.ideiaFazerCampo2,
            clienteId: req.body.clienteId
          
        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://sfc.fabricadecriatividade.com.br/prototipacao.html");
                  res.end();
                  console.log('saved ideacao');
            }
        });
    });


//get ideas criadas

//2 - Ler todas - ideas
router.get('/ideas/:id', (req, res) => {
    var user = [ ];
    var x;
    var clienteId = req.params.id
    Ideacao.find({clienteId})
        .then((result) => {
            res.json(result);
            console.log('json :'+ result);
            res.setHeader("Location", "http://sfc.fabricadecriatividade.com.br/ideacao.html");
            res.end();            
        })
        .catch((err) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
        });
});


//Creating solucao
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
            	  res.setHeader("Location", "http://sfc.fabricadecriatividade.com.br/prototipacao.html");
                  res.end();
                  console.log('saved solucao');
            }
        });
    });


//Creating prototipacao 1
router.post("/prototipacao", function(req, res) {

    var form = new formidable.IncomingForm();

    form.parse(req);


    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);

var photo = new Photo(req.body.imageFile);
  // Get temp file path
  var imageFile = file.path;


  // Upload file to Cloudinary
  cloudinary.uploader.upload(imageFile, { tags: 'express_sample' })
    .then(function (image) {
      console.log('** file uploaded to Cloudinary service');
      console.dir(image);
      console.log('URL image: '+image.url);
      photo.image = image;
      var photoLink = image.url;
      var fileImage1 = file.name

      var imgId = Date.now() + Math.random()
      //Add to database
      Photo.create({
            clienteId: req.body.idCliente,
            imgURL: image.url,
            imgId: fileImage1,
            fileImage1: fileImage1
        })

      // Save photo with image metadata
      //return 
    })
    .then(function () {
      console.log('** photo saved');
    })
    .finally(function () {
      res.render('photos/create_through_server', { photo: photo, upload: photo.image });
    });
         res.statusCode = 302;
         res.setHeader("Location", "http://sfc.fabricadecriatividade.com.br/prototipacao.html");
         res.end();
    });
  });


//Creating prototipacao 2
router.post("/prototipacao2", function(req, res) {

    var form = new formidable.IncomingForm();

    form.parse(req);

    
    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);

var photo = new Photo(req.body.imageFile);
  // Get temp file path
  var imageFile = file.path;


  // Upload file to Cloudinary
  cloudinary.uploader.upload(imageFile, { tags: 'photo2' })
    .then(function (image) {
      console.log('** file uploaded to Cloudinary service');
      console.dir(image);
      console.log('URL image: '+image.url);
      photo.image = image;
      var photoLink = image.url;
      var fileImage1 = file.name

      var imgId = Date.now() + Math.random()
      //Add to database
      Photo2.create({
            clienteId: req.body.idCliente,
            imgURL: image.url,
            imgId: fileImage1,
            fileImage1: fileImage1
        })

      // Save photo with image metadata
      //return 
    })
    .then(function () {
      console.log('** photo saved');
    })
    .finally(function () {
      res.render('photos/create_through_server', { photo: photo, upload: photo.image });
    });
         res.statusCode = 302;
         res.setHeader("Location", "http://sfc.fabricadecriatividade.com.br/prototipacao2.html");
         res.end();
    });
  });



//- Ler todas image prototipo1

router.get('/image/:imgId', (req, res) => {
    
     var imgId = req.params.imgId

    Photo.find({imgId})
        .then((result) => {
            res.json(result);
            console.log('json :'+ result);
                  
        })
        .catch((err) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
        });
});


//- Ler todas ideias

router.get('/ideias/:id', (req, res) => {
    
     var id = req.params.clienteId

    Ideacao.find({id})
        .then((result) => {
            res.json(result);
            console.log('json :'+ result);              
        })
        .catch((err) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
        });
});



//- Ler todas image prototipo2

router.get('/image2/:imgId', (req, res) => {
    
     var imgId = req.params.imgId

    Photo2.find({imgId})
        .then((result) => {
            res.json(result);
            console.log('json :'+ result);
                    
        })
        .catch((err) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
        });
});


  //Creating PDF
  router.post("/pdf", function(req, res) {

    //create pdf
    doc = new PDF(); 

    let imgCapa = req.body.link1Url1; 
    let contraCapa = req.body.link1Url2; 

    let prob1 = req.body.problema1;

    let prob2 = req.body.problema2;

    let ideaUser = req.body.ideaUser;

    let autor = req.body.autor;

    let filename = 'ideiaforacaixa'
  // Stripping special characters
  filename = encodeURIComponent(filename) + '.pdf'
  // Setting response to 'attachment' (download).
  // If you use 'inline' here it will automatically open the PDF
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf') ;
  let imgStatic = "https://res.cloudinary.com/hmsjccygb/image/upload/v1573220551/hstjtloyjtevk7obry13.jpg";
                    //creating a new PDF object

//const title = 'EU TIVE UMA IDEIA DENTRO DA CAIXA';


 // Title
// doc.fontSize(24);
// doc.fillColor('purple')
//    .text(title, {
//      align: 'center'
//  })

// Scale proprotionally to the specified width
// doc.moveDown();
// // Scale the image
// doc.fontSize(18);

// var imgPath = 'data/'


  //doc.image('img/Image-user.jpg', 160, 150, {width: 300, align: 'center'})

  //Image book cover aqui
 // doc.image('img/book-cover-01.png',10, 10, { width: 590, height: 700, align: 'center'})

  // Fit the image in the dimensions, and center it both horizontally and vertically
//doc.image('img/book-cover-01.png', 10, 10, {fit: [800, 700], align: 'center', valign: 'center'})

// Scale the image

  doc.image('img/book-cover-01.png', 60, 0, {scale: 0.15}, {margin: 0})
  doc.moveDown();
  doc.text(autor,80,600,{align:'center'})
  doc.fillColor('black');


  //adiciona image to prototipo 1

        doc.moveDown();

        console.log('img capa:' + imgCapa);

        request({
                url: imgCapa,
                encoding: null // Prevents Request from converting response to string
              }, function(err, response, body) {
              if (err) throw err;
// Inject the image with the required attributes
              doc.image(body,160, 315,{width:300});  
 

             doc.addPage()
            doc.moveDown();
            doc.fontSize(18)
            doc.fillColor('purple')
            doc.moveDown();
            doc.text('PROBLEMA', { 
            align: 'center'
          }
        );


            doc.fontSize(16)
            doc.fillColor('black')
            doc.moveDown();
          doc.text(prob1, { 
            align: 'center'
          }
        );

        doc.moveDown();
        doc.fontSize(16)
            doc.fillColor('black')
            doc.moveDown();
          doc.text(prob2, { 
            align: 'center'
          }
        );


      doc.moveDown();
        doc.fontSize(18)
            doc.fillColor('purple')
            doc.moveDown();
          doc.text('Idea fora da caixa', { 
            align: 'center'
          }
        );
        
        doc.fontSize(18)
            doc.fillColor('black')
            doc.moveDown();
          doc.text(ideaUser, { 
            align: 'center'
          }
        );


 // Add page contra Capa
        doc.addPage()

        doc.image('img/book-cover-02.png', 60, 0, {scale: 0.15}, {margin: 0})
          doc.moveDown();
          doc.text("contra capa",80,600,{align:'center'})
          doc.fillColor('black');

              doc.pipe(res)
              doc.end(); 

              return;

    });
});



//Ideacao page route
router.get('/', function(req, res) {
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