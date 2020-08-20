const server = require('express').Router();
const { User, Order , ProductxOrder } = require('../db.js');


server.get('/', (req, res, next) => {
	User.findAll().then(function(data){
			res.send(data)
	})
 });

 server.get('/:idUser/cart', (req, res, next) => {
    const {idUser} = req.params;
	ProductxOrder.findAll(
      //  include: [{model: User, as: "User" },{model:ProductxOrder}],

      ).then(function(data){
			res.send(data)
	})
 });



server.post('/:idUser/cart', (req, res) => {
   // console.log("este es el consolelogg",req);
	const {idUser} = req.params;
    const {body} = req;
    Order.create({
        status: body.status,
        address: body.address,
        UserId: idUser,        
    }).then(order => {     
        res.status(200).send("Order created")
    }).catch(err => {
        res.status(404).send("Error. Order no created!")
    }) 
 });

module.exports = server;