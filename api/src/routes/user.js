const server = require('express').Router();
const { User, Order , Productsxorders , Product} = require('../db.js');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
const crypto = require('crypto'); //npm i --save sequelize crypto
const nodemailer = require("nodemailer");




User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
};
User.encryptPassword = function(plainText, salt) {
  return crypto
      .createHash('RSA-SHA256')
      .update(plainText)
      .update(salt)
      .digest('hex')
};

const setSaltAndPassword = user => {
  if (user.changed('password')) {
      user.salt = User.generateSalt()
      user.password = User.encryptPassword(user.password(), user.salt())
  }
};
User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

User.prototype.correctPassword = function(enteredPassword) {
  return User.encryptPassword(enteredPassword, this.salt()) === this.password()
};








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
    Order.findAll({where: {userId: idUser, status: "created"}})
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
        // PREGUNTAR A GUILLE SI ESTO NO DEBERIA DE VOLVER UN ARRAY VACIO
        // ya que si voy al carrito a la primera despues de haber comprado un carrito
        // da error en la pagina porque no retorno un array sino que un string "The user has no products in the cart"
        // res.status(404).send("The user has no products in the cart")
        res.status(200).send([])
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


//AGREGA ITEMS AL CARRITO CUANDO EL USERS ESTA LOGEADO.
server.post('/:idUser/cart', (req, res) => {
   // console.log("este es el consolelogg",req);
	const {idUser} = req.params;//Id del usuario
    const {body} = req;//el id del producto.
    Order.findAll({where: { userId: idUser, status: "created" }}).then(ord => {
          console.log("EStaaaaaa la ordennnn",ord);
          if(ord.length){
            Product.findByPk(body.id).then(producto => {
              producto.addOrder(ord);
              return res.status(200).send("Order created")
            })
          }else{//El usuario no tiene orden, creo la orden primero y luego anado el producto.
                Order.create({
                status: "created",
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

    //CUANDO EL USER SE LOGEA AGREGA ITEMS AL CARRITO
server.post('/:idUser/invited/cart', (req, res) => {
  // console.log("este es el consolelogg",req);
 const {idUser} = req.params;//Id del usuario
   const {body} = req;//un arrays con productos [1, 5 , 13]
   Order.findAll({where: { userId: idUser, status: "created" }}).then(ord => {
         console.log("EStaaaaaa la ordennnnASDASDASDASDASDASDADASDAq-------------------",body, ord);
         if(ord.length){
          for (let i = 0; i < body.length; i++) {
            Product.findByPk(body[i]).then(producto => {
              producto.addOrder(ord);
              return res.status(200).send("Order created")
            })

          }
         }else{//El usuario no tiene orden, creo la orden primero y luego anado el producto.
               Order.create({
               status: "created",
               address: body.address,
           }).then(order => {
             User.findByPk(idUser).then(user => {
                 //console.log("Entreee acaaaa",user,"esta es la orden creada",order)
                 order.setUser(user);
                 for (let i = 0; i < body.length; i++) {
                  Product.findByPk(body[i]).then(producto => {
                      producto.addOrder(order);
                      res.status(200).send("Order created")
                  })
                }

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
  console.log("EEEELLLLL BODDDDYYYYY", body)
  User.update(body, {where: {id} })
  .then(() => {
    User.findOne({ where: {id} })
      .then(result => {
        res.status(200).send(result)
      })
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

//CANCELA, PROCESA Y COMPLETA ORDENES:
server.post("/:idUser/update/cart", (req, res) => {
  //console.log("ENTROOACAAAAA", req.body , req.params);
  const { idUser } = req.params;
  const {body} = req;  //recibe por body: satatus: processing  y direccion, cancelled , complete;
  if(req.body.status == "cancelled"){
      Order.update(body, { where: { userId: idUser, status: "created" } }).then(data => {
    // console.log(data[0]);
      if(data[0]){
      res.status(200).send("Order has been deleted/complete");
      }else{
        res.status(404).send("You do not have an order created");
      }
    });
  }
  if(req.body.status == "processing"){
    Order.update(body, { where: { userId: idUser, status: "created" } }).then(data => {
  // console.log(data[0]);
    if(data[0]){
    res.status(200).send("Order has been deleted/complete");
    }else{
      res.status(404).send("You do not have an order created");
    }
    });
  }
  if(req.body.status == "complete"){
    Order.update(body, { where: { userId: idUser, status: "processing" } }).then(data => {
  // console.log(data[0]);
    if(data[0]){
    res.status(200).send("Order has been deleted/complete");
    }else{
      res.status(404).send("You do not have an order created");
    }
    });
  }

});




//RUTAS PARA EDITAR CANTIDADES TABLA PRODUCTSXORDERS
server.post("/:idUser/c/cart", (req, res) => {
  const { idUser } = req.params;
  const { body } = req;                             //Recibe amount y total_price por body. y el ID del producto
  //console.log("APIIIIIIIIIIIIII------------------------------------------------,",body)
  Order.findAll({where: {userId: idUser, status: "created"}}).then(orden => {
    let idOrder = orden[0].id;
    for (let i = 0; i < body.length; i++) {
      if(body[i].cantidad){
        const obj = {
          amount: body[i].cantidad,
          total_price: body[i].subtotal
        }

        Productsxorders.update(obj, { where: {product_id: body[i].id, order_id: idOrder}})
        .then(result => {
        res.status(200).send("the order has been updated");
        })

      }
    }
  })
  .catch(() => res.status(404).send("ERROR. Order has not be complete"));
});

//RUTAS PARA AGREGAR PRECIOS TABLA ORDERS
server.post("/:idUser/c/order", (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  console.log("APIIIIIIIIIIIIII------------------------------------------------,",body)
  Order.update(body, { where: {userId: idUser, status: "created"}})
  .then(result => {
  res.status(200).send("the order has been updated");
  })
  .catch(() => res.status(404).send("ERROR. Order has not be complete"));
});

server.post("/adduser", (req, res) => {

  const { firstname, surname, password, username, email, googleId } = req.body;

  

  User.findAll({
    where: {username}
  })
    .then(result => {
      if (!result.length) {

        let transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: 'zander.crona48@ethereal.email', // generated ethereal user
              pass: 'nZy5srMEQazj596J2p'  // generated ethereal password
      
          }    
      
        });
      
        // Body Email Visited Website
        let mailOptions = {
            from: 'tenshop@mailinator.com', // sender address
            //to: 'tenshop@mailinator.com', // list of receivers
            to: 'cesars.pro@gmail.com', // list of receivers
            subject: 'WELCOMO TO TEN/SHOP', // Subject line
            text:' HIGH USER', // plain text body
            //html: "<p><h3>WELCOME!!! </h3>"+  username  +"</p>" // html body
            html:"<div class={'card text-center'}><div class={'card-header'}WELCOME"+ firstname +" "+ surname +" </div><div class={'card-body'}><h5 class={'card-title'}>VALIDATE YOUR DATA PLEASE</h5><p class={'card-text'}><strong>USUARIO: </strong>"+ username +" <strong>PASSWORD: </strong>********</p><a href={'#'} class={'btn btn-primary'}>VALIDATE</a></div><div class={'card-footer text-muted'}>www.tenshop.com</div></div>"
        };
      
      // send mail visited
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).send(error.message);
      
        } else {
      
          console.log("ENVIA_MESAGGE_VISITED!")
          res.status(200).send("MESSAGE enviado!!!")
        }
      });


        User.create({firstname, surname, password, type: "2", username, email, googleId})        
        .then(user => res.send([true, user.dataValues, password]))
      } else {
        return res.send([false, result, password])
      }
    })
    .catch((err) => {
      return res.send(err)
    })
});


//CANCELA ORDENES DESDE EL PANEL DE ADMIN:
server.post("/:idUser/canc/:idOrder", (req, res) => {
  //console.log("ENTROOACAAAAA", req.body , req.params);
  const { idUser } = req.params;
  const { idOrder } = req.params;
  let body = {
    status: 'cancelled'
  }

      Order.update(body, { where: { userId: idUser, id: idOrder } }).then(data => {
    // console.log(data[0]);
      if(data[0]){
      res.status(200).send("Order has been deleted/complete");
      }else{
        res.status(404).send("You do not have an order created");
      }
    });


});

//COMPLETA ORDENES DESDE EL PANEL DE ADMIN:
server.post("/:idUser/aceptar/:idOrder", (req, res) => {
  console.log("ENTROOACAAAAA-----------------", req.body , req.params);
  const { idUser } = req.params;
  const { idOrder } = req.params;
  let body = {
    status: 'complete'
  }
      Order.update(body, { where: { userId: idUser, id: idOrder } }).then(data => {
    // console.log(data[0]);
      if(data[0]){
      res.status(200).send("Order has been deleted/complete");
      }
    })
    .catch(err => {console.log(err)})
});

server.put("/aaa/updatePassword", (req, res) => {
  const { id, password } = req.body;
  User.findOne({where: {id}})
    .then(user => {
      var salto = user.dataValues.salt;
      var passwordEncripted = User.encryptPassword(password, salto);
      User.update({password: passwordEncripted}, {where: {id}})
        .then(() => res.send("Ok!"))
    })
});

server.get("/cart/sumary/:idUser", (req, res) => {
  const { idUser } = req.params;
  var contadorSubtotal = 0;
  Order.findOne({where: {userId: idUser, status: "created"}})
    .then(order => {
      if(order) {
        order.getProducts()
          .then(result => {
            result.forEach((item) => {
              contadorSubtotal += item.price
            });
          })
          .then(() => {
            res.send({contadorSubtotal, contadorEcoTax: contadorSubtotal * 0.21, total: contadorSubtotal + contadorSubtotal * 0.21 + 400})
          })
      }
    })
});

//SEND MAIL TO VISITED
server.post('/send_email', (req, res) => {
  const { body } = req;
  // console.log("Este es el body", body.email)
  // console.log("Este es el body", body.firstname)
  // console.log("Este es el body", body.title)
  // console.log("Este es el body", body.message)

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'zander.crona48@ethereal.email', // generated ethereal user
        pass: 'nZy5srMEQazj596J2p'  // generated ethereal password

    }    

  });

  // Body Email Visited Website
  let mailOptions = {
      from: body.email, // sender address
      to: 'tenshop@mailinator.com', // list of receivers
      subject: body.firstname, // Subject line
      text: body.title, // plain text body
      html: "<p>"+  body.message  +"</p>" // html body
  };

// send mail visited
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    res.status(500).send(error.message);

  } else {

    console.log("ENVIA_MESAGGE_VISITED!")
    res.status(200).send("MESSAGE enviado!!!")
  }
});
 
});


module.exports = server;
