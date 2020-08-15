const server = require('express').Router();
const { categoriesxproducts, Product, Category } = require('../db.js');

server.get("/:categoria", (req, res) => {
    Category.findByPk(req.params.categoria).then(category => {
        category.getProducts({ attributes: [ "name", "description", "price", "stock", "image" ] })
        .then(products => {
            res.send(products)
        })
    })
});

server.get("/",  (req, res, next) => {
    Category.findAll().then(function(categorias){
        res.send(categorias);
    });
  });

  server.put('/:id', (req, res) => {
    const {id} = req.params;
	const {body} = req;
	Category.update(body, {where: {id} })
	 .then(result => {
		res.send(result);
        })
})




// este post devuelve un array con dos componentes,
// el objeto con la categoria recien publicada en la DB
// y devuelve un booleano con true (si se agrego en la DB)
// o devuelve un booleano con false (si no se agregó en la tabla)
server.post("/:categoria", (req, res) => {
  const { categoria } = req.params
  Category.findOrCreate({ where: { name: categoria, description: "" }})
    .then(result =>{
      res.send(result)
    })
});




module.exports = server;
