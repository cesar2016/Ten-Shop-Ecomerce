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
            var ordercreada = Order.create({
                status: body.status,
                address: body.address,                    
            }).then(order => { 
                //console.log("Entreee acaaaa",use[0].dataValues)
                User.findByPk(idUser).then(usuario => {  //usuario.setOrder(order)
                console.log("Entreee acaaaa",usuario)
                usuario.dataValues.setOrder(order)                                                
                }).then(result => {
                    console.log("RESiltuuuuuu",result)
                    //use.setOrder(ordercreada);                               
                    Product.findByPk(body.id).then(producto => {  
                        producto.addOrder(ordercreada);
                        res.status(200).send("Order created")
                    }).catch(res.status(404).send("Sold out"))
                })
                
            }).catch(err => {
                res.status(404).send("Error. Order no created!")
            }) 
          }
          
      })
    });


server.post("/adduser", (req, res) => {
  const { firstname, surname, password, username } = req.body;  
  User.findAll({
    where: {username}
  })
    .then(result => {      
      if (!result.length) {
        User.create({firstname, surname, password, type: "2", username})
        return res.send(true)
      } else {
        return res.send(false)
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
    res.status(200).send(result)
  })
  .catch(() => {
    res.status(404).send(console.log(req.body))}
    )
})

module.exports = server;