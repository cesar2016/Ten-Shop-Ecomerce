const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const product = require('./routes/product');
const categories = require("./routes/categories")
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
        description: "Intel 9",
        price: 45000,
        stock: 9,
        image: "https://www.musimundo.com/informatica/notebook/notebook-hp-14-ck0047la-intel-core-i3/p/00280177",
    })
    const producto2 = Product.create({
        name: "Televisor Samsung",
        description: "Smart tv 45",
        price: 10000,
        stock: 7,
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pardo.com.ar%2Ftv-y-video%2Ftelevisores&psig=AOvVaw19LsqIfMAHwZ77-OL69tOj&ust=1597431933118000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiX0uvvmOsCFQAAAAAdAAAAABAF",
    });
    const producto3 = Product.create({
        name: "Celular Huawei",
        description: "p20 mate",
        price: 21000,
        stock: 25,
        image: "data:image/jpeg;base64,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",
    });
    const producto4 = Product.create({
        name: "Heladera Gama",
        description: "4 tiempos",
        price: 65000,
        stock: 5,
        image: "https://www.musimundo.com/electrohogar/heladeras/heladera-cycle-defrost-patrick-hpk141moob-blanco/p/00133004",
    });
    const producto5 = Product.create({
        name: "Celular Xiaomi",
        description: "redmi note",
        price: 12000,
        stock: 43,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTALbNv80PTObO79eSC8OpHi1EaUmZo6BLlkdXkIs66U7iiUv6zdwr_ahjPWapwCf3vO-ywJyM&usqp=CAc",
    });
    const producto6 = Product.create({
        name: "Producto NOte1",
        description: "Descripcion del producto 4",
        price: 10,
        stock: 15,
        image: "unaImagen4",
    });
    const producto7 = Product.create({
        name: "Producto NOTE 2",
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
    producto5.then((prod) => {
        prod.addCategory(categoria1)
    })
    producto6.then((prod) => {
        prod.addCategory(categoria1)
    })

    producto7.then((prod) => {
        prod.addCategory(categoria3)
    })

    res.send("LISTO")

});


// server.get("/product", (req, res) => {
//     Category.findAll()
//         .then(prod => {
//             res.json(prod)
//         })
// })


/* server.use('/categories', categories);
server.use('/product', product); */
server.use('/',ind)


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
