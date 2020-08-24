const server = require('express').Router();
const { User, Order , Productsxorders , Product} = require('../db.js');


//MUESTRA TODOS LOS USUARIOS:
server.get('/', (req, res, next) => {
	User.findAll().then(function(data){
			res.send(data)
	})
 });

 //MUESTRA TODOS LAS ORDENES DEL USUARIO
server.get('/:idUser/orders', (req, res, next) => {
  const {idUser} = req.params;
  Order.findAll({ where: { userId: idUser } })
  .then(result => {
    res.status(200).send(result);
    })
  .catch(() => res.status(404).send("ERROR"))
  });


 //MUESTRA LOS ITEMS DEL CARRITO DEL USUARIO
 server.get('/:idUser/cart', (req, res, next) => {
    const {idUser} = req.params;
    Order.findAll({where: {userId: idUser, status: "processing"}})
      .then(data => {
      //console.log("asdasdsadd",data)
      if(data[0]){
        let idOrder = data[0].dataValues.id;
      Productsxorders.findAll({
          where: {order_id: idOrder}
        }).then(result => {
        //console.log("resultttttttttttt",result)
          res.send(result)
        })
      }else{
        res.status(404).send("The user has no products in the cart")
      }
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

//ELIMINA ORDENES DE UN USUARIO(vaciar el carrito)(Cancelar ordenes o Completar ordenes):
server.delete("/:idUser/cart", (req, res) => {
  const { idUser } = req.params;
  const {body} = req;  //recibe por body: satatus: complete o cancelled;
  Order.update(body, { where: { userId: idUser, status: "processing" } }).then(data => {
   // console.log(data[0]);
    if(data[0]){
    res.status(200).send("Order has been deleted/complete");
    }else{
      res.status(404).send("You do not have an order created");
    }
  });
});


//RUTAS PARA EDITAR CANTIDADES
server.put("/:idUser/cart", (req, res) => {
  const { idUser } = req.params;
  const { body } = req;                             //Recibe amount y total_price por body. y el ID del producto
  Order.findAll({where: {userId: idUser, status: "processing"}}).then(orden => {
    
    console.log(orden);
    let idOrder = orden[0].id;
    const {amount} = req.body
    console.log("Amount", {amount});
    Productsxorders.update({amount}, { where: {product_id: body.idProduct, order_id: idOrder}})
    .then(result => {
    console.log("resultttt",result);
    res.status(200).send("the order has been updated");
    })     
  })
  .catch(() => res.status(404).send("ERROR. Order has not be complete"))
  });
server.post("/adduser", (req, res) => {
  const { firstname, surname, password, username } = req.body;  
  User.findAll({
    where: {username}
  })
    .then(result => {      
      if (!result.length) {
        User.create({firstname, surname, password, type: "2", username})        
        .then(user => res.send([true, user.dataValues]))        
      } else {
        return res.send([false])
      }
    })
    .catch((err) => {      
      return res.send(err)
    })    
});

server.post("/login",(req,res) => {
  User.findOne({where: {
    username: req.body.username
  }})
  .then(result => {
    console.log("EL LOGIN", result)
    res.status(200).send(result)
  })
  .catch(() => {
    res.status(404).send(console.log(req.body))}
    )
})

module.exports = server;