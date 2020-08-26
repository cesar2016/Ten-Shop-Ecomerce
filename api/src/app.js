

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const product = require('./routes/product');
const categories = require("./routes/categories")
const { Product, Category, Order, User , ProductxOrder} = require("./db.js")
const ind = require('./routes/index')


require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


server.post("/", async (req, res) => {
    const categoria1 = await Category.create({
        name: "Laptops",
        description: "Laptop for work, university or watching Netflix!"
    });
    const categoria2 = await Category.create({
        name: "TV",
        description: "To watch netflix, soccer or your favorite sport."
    });
    const categoria3 = await Category.create({
        name: "Refrigerators",
        description: "The best refrigerators to keep your food in good condition."
    });
    const categoria4 = await Category.create({
        name: "Cellphones",
        description: "The best cell phones on the market, at the best price"
    })
    const categoria5 = await Category.create({
        name: "Audio",
        description: "In this category you will find the best audio products to enjoy your music, movie and more"
    })
    const producto1 = Product.create({
        name: "Laptop HP i7",
        description: "Intel i7 3.0 Ghz, 500gb SSD, 20gb RAM. The best in the market.",
        price: 90000,
        stock: 9,
        image: "https://http2.mlstatic.com/D_NQ_NP_945569-MLA31652747525_082019-O.webp",
    })
    const producto2 = Product.create({
        name: "TV Samsung 4K HDR",
        description: "Smart tv 45 inches, guaranteed quality.",
        price: 10000,
        stock: 0,
        image: "https://images.samsung.com/is/image/samsung/es-uhd-ku6000-ue55ku6000kxxc-008-side-black?$L2-Thumbnail$",
    });
    const producto3 = Product.create({
        name: "CellPhone Huawei",
        description: "P20 mate, 8gb RAM, 120gb",
        price: 21000,
        stock: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTALbNv80PTObO79eSC8OpHi1EaUmZo6BLlkdXkIs66U7iiUv6zdwr_ahjPWapwCf3vO-ywJyM&usqp=CAc"
    });
    const producto4 = Product.create({
        name: "Refrigerator Gama",
        description: "The best refrigerator in the market.",
        price: 65000,
        stock: 5,
        image: "https://whirlpoolarg.vteximg.com.br/arquivos/ids/160013-1000-1000/WRM54AK-01.jpg?v=636843652899770000",
    });
    const producto5 = Product.create({
        name: "CellPhone Xiaomi",
        description: "Redmi Note 10, 6.0 inches, 250gb, 12gb RAM,4 cameras!",
        price: 12000,
        stock: 43,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTALbNv80PTObO79eSC8OpHi1EaUmZo6BLlkdXkIs66U7iiUv6zdwr_ahjPWapwCf3vO-ywJyM&usqp=CAc",
    });
    const producto6 = Product.create({
        name: "Laptop HP i5",
        description: "HP i5 8025u, 15.6 inches, 256gb SSD, 8gb RAM.",
        price: 50000,
        stock: 15,
        image: "https://http2.mlstatic.com/D_NQ_NP_945569-MLA31652747525_082019-O.webp",
    });
    const producto7 = Product.create({
        name: "Laptop HP i3",
        description: "HP i3 8000u, 14 inches, 500 gb HHD, 4gb RAM.",
        price: 30000,
        stock: 15,
        image: "https://http2.mlstatic.com/D_NQ_NP_945569-MLA31652747525_082019-O.webp",
    });
    const producto8 = Product.create({
        name: "Tablet Samsung",
        description: "xPro Max, 10 inches, 4gb RAM, 64gb.",
        price: 25000,
        stock: 8,
        image: "https://makkax.com/wp-content/uploads/2020/04/samsung_tab_a_t295_-_plata_1_1_1.jpg",
    })

    const producto9 = Product.create({
        name: "Refrigerator Samsung",
        description: "The refrigerator Smart!",
        price: 95000,
        stock: 8,
        image: "https://d26lpennugtm8s.cloudfront.net/stores/959/516/products/51mrs1wzk8l-_sl1000_1-d8bd50c9e4eaf9920815756371652730-1024-1024.jpg",
    })
    const producto10 = Product.create({
        name: "Speaker Sony",
        description: "20watts, waterproof speaker.",
        price: 5000,
        stock: 12,
        image: "https://www.olmoshogar.com.ar/wp-content/uploads/2020/08/PARLANTE-SONY-GTKPG10-1.jpg",
    })
    const producto11 = Product.create({
        name: "Speaker JBL",
        description: "10watts, no waterproof.",
        price: 3000,
        stock: 5,
        image: "https://d26lpennugtm8s.cloudfront.net/stores/453/714/products/flip55-e371f0ac5a367979dd15811094686878-1024-1024.jpg",
    })
    const producto12 = Product.create({
        name: "LG TV ",
        description: "TV 32 inches, FULL HD, HDR",
        price: 6750,
        stock: 5,
        image: "https://dj4i04i24axgu.cloudfront.net/guides-ui/statics/0.1.13/images/tipo_tv.png",
    })
    const producto13 = await Product.create({
        name: "LG TV ",
        description: "TV 32 inches, FULL HD, HDR",
        price: 6750,
        stock: 5,
        image: "https://dj4i04i24axgu.cloudfront.net/guides-ui/statics/0.1.13/images/tipo_tv.png",
    })



    producto1.then((prod) => {
        prod.addCategory(categoria1)
    })

    producto2.then((prod) => {
        prod.addCategory(categoria2)
    })

    producto3.then((prod) => {
        prod.addCategory(categoria4)
    })

    producto4.then((prod) => {
        prod.addCategory(categoria3)
    })
    producto5.then((prod) => {
        prod.addCategory(categoria4)
    })
    producto6.then((prod) => {
        prod.addCategory(categoria1)
    })

    producto7.then((prod) => {
        prod.addCategory(categoria1)
    })

    producto8.then((prod) => {
        prod.addCategory(categoria4)
    })
    producto9.then((prod) => {
        prod.addCategory(categoria3)
    })
    producto10.then((prod) => {
        prod.addCategory(categoria5)
    })
    producto11.then((prod) => {
        prod.addCategory(categoria5)
    })
    producto12.then((prod) => {
        prod.addCategory(categoria2)
    })
  

    // creating users

    const user1 = User.create({
        firstname: "facu",
        surname: "uriona",
        address: "cordoba",
        password: "1234",
        type: 1,
        username:"facuuriona",
        email:"faqq.uri@gmail.com"      
    });

    const user2 = User.create({
        firstname: "cesar",
        surname: "sanchez",
        address: "rosario",
        password: "1234",
        type: 1,
        username: "cesarsanchez",
        email:"cesars.pro@gmail.com"        
    });

    const user3 = User.create({
        firstname: "rodrigo",
        surname: "pinea",
        address: "mendoza",
        password: "1234",
        type: 1,
        username: "rodrigopinea",
        email:"rodrigomp88@gmail.com"        
    });

    const user4 = User.create({
        firstname: "matias",
        surname: "cordoba",
        address: "las sierras",
        password: "1234",
        type: 1,
        username: "matiascordoba",
        email: "matiascba99@gmail.com"      
    });

    const user5 = User.create({
        firstname: "guillermo",
        surname: "ambroggio",
        address: "chaco",
        password: "1234",
        type: 1,
        username: "guillermoambroggio",
        email: "guillermoambroggio@gmail.com"        
    })

    const user6 = await User.create({
        firstname: "lionel",
        surname: "messi",
        address: "barcelona",
        password: "1234",
        type: 2,
        username: "lionelmessi",
        email: "leomessi@gmail.com"  
    })    

//CREAR ORDENES:
    const order1 = Order.create({
        status: "processing",
        address: "",        
    }) 
    
   /*  const order2 = await Order.create({
        status: "created",
        address: "",        
    })   */


//RELACION(1-1) USUARIO-ORDEN:    
//La orden 1 Pertenece al usuario 6
    order1.then(orden => {
        orden.setUser(user6)
    })

/*     user5.then(user => {
        user.setOrder(order2)
    }) */

//RELACION(N-N) PRODUCTOS-ORDENES
//La orden 1 tiene el producto 12
    order1.then((orden) => {
        orden.addProduct(producto13)
    })

/*     producto10.then((prod) => {
        prod.addOrder(order2)
    }) */

   
   

    res.send("LISTO")

});












server.use('/',ind)


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
