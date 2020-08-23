const server = require('express').Router();
const { User, Order , productsxorders , Product} = require('../db.js');

server.get('/:status', (req, res, next) => {
    const {status} = req.params;
	Order.findAll({where: {status}}).then(function(data){
			res.send(data)
	})
 });

module.exports = server;