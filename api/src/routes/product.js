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

 server.post('/edit/:id', (req, res) => {
	const {id} = req.params;
	const {body} = req;
	Product.update(body, {where: {id} })
	 .then(result => {
		res.send(result);
	 });
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
// server.post("/add", (req, res) => {
// 	const { name, description, price, stock, image } = req.body
// 	console.log(name, description, price, stock, image)
// 	Product.findOrCreate({ where: { name, description, price, stock, image } })
// 		.then(product => {
// 			res.send(product)
// 		})
// });

server.post("/add", (req, res) => {
	const { category } = req.body;
	console.log(category)
	addProduct(req.body)
		.then(productCreated => {
			if (category.length === 0) {
				return res.json(result)
			};

			if (category.length === 1) {
				return productCreated.addCategory(category)
			};
			if (category.length > 1) {
				category.forEach((categories) => {
					productCreated.addCategory(categories);
				});
				return res.json(productCreated)
			};
		})
});




function addProduct(product) {
	return Product.create({
		name: product.name,
		description: product.description,
		price: product.price,
		stock: product.price,
		image: product.image
	})
};


// elimina el producto por id
// si no lo encuentra, devuelve un false
server.delete("/:id", (req, res) => {
	const { id } = req.params;
	Product.destroy({ where: { id } })
		.then(result => {
			res.sendStatus(200);
		})
		.catch(() => res.status(404))
});


server.post("/delete/:id", (req, res) => {
	const { id } = req.params;
	Product.destroy({ where: { id } })
		.then(result => {
			res.sendStatus(200);
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
