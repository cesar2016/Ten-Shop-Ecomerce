const server = require('express').Router();
const { categoriesxproducts, Product, Category } = require('../db.js');

server.get("/:categoria", (req, res) => {
    const { categoria } = req.params
    Category.findByPk(categoria).then(category => {
        category.getProducts({ attributes: [ "name", "description", "price", "stock", "image" ] })
        .then(products => {
            res.send(products)
        })
    })
});





module.exports = server;
