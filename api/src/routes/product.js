const server = require('express').Router();
const { Product } = require('../db.js');



server.get('/', (req, res, next) => {
	Product.findAll().then(function(data){
			res.send(data)
	})
 });

 server.get('/:id', (req, res) => {
	 Product.findByPk(req.params.id).then(post => {
		 res.send(post);
	 })
 });

 server.put('/:id', (req, res) => {
	const {id} = req.params;
	const {body} = req;
	Product.update(body, {where: {id} })
	 .then(result => {
		res.send(result);
	 });
 });
   


// este post devuelve un array con dos componentes,
// el objeto con el producto recien publicado en la DB
// y devuelve un booleano con true (si se agrego en la DB)
// o devuelve un booleano con false (si no se agregó en la tabla)
server.post("/add", (req, res) => {
	const { name, description, price, stock, image } = req.body
	console.log(name, description, price, stock, image)
	Product.findOrCreate({ where: { name, description, price, stock, image } })
		.then(product => {
			res.send(product)
		})
});


// elimina el producto por id
// si no lo encuentra, devuelve un false
server.delete("/:id", (req, res) => {
	const { id } = req.params;
	Product.destroy({ where: { id } })
		.then(result => {
			if (result) return res.status(200)
			res.send(false)
		})
		.catch(() => res.status(404))
});


server.put("/:id", (req, res) => {
	const { id } = req.params;
	const { body } = req;
	Product.update(body, { where: { id } })
		.then(result => {
			res.send(result)
		});
});




module.exports = server;
