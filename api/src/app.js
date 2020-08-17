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
        name: "Notebooks HP i7",
        description: "Intel 9",
        price: 90000,
        stock: 9,
        image: "https://http2.mlstatic.com/D_NQ_NP_945569-MLA31652747525_082019-O.webp",
    })
    const producto2 = Product.create({
        name: "Televisor Samsung",
        description: "Smart tv 45",
        price: 10000,
        stock: 7,
        image: "https://images.samsung.com/is/image/samsung/es-uhd-ku6000-ue55ku6000kxxc-008-side-black?$L2-Thumbnail$",
    });
    const producto3 = Product.create({
        name: "Celular Huawei",
        description: "p20 mate",
        price: 21000,
        stock: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTALbNv80PTObO79eSC8OpHi1EaUmZo6BLlkdXkIs66U7iiUv6zdwr_ahjPWapwCf3vO-ywJyM&usqp=CAc"
    });
    const producto4 = Product.create({
        name: "Heladera Gama",
        description: "4 tiempos",
        price: 65000,
        stock: 5,
        image: "https://whirlpoolarg.vteximg.com.br/arquivos/ids/160013-1000-1000/WRM54AK-01.jpg?v=636843652899770000",
    });
    const producto5 = Product.create({
        name: "Celular Xiaomi",
        description: "redmi note",
        price: 12000,
        stock: 43,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTALbNv80PTObO79eSC8OpHi1EaUmZo6BLlkdXkIs66U7iiUv6zdwr_ahjPWapwCf3vO-ywJyM&usqp=CAc",
    });
    const producto6 = Product.create({
        name: "Notebook HP i5",
        description: "Descripcion del producto 4",
        price: 50000,
        stock: 15,
        image: "https://http2.mlstatic.com/D_NQ_NP_945569-MLA31652747525_082019-O.webp",
    });
    const producto7 = Product.create({
        name: "Notebook HP i3",
        description: "Descripcion del producto 5",
        price: 30000,
        stock: 15,
        image: "https://http2.mlstatic.com/D_NQ_NP_945569-MLA31652747525_082019-O.webp",
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
