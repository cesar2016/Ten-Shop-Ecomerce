const server = require('express').Router();
const { User, Order , productsxorders , Product} = require('../db.js');


//MUESTRA TODOS LOS USUARIOS:
server.get('/', (req, res, next) => {
	User.findAll().then(function(data){
			res.send(data)
	})
 });

 //MUESTRA LOS ITEMS DEL CARRITO DEL USUARIO
 server.get('/:idUser/cart', (req, res, next) => {
    const {idUser} = req.params;
    User.findAll({
      where: {
        id: idUser
      }
    }).then(data => {
      let idOrder = data[0].dataValues.orderId;
      productsxorders.findAll({
        where: {order_id: idOrder}
      }).then(result => {
       console.log(result)
        res.send(result)
      })
	})
 });

//CREAR USUARIOS
 server.post('/', (req, res) => {
   const { body } = req;
   console.log("Este es el body",body, body.password)
  User.create({
    firstname: body.firstname,
    surname: body.surname,
    address: body.address,
    password: body.password,
    type: body.type
  }).then(user => {
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
          let estado = use[0].dataValues.order;
          if(estado){
            let idOrder = use[0].dataValues.order.dataValues.id;            
            Order.findByPk(idOrder).then(order =>  {
              User.findByPk(idUser).then(user => {
                user.setOrder(order);
                Product.findByPk(body.id).then(producto => {  
                  producto.addOrder(order);
                  res.status(200).send("Order created")
                })   
              })   
            })
      
            //.catch(res.status(404).send("Sold out"))
          }else{//El usuario no tiene orden, creo la orden primero y luego anado el producto.
                Order.create({
                status: "created",
                address: body.address,                    
            }).then(order => {
              User.findByPk(idUser).then(user => { 
                  //console.log("Entreee acaaaa",user,"esta es la orden creada",order)              
                  user.setOrder(order);
                    Product.findByPk(body.id).then(producto => {  
                        producto.addOrder(order);
                        res.status(200).send("Order created")
                    })                                    
              }).catch(err => {
                res.status(404).send("Error. Order no created!")                
              })
            }) 
          }
          
      })
    });

//EDITA USUARIO
server.put('/:id', (req, res) => {
  const {id} = req.params;
  const {body} = req;  //Usuario tiene:  firstname, surname, address, password, type.
  User.update(body, {where: {id} })
  .then(result => {
  res.status(200).send("the user has been updated");
  })
  .catch(err => {
    res.status(404).send("the user could not be updateders")
  })
  });

//ELIMINA USUARIO:
server.delete("/:id", (req, res) => {
  const { id } = req.params;
  User.destroy({ where: { id } })
  .then(result => {
  res.status(200).send("User has been deleted");
  })
  .catch(() => res.status(404).send("User has not be deleted"))
  });

//ELIMINA ORDENES DE UN USUARIO:
server.delete("/:idUser/cart", (req, res) => {
  const { idUser } = req.params;
  User.destroy({ where: { id } })
  .then(result => {
  res.status(200).send("User has been deleted");
  })
  .catch(() => res.status(404).send("User has not be deleted"))
  });



module.exports = server;