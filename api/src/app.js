const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const product = require('./routes/product');
// const categories = require("./routes/categories")
const { Product, Category } = require("./db.js")

const ind = require('./routes/index')

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.post("/", async (req, res) => {
    const categoria1 = await Category.create({
        name: "Notebooks",
        description: ""
    });
    const categoria2 = await Category.create({
        name: "Televisores",
        description: ""
    });
    const categoria3 = await Category.create({
        name: "Heladeras",
        description: ""
    });
    const categoria4 = await Category.create({
        name: "Celulares",
        description: ""
    })
    const producto1 = Product.create({
        name: "HP Notebook 15 pulgadas",
        description: "intel 9",
        price: 37000,
        stock: 14,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn5Ry6GFw1QTYaGg_T_rN6C9YtXRpnKycNttRvQ38UUdFkwdJkFzs0QIJ5RDtGfnjJs2KoEAw&usqp=CAc",
    })
    const producto2 = Product.create({
        name: "Smart tv samngung",
        description: "45 pulgadas 4k",
        price: 31000,
        stock: 11,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEvsTTbXY-_n8wj1PVBeRtFBdZ5D7L7JGgi1vatfYIFwqSyAFJPWAO5alqmd_CDgCgS-TgyLk&usqp=CAc",
    });
    const producto3 = Product.create({
        name: "Heladera gama",
        description: "25litros",
        price: 55000,
        stock: 13,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCDR2OLwHGdPy1ONWLy20dkFAo3zbe5kggFkd4lgruDFT-PKk9LC5s4EwubcCrxJD4tI4cSoE&usqp=CAc",
    });
    const producto4 = Product.create({
        name: "Celular Huawei",
        description: "p20 mate",
        price: 19500,
        stock: 18,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRv4AnzcU0uTMcTG6FylWo1_zDB_-azy7smWNjmR9ot3kaqs7mzxZetg90zlRLWHIVrSS1USj8&usqp=CAc",
    });
    const producto5 = Product.create({
        name: "Notebook gaming asus",
        description: "i9 y muchas cosas",
        price: 85000,
        stock: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqIlNjz8x0xOjn8Uy2KrVItX0ffXBLL4XHgQCNvMnM2EL1UaVrbMowR6EMKHkN09MqsWae3QI&usqp=CAc",
    });
    

    producto1.then((prod) => {
        prod.addCategory(categoria1)
    })

    producto2.then((prod) => {
        prod.addCategory(categoria2)
    })

    producto3.then((prod) => {
        prod.addCategory(categoria3)
    })

    producto4.then((prod) => {
        prod.addCategory(categoria4)
    })

    producto5.then((prod) => {
        prod.addCategory(categoria1)
    })

    res.send("LISTO")

});


// server.get("/product", (req, res) => {
//     Category.findAll()
//         .then(prod => {
//             res.json(prod)
//         })
// })

//Matchea con las rutas que definimos 
// server.use('/categories', categories);
// server.use('/product', product);
server.use('/',ind)


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
