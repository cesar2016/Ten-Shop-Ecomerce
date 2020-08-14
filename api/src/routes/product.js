const server = require('express').Router();
const { Product } = require('../db.js');



server.get('/', (req, res, next) => {
	Product.findAll().then(function(data){
			res.send(data)
	})
 });

 server.get('/:id', (req, res, next) => {
	Product.findAll({		
		where: {
		  id: req.params.id
		}
	  }).then(function(data){
		  res.send(data)
	  })   
	});
   


module.exports = server;
