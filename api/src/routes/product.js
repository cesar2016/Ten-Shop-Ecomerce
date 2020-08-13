const server = require('express').Router();
const { Product } = require('../db.js');




// server.get('/', (req, res, next) => {
// 	Product.findAll()
// 		.then(products => {
// 			res.send(products);			 
// 		})
// 		.catch(next);
// });

server.get('/', (req, res, next) => {
	Product.findAll().then(function(data){		  
		  res.send(data)
	  })    


 });

server.get("/:idProduct", (req, res) => {	 
	// res.send(req.params.idProduct);
	Product.findByPk(req.params.idProduct).then(function(data){		
		res.send(data.dataValues);
	})  
});

module.exports = server;
