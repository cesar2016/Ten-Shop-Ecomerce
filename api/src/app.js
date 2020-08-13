const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const product = require('./routes/product');
const categories = require("./routes/categories")
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
        description: "Descripcion del producto 1",
        price: 10,
        stock: 15,
        image: "unaImagen1",
    })
    const producto2 = Product.create({
        name: "Producto 2",
        description: "Descripcion del producto 2",
        price: 10,
        stock: 15,
        image: "unaImagen2",
    });
    const producto3 = Product.create({
        name: "Producto 3",
        description: "Descripcion del producto 3",
        price: 15,
        stock: 20,
        image: "unaImagen3",
    });
    const producto4 = Product.create({
        name: "Producto 4",
        description: "Descripcion del producto 4",
        price: 10,
        stock: 15,
        image: "unaImagen4",
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

    res.send("LISTO")

});


// server.get("/product", (req, res) => {
//     Category.findAll()
//         .then(prod => {
//             res.json(prod)
//         })
// })


server.use('/categories', categories);
// server.use('/product', product);


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
