const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const categories = require("./categories");


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/categories',categories);

module.exports = router;
