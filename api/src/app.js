const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const categories = require("./routes/categories.js")
const { Product, Category } = require("./db.js")

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

server.post("/", (req, res) => {
    Category.create({
        name: "Notebooks",
        description: ""
    });
    Category.create({
        name: "Televisores",
        description: ""
    });
    Category.create({
        name: "Heladeras",
        description: ""
    });
    Category.create({
        name: "Celulares",
        description: ""
    });
    Product.create({
        name: "HP Notebook 15 pulgadas",
        description: "Descripcion del producto 1",
        price: 10,
        stock: 15,
        image: "unaImagen1"
    });
    Product.create({
        name: "Producto 2",
        description: "Descripcion del producto 2",
        price: 10,
        stock: 15,
        image: "unaImagen2"
    });
    Product.create({
        name: "Producto 3",
        description: "Descripcion del producto 3",
        price: 15,
        stock: 20,
        image: "unaImagen3"
    });
    Product.create({
        name: "Producto 4",
        description: "Descripcion del producto 4",
        price: 10,
        stock: 15,
        image: "unaImagen4"
    });


    res.send("LISTO")

});


server.get("/product", (req, res) => {
    Category.findAll()
        .then(prod => {
            res.json(prod)
        })
})

server.use('/', routes);



// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
