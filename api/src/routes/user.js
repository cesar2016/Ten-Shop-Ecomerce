const server = require('express').Router();
const { User, Order , productsxorders , Product} = require('../db.js');


//MUESTRA TODOS LOS USUARIOS:
server.get('/', (req, res, next) => {
	User.findAll().then(function(data){
			res.send(data)
	})
 });

 //MUESTRA TODOS LAS ORDENES DEL USUARIO
/* server.get('/:idUser/orders', (req, res, next) => {
  const {idUser} = req.params;
  User.findAll({ where: { id: idUser } })
  .then(result => {
    let idOrder = result[0].dataValues.orderId;
    Order.(body, { where: { id: idOrder } })
    .then(result => {
    res.status(200).send("Order has been deleted");
    })
  })
  .catch(() => res.status(404).send("Order has not be deleted"))
  }); */


 //MUESTRA LOS ITEMS DEL CARRITO DEL USUARIO
 server.get('/:idUser/cart', (req, res, next) => {
    const {idUser} = req.params;
    Order.findAll({where: {userId: idUser}})
      .then(data => {
      //console.log("asdasdsadd",data)
      let idOrder = data[0].dataValues.id;
      productsxorders.findAll({
        where: {order_id: idOrder}
      }).then(result => {
       //console.log("resultttttttttttt",result)
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
    const {body} = req;//el id del producto.
    Order.findAll({where: {userId: idUser}}).then(ord => {
          console.log(ord);
          if(ord.length){
                let idOrder = ord[0].dataValues.id;
                let status = ord[0].dataValues.status; 
                //console.log("aaaaaaaaaaaaaaaaaaaaa",use[0].dataValues.order.dataValues.status);   
                if(status === "created" || status === "processing"){ 
                  //console.log("ENTRADA 111111")      
                      Product.findByPk(body.id).then(producto => {  
                        producto.addOrder(ord);
                        res.status(200).send("Order created")      
                  })
                }else{
                  //console.log("Entre acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                    Order.create({
                      status: "processing",
                      address: body.address,                    
                    }).then(order => {
                      User.findByPk(idUser).then(user => { 
                          //console.log("Entreee acaaaa",user,"esta es la orden creada",order)              
                          order.setUser(user);
                          Product.findByPk(body.id).then(producto => {  
                              producto.addOrder(order);
                              res.status(200).send("Order created")
                          })                                    
                    }).catch(err => {
                      res.status(404).send("Error. Order no created!")                
                    })
                  })
                }
          }else{//El usuario no tiene orden, creo la orden primero y luego anado el producto.
                Order.create({
                status: "processing",
                address: body.address,                    
            }).then(order => {              
              User.findByPk(idUser).then(user => { 
                  //console.log("Entreee acaaaa",user,"esta es la orden creada",order)              
                  order.setUser(user);
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

//ELIMINA ORDENES DE UN USUARIO(vaciar el carrito)(Cancelar ordenes):
server.delete("/:idUser/cart/cancelled", (req, res) => {
  const { idUser } = req.params;
  body = {status: "cancelled"};
  Order.update(body, { where: { userId: idUser } }).then(data => {
    res.status(200).send("Order has been deleted");
  })
  .catch((err) => {
    res.status(404).send("Order has not be deleted")
  })
});

  
//COMPLETA ORDENES DE UN USUARIO(vaciar el carrito)(Cancelar ordenes):
server.delete("/:idUser/cart/complete/", (req, res) => {
  const { idUser } = req.params;
  User.findAll({ where: { id: idUser } })
  .then(result => {
    let idOrder = result[0].dataValues.orderId;
    if(idOrder){
      body = {status: "complete"};
      Order.update(body, { where: { id: idOrder } })
      .then(result => {
      res.status(200).send("Order has been complete");
      })
    }else{
      res.status(404).send("ERROR. You do not have an order created")
    }
  })
  .catch(() => res.status(404).send("ERROR. Order has not be complete"))
  });


//RUTAS PARA EDITAR CANTIDADES
server.put("/:idUser/cart", (req, res) => {
  const { idUser } = req.params;
  const { body } = req;                             //Recibe aount y total_price por body.
  User.findAll({ where: { id: idUser } })
  .then(result => {
    let idOrder = result[0].dataValues.orderId;
      Order.update(body, { where: { id: idOrder } })
      .then(result => {
      res.status(200).send("the order has been updated");
      })    
  })
  .catch(() => res.status(404).send("ERROR. Order has not be complete"))
  });
module.exports = server;