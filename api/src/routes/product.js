const server = require('express').Router();
const { Product, categoriesxproducts, Category } = require('../db.js');
const { Op } = require("sequelize");


server.get('/', (req, res, next) => {
	Product.findAll().then(function(data){
			res.send(data)
	})
 });

 server.get('/cxp', (req, res, next) => {
	categoriesxproducts.findAll().then(function(data){
			res.send(data)
	})
 });

//Get por id a categoriesxproducts
 server.get('/cxp/:id', (req, res, next) => {
	categoriesxproducts.findByPk(req.params.id).then(post => {
		res.send(post);
	})
 });

 ///elimina cat del producto por id 
server.delete('/cxp/:idName/:nameCat', (req, res) => {

	console.log(req.params.idName)
	console.log(req.params.nameCat)

	 
	categoriesxproducts.destroy({
		where: {
			product_id: req.params.idName, 
			category: req.params.nameCat
		}
	})
		.then(result => {
			res.sendStatus(200);
		})
		.catch(() => res.status(404))
});

 //////////////////////////////////////////////////

 
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



server.post("/add", (req, res) => {
	const { category } = req.body;	
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


server.get("/searches/:search", function (req, res) {
	searchProduct(req.params)
		.then((result) => {
			res.send(result);
		});
});

function searchProduct(key) {
	return Product.findAll({
		where: {
			[Op.or]:
			[ { name: { [Op.iLike]: `%${key.search}%` } },
			{ description: { [Op.iLike]: `%${key.search}%` } },
			], 
		},
	});
}


module.exports = server;
