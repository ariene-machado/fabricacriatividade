// page route module


var express = require('express');
var app = express();
var router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var Cliente = require('./model/Cliente');
var Problema = require('./model/Problema');
var Solucao = require('./model/Solucao');
var Ideacao = require('./model/Ideacao');

var Photo = require('./model/Photo');
  var nomePdf2 = [];




const PDFDocument = require('pdfkit');
const fs = require('fs');

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
            	  res.setHeader("Location", "http://arienemachado.com/testApp/ideacao.html");
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
            	  res.setHeader("Location", "http://arienemachado.com/testApp/prototipacao.html");
                  res.end();
                  console.log('saved solucao');
            }
        });
    });

//Creating problema
router.post("/ideacao", function(req, res) {

        Ideacao.create({
            ideiaIdeacao: 'req.body.ideiaIdeacao',
            tipoIdeacao: 'req.body.tipoIdeacao',
            clienteId: 'req.body.idCliente'
          
        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://arienemachado.com/testApp/solucao.html");
                  res.end();
                  console.log('saved ideacao');
            }
        });
    });

//Creating problema
router.post("/photo", function(req, res) {
        Photo.create({
            img: req.body.userPhoto,
            contentType: 'image/png'
          
        }, function(err) {
            if (err) {
                console.log(err);
            } else {

            	 res.statusCode = 302;
            	  res.setHeader("Location", "http://arienemachado.com/testApp/solucao.html");
                  res.end();
                  console.log('saved prototipacao');
            }
        });
    });


//2 - Ler todas - Pisicologo
router.get('/users', (req, res) => {
    var user = [ ];
    var x;
    Cliente.find({})
        .then((result) => {
            res.json(result);
            console.log('user :'+ result[0].nome);            
        })
        .catch((err) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
        });
});



//Creating PDF
router.get("/pdf", function(req, res) {

const doc = new PDFDocument()
  let filename = 'ideiaforacaixa'
  // Stripping special characters
  filename = encodeURIComponent(filename) + '.pdf'
  // Setting response to 'attachment' (download).
  // If you use 'inline' here it will automatically open the PDF
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf')


const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.';
const title = 'ESCREVER IDEIA FORA DA CAIXA';


 // Title
doc.fontSize(24);
doc.fillColor('purple')
   .text(title, {
     align: 'center'
 })

// Scale proprotionally to the specified width
doc.moveDown();
// Scale the image
doc.fontSize(18);
doc.image('img/Image-user.jpg', 160, 150, {width: 300, align: 'center'})
   .text('Nome do autor', 250, 415);
    doc.fillColor('black')

// Scale proprotionally to the specified width

doc.moveDown();
// Scale the image
doc.fontSize(18);
doc.image('img/logo-purple.jpeg', 200, 650, {width: 200})
doc.text('Editora',280, 615)
doc.fillColor('black')

  // Add page problema
doc.addPage()
doc.moveDown();
doc.fontSize(18)
    doc.fillColor('purple')
    doc.moveDown();
	doc.text('PROBLEMA', { 
  	align: 'center'
	}
);

doc.moveDown();
doc.fontSize(16);
doc.fillColor('black')
doc.text('Resposta', {
  align: 'left'
}
);
   

// Add page IDEAÇÃO
doc.addPage()
doc.moveDown();
doc.fontSize(18)
    doc.fillColor('purple')
    doc.moveDown();
	doc.text('IDEAÇÃO', { 
  	align: 'center'
	}
);

doc.moveDown();
doc.fontSize(16);
doc.fillColor('black')
doc.text('Resposta', {
  align: 'left'
}
);
   

// Add page SOLUÇÃO
doc.addPage()
doc.moveDown();
doc.fontSize(18)
    doc.fillColor('purple')
    doc.moveDown();
	doc.text('SOLUÇÃO', { 
  	align: 'center'
	}
);

doc.moveDown();
doc.fontSize(16);
doc.fillColor('black')
doc.text('Resposta', {
  align: 'left'
}
);

// Add page PROTOTIPAÇÃO
doc.addPage()
doc.moveDown();
doc.fontSize(18)
doc.fillColor('purple')
    doc.moveDown();
	doc.text('PROTOTIPAÇÃO', { 
  	align: 'center'
	}
);

doc.moveDown();
doc.fontSize(16);
doc.fillColor('black')
doc.text('Resposta', {
  align: 'left'
}
);
    
// Add page CONTRA CAPA

doc.addPage()
doc.moveDown();
doc.fontSize(18)
doc.fillColor('purple')
    doc.moveDown();
	doc.text('CONTRA CAPA', { 
  	align: 'center'
	}
);
    doc.pipe(res)
    doc.end()
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