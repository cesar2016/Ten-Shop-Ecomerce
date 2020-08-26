const server = require('express').Router();
const { User, Order , Productsxorders , Product} = require('../db.js');

server.get('/status/:status', (req, res, next) => {
	const {status} = req.params;
	console.log(status);
	if(status === "allorders"){
		console.log("PRIMER IFFFFFF")
		Order.findAll({ include: User }).then(function(data){
		res.send(data)
		})
	}else{
		Order.findAll({where: {status: status}, include: User }).then(function(result){
			console.log("ENTRO ACA", status)
		res.send(result)
	});
	}
 });

 server.get('/id/:idOrder', (req, res, next) => {
	const {idOrder} = req.params;
	Order.findAll({where: {id: idOrder}}).then(function(data){
		res.send(data)
	})
	.catch(err => {res.status(404).send("ERROR")})
 });


module.exports = server;