const server = require('express').Router();
const { User, Order , productsxorders , Product} = require('../db.js');

server.get('/status/:status', (req, res, next) => {
    const {status} = req.params;
	Order.findAll({where: {status}}).then(function(data){
			res.send(data)
	})
 });
 server.get('/id/:idOrder', (req, res, next) => {
	const {idOrder} = req.params;
	Order.findAll({where: {id: idOrder}}).then(function(data){
		res.send(data)
	})
	.catch(err => {res.status(404).send("ERROR")})
 });


module.exports = server;