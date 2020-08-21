const server = require('express').Router();
const { User, Order , ProductxOrder , Product} = require('../db.js');


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

//CREAR USUARIOS
 server.post('/', (req, res) => {
   const { body } = req;
   console.log("Este es el body",body, body.password)
  User.create({
    firstname: body.firstname,
    surname: body.surname,
    password: body.password,
    type: body.type
  }).then(user => {
      Order.create({
        status: "created",
        address: body.address,
      }).then(order => {
        user.setOrder(order)
      })
       res.status(200).send("user created")
  })
  .catch(err => {
    res.status(404).send("Error. The user was not created")
  })
});


//AGREGA ITEMS AL CARRITO
server.post('/:idUser/cart', (req, res) => {
   // console.log("este es el consolelogg",req);
	const {idUser} = req.params;//Id del usuario
    const {body} = req;//Estado de la orden y direccion y el id del producto.
    User.findAll({
        where: {
          id: idUser
        },
        include: [{
          model: Order
        }]
      }).then(use => {
          //let estado = use[0].order.status;
          //console.log("estadp/////",estado);
          if(use[0].dataValues.order){
            var ordenexiste = Order.findByPk(use[0].order.id);
            Product.findByPk(body.id).then(producto => {
                producto.addOrder(ordenexiste);
                res.status(200).send("Order created")
            }).catch(res.status(404).send("Sold out"))
          }else{//El usuario no tiene orden, creo la orden primero y luego anado el producto.
                Order.create({
                status: "created",
                address: body.address,                    
            }).then(order => {
              User.findByPk(idUser).then(user => { 
                  console.log("Entreee acaaaa",user,"esta es la orden creada",order)              
                  user.setOrder(order);
                    Product.findByPk(body.id).then(producto => {  
                        producto.addOrder(order);
                        console.log("aslknaskdskad")

                      res.status(200).send("Order created")
                    })                                    
              }).catch(err => {

                res.status(404).send("Error. Order no created!")
                
              })
            }) 
          }
          
      })
    });



module.exports = server;