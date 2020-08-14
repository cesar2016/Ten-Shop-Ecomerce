const server = require('express').Router();
const { Product } = require('../db.js');



server.get('/', (req, res, next) => {
	Product.findAll().then(function(data){
			res.send(data)
	})
 });
   


module.exports = server;
