const server = require('express').Router();
const { Product } = require('../db.js');



server.get('/', (req, res, next) => {
	Product.findAll().then(function(data){
			res.send(data)
	})
 });

 server.get('/:id', (req, res) => {
	 Product.findByPk(req.params.id).then(post => {
		 res.send(post);
	 })
 });

 server.put('/:id', (req, res) => {
	const {id} = req.params;
	const {body} = req;
	Product.update(body, {where: {id} })
	 .then(result => {
		res.send(result);
	 });
 });
   


module.exports = server;
