import axios from "axios";
var ls = require('local-storage');

export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_SEARCH_PRODUCTS = "GET_SEARCH_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETECATXPROD = "DELETECATXPROD";
export const GET_CATEGORIES_X_PRODUCTS = "GET_CATEGORIES_X_PRODUCTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_ONE_CATEGORY = "GET_ONE_CATEGORY";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const MODIFY_CATEGORY = "MODIFY_CATEGORY";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const ADD_CART = "ADD_CART";
export const GET_ALL_CART = "GET_ALL_CART";
export const USER_LOGOUT = "USER_LOGOUT";
export const ONLINE_USER_ERROR = "ONLINE_USER_ERROR";
export const GET_USERS = "GET_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_CAR = "UPDATE_CAR";
export const COMPLETE_CAR = "COMPLETE_CAR";
export const CANCELL_CART = "CANCELL_CART";
export const GET_ORDERS = "GET_ORDERS";
export const UPDATE_PRICE_ORDER = "UPDATE_PRICE_ORDER";
export const GET_REVIEWS = "GET_REVIEWS";
export const ADD_REVIEW = "ADD_REVIEW";
export const LOGIN_USER_COOKIE = "LOGIN_USER_COOKIE";
export const UPDATE_ONLINE_USER = "UPDATE_ONLINE_USER";
export const SET_ID = "SET_ID";
export const VACIAR_LS = "VACIAR_LS";
export const ADD_CART_INVITED = "ADD_CART_INVITED";
export const GET_ORDERSXPRODUCT = "GET_ORDERSXPRODUCT";
export const GET_PRODUCTSXORDER = "GET_PRODUCTSXORDER";
export const FINISH_ORDER = "FINISH_ORDER";
export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const CANCELL_ORDER = "CANCELL_ORDER";
export const GET_SUMARY_CART = "GET_SUMARY_CART";
export const ACTIVE_ACCOUNT = "ACTIVE_ACCOUNT";
export const SEND_EMAIL_ORDER = "SEND_EMAIL_ORDER";










export function getSearchProducts (search) {
    return function(dispatch) {
      return axios.get("http://localhost:3001/products/searches/" + search, { withCredentials: true })
        .then(result => result.data)
        .then(data => {
          dispatch({
            type: GET_SEARCH_PRODUCTS,
            payload: data
          })
        })
    };
  }

export function getAllProducts () {
  return function(dispatch) {
    return axios.get("http://localhost:3001/products", { withCredentials: true })
      .then(result => result.data)
      .then(products => {
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: products });
      });
  };
}

export function addCategory(category){
  return function(dispatch){
    return axios.post("http://localhost:3001/categories/add/", category, { withCredentials: true })
    .then(result => {
        dispatch({
            type: ADD_CATEGORY,
            payload: category
          });
    })
  }
}

export function modifyCategory(body,name){
  return function(dispatch){
    return axios.put(`http://localhost:3001/categories/modify/${name}`, body, { withCredentials: true })
    .then(result => result.data)
    .then((data) => {
      dispatch({
        type: MODIFY_CATEGORY,
        payload: data
      });
    })

  }
}

export function deleteCategory(category){
  return function(dispatch){
    return axios.delete(`http://localhost:3001/categories/${category}`)
    .then(() => {
      dispatch({
        type: DELETE_CATEGORY,
        payload: category
      });
    })
  }
}




export function updateProduct (body) {
  return function(dispatch) {
    return axios.post(`http://localhost:3001/products/update/`, body)
      .then(() => {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: body
        })
      })
  }
}

export function deleteProduct (id) {
  return function(dispatch) {
    return axios.delete(`http://localhost:3001/products/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: id
        })
      })
  }
 }

export function deleteCatxProd (name, id) {
  return function(dispatch) {
    return axios.delete(`http://localhost:3001/products/cxp/${id}/${name}`)
      .then(() => {
        dispatch({
          type: DELETECATXPROD,
          payload: {name, id}
        })
      })
  }
}

export function getCategoriesxProducts ()  {
  return function(dispatch) {
    return axios.get("http://localhost:3001/products/cxp", { withCredentials: true })
      .then(result => result.data)
      .then(data => {
        dispatch({
            type: GET_CATEGORIES_X_PRODUCTS,
            payload: data });
      })
  }
}


export function getAllCategories () {
  return function(dispatch) {
    return axios.get("http://localhost:3001/categories/" , { withCredentials: true })
      .then(result => result.data)
      .then(data => {
        dispatch({
          type: GET_ALL_CATEGORIES,
          payload: data
        })
      })
  }
}



export function getOneCategory (category) {
    return function(dispatch) {
      return fetch("http://localhost:3001/categories/"+category)
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: GET_ONE_CATEGORY,
              payload: json });
        });
    };
  }
export function addUser (body) {
  return function(dispatch) {
    return axios.post("http://localhost:3001/users/adduser", body, { withCredentials: true })
      .then(result => result.data)
      .then(data => {
        dispatch({
          type: ADD_USER,
          payload: data
        })
      })
  }
}



export function deleteUser (id) {
  console.log('El IDDDD', id)
  return function(dispatch) {
    return axios.delete(`http://localhost:3001/users/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_USER,
          payload: id
        })
      })
  }
 }
  ///AGREGANDO PRODUCT AL CARRITO
  export function addCart (idProduct, idUser) {
      var body = {
      id: idProduct
    }
    return function(dispatch) {
      return axios.post(`http://localhost:3001/users/${idUser}/cart/`, body, { withCredentials: true })
        .then(() => {
          dispatch({
            type: ADD_CART,
            payload: body
          })
        })
    }
  }

    ///AGREGANDO PRODUCT AL CARRITO CUANDO TE LOGEAS RECIEN.
    export function addCartInvited (ids, idUser) {
      let body = ids
    return function(dispatch) {
      return axios.post(`http://localhost:3001/users/${idUser}/invited/cart/`, body, { withCredentials: true })
        .then(() => {
          dispatch({
            type: ADD_CART_INVITED,
          })
        })
    }
  }

    //TRAYENDO PRODUCTOS DEL CARRITO DE UN USUARIO
    export function getAllCart (idUser) {
      return function(dispatch) {
        return axios.get(`http://localhost:3001/users/${idUser}/cart/`,{ withCredentials: true })
          .then(result => result.data)
          .then(productsCart => {
            dispatch({
                type: GET_ALL_CART,
                payload: productsCart });
          });
      };
    }


/*export function userLogout() {
  return function(dispatch) {
    return axios.get('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        return {
          type: USER_LOGOUT
        }
      })
  }
}*/





export function onlineUserError () {
  return {
    type: ONLINE_USER_ERROR
  }
}

export function getUsers () {
  return function (dispatch) {
    return axios.get('http://localhost:3001/users', { withCredentials: true })
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: GET_USERS,
        payload: result
      })
    })
  }
}
export function updateUser(id, body) {
  return function (dispatch) {
    return axios.put(`http://localhost:3001/users/${id}`, body)    
      dispatch({
        type: UPDATE_USER,
        payload: {id,body}
      })
  }
}

export function updateCart(idUser, body) {
 //console.log("ACCIONSSSSSSSSSSSSSSS//////////////////////////////////////",body)
  return function (dispatch) {
    return axios.post(`http://localhost:3001/users/${idUser}/c/cart`, body, { withCredentials: true })
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: UPDATE_CAR,
      })
    })
    .catch(err => {console.log("EL ERRRORRRRRRR",err)})
  }
}

export function priceOrder(idUser, total) {
  // console.log("ACCIONSSSSSSSSSSSSSSS//////////////////////////////////////",total)
let body = {
  total_price: Math.round(total)
}
  return function (dispatch) {
    return axios.post(`http://localhost:3001/users/${idUser}/c/order`, body)
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: UPDATE_PRICE_ORDER,
      })
    })
  }
}

export function completeCart(idUser, addres){
  //console.log("Acionssssss",addres,idUser)
  let body = {
    status: "processing",
    address: addres
  };
  return function (dispatch) {
    return axios.post(`http://localhost:3001/users/${idUser}/update/cart`, body, { withCredentials: true })
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: COMPLETE_CAR,
      })
    })
  }
}

export function finishorder(idUser, idOrder){
  console.log("Acionssssss",idUser, idOrder)
  return function (dispatch) {
    return axios.post(`http://localhost:3001/users/${idUser}/aceptar/${idOrder}`, { withCredentials: true })
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: FINISH_ORDER,
      })
    })
  }
}

export function cancellCart(idUser){
  let body = {
    status: "cancelled",
  };
  return function (dispatch) {
    return axios.post(`http://localhost:3001/users/${idUser}/update/cart`, body, { withCredentials: true })
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: CANCELL_CART,
      })
    })
  }
}


export function celarordenPanel(idUser, idOrder){
  return function (dispatch) {
    return axios.post(`http://localhost:3001/users/${idUser}/canc/${idOrder}`, { withCredentials: true })
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: CANCELL_ORDER,
      })
    })
  }
}

export function vaciarpanelorders () {
  return {
    type: FINISH_ORDER
  }
}

export function getOrders(status){
  return function (dispatch) {
    return axios.get(`http://localhost:3001/orders/status/${status}`, { withCredentials: true })
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: GET_ORDERS,
        payload: result

      })
    })
  }
}



export function addReview(aux, idProduct) {
  return function(dispatch) {
    return axios.post(`http://localhost:3001/products/${idProduct}/review`, aux)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: ADD_REVIEW,
      })
    })
  }
}


export function loginUser(body){
 // console.log("QUE ENTRA AL BODY", body)
  return function(dispatch){
    return axios.post("http://localhost:3001/login",body, { withCredentials: true })
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: LOGIN_USER,
        payload: data
      })
    })
  }
}
export function userLogout () {
  axios.get('http://localhost:3001/logout', { withCredentials: true })
  return {
    type: USER_LOGOUT
  }

}

export function loginUserCookie(){
  return function(dispatch){
    return axios.get("http://localhost:3001/login", { withCredentials: true })
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: LOGIN_USER_COOKIE,
        payload: data
      })
    })
  }
}
    export function getReviews(id){
      return function (dispatch){
        return axios.get(`http://localhost:3001/products/${id}/review`)
        .then(result => result.data)
        .then(result => {
          dispatch({
            type: GET_REVIEWS,
            payload: result
          })
        })
      }
    }


export function updateOnlineUser (id, body) {
  return function(dispatch) {
    return axios.put(`http://localhost:3001/users/${id}`, body)
      .then(result => result.data)
      .then(data => {
        dispatch({
          type: UPDATE_ONLINE_USER,
          payload: data
        })
      })
  }
}


export function lsset() {
 let idproductos = ls.get('idProducts');
  return function(dispatch) {
      dispatch({
        type: SET_ID,
        payload: idproductos
    })
  }
}

export function vaciarls() {
  ls.set('idProducts', []);
   return function(dispatch) {
       dispatch({
         type: VACIAR_LS,
     })
   }
 }

//TRAE TODAS LAS ORDENES DE UN PRODUCTO:
export function getOrdersxproduct(idProd) {
  return function(dispatch) {
    return axios.get(`http://localhost:3001/orders/ORDD/${idProd}`)
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: GET_ORDERSXPRODUCT,
        payload: result
      })
    })
  }
}
//TRAE TODOS LOS PRODUCTOS DE UNA ORDEN:
export function getproductsxorders(idOrder) {
  console.log(idOrder);
  return function(dispatch) {
    return axios.get(`http://localhost:3001/orders/products/${idOrder}`)
    .then(result => result.data)
    .then(result => {
      dispatch({
        type: GET_PRODUCTSXORDER,
        payload: result
      })
    })
    .catch(err => {console.log("ASDASDASDADAS",err)})
  }
}

export function getAllReviews(){
  return function(dispatch){
    return axios.get('http://localhost:3001/products/reviews/allReviews')
  .then(result => result.data)
  .then(result => {
    dispatch({
      type: GET_ALL_REVIEWS,
      payload: result
    })
  })
  }
}

export function activeaccount(idUser){
  return function(dispatch){
    return axios.get(`http://localhost:3001/users/activeaccount/${idUser}`, { withCredentials: true })
  .then(result => result.data)
  .then(result => {
    dispatch({
      type: ACTIVE_ACCOUNT,
    })
  })
  }
}

export function sendemailorder(User, body){
let first = User.firstname;
let last = User.surname
let email = User.email
  return function(dispatch){
    return axios.post(`http://localhost:3001/users/sendorder/${first}/${last}/${email}`,body, { withCredentials: true })
  .then(result => result.data)
  .then(result => {
    dispatch({
      type: SEND_EMAIL_ORDER,
    })
  })
  }
}




////////////////////// IMAGES PRODUTS

export var images = [

  {    //1
    img1: 'https://x-view.com/assets/img/dt/notebooks/novabook/novabook-plegado3.png',
    img2: 'https://www.cronista.com/__export/1566304459280/sites/revistait/img/2019/08/20/122686_85931.jpg',
    img3: 'https://tecnologia-informatica.com/wp-content/uploads/2018/12/word-image-140.jpeg'
  },
  {   //2
    img1: 'https://d2ye0ltusw47tz.cloudfront.net/379072-large_default/tv-led-4k-65-rca-x65andtv-android-tv-fhd-netflix-youtube-tda.jpg',
    img2: 'https://http2.mlstatic.com/smart-tv-rca-android-50-x50andtv-con-comando-de-voz-D_NQ_NP_790109-MLA32568164311_102019-F.jpg',
    img3: 'https://images.samsung.com/is/image/samsung/ar-uhdtv-mu6100-un50mu6100gxzd-black-136495500?$PD_GALLERY_L_JPG$'
  },
  {    //3
    img1: 'https://resources.claroshop.com/medios-plazavip/s2/10487/1297225/5e1a067703a0c-647bb529-4c83-499c-9562-620e258817a0-1600x1600.jpg',
    img2: 'https://tiendaste-ka.com/578-large_default/celular-huawei-y9s-precio.jpg',
    img3: 'https://www.laptopshop.com.mx/pub/media/catalog/product/cache/8872124951f387c8ded3f228faa55bea/y/5/y5_neo-_1.jpg'
  },
  {    //4
    img1: 'https://www.elitehogar.com.ar/wp-content/uploads/2020/01/heladera-gafa-hgf387awb-D_NQ_NP_640224-MLA31547504771_072019-F.jpg',
    img2: 'https://argendustria.com.ar/wp-content/uploads/heladera-1-777x437.jpg',
    img3: 'https://i1.wp.com/culturageek.com.ar/wp-content/uploads/2019/12/Culturageek.com_.ar-Samsung-Heladera-Freezer-Superior-Twin-Cooling-Plus-00.jpg?fit=1000%2C555&ssl=1'
  },
  {    //5
    img1: 'https://i.ytimg.com/vi/oVmsEwj5jmw/maxresdefault.jpg',
    img2: 'https://elcomercio.pe/resizer/6clXXN-UompBfkORKTFOIsps8qg=/1200x1200/smart/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7GMALSGASZCYJDJAT6V6E7RTLY.jpg',
    img3: 'https://cnet4.cbsistatic.com/img/cserj_eQfG2ayAiN_AE1dexh8Zs=/940x0/2019/12/17/37629192-73e0-4bde-9197-dffb0b484b1e/xiaomi-redmi-note-8-7.jpg'
  },
  {    //6
    img1: 'https://resources.claroshop.com/medios-plazavip/mkt/5ddfdbb597092_4jpg.jpg',
    img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCCxtReDQzWQJIs5W0KhvLUHHX6UttQnRi8w&usqp=CAU',
    img3: 'https://www.lacuracao.pe/wcsstore/efe_cat_as/646x1000/curacao/15-DA0010LA_1o.jpg'
  },
  {    //7
    img1: 'https://solohp.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/l/a/laptop-hp-15-economica-core-i3-1005g1-4gb-ram-128gb-ssd-solohpcom-01_1.jpg',
    img2: 'https://www.officedepot.com.gt/medias/36484.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDcyNDUwfGltYWdlL2pwZWd8aDc4L2g0YS85ODYyOTgxNDg0NTc0LmpwZ3w2ZDU2YjBjNDFmMGMyMTVkNGIyNmE3Mzc0OWVkNmMzYjg3YzgwOTAxZjAwMDc1MzZmMDlkZGVjMjQwYWVmNGVh',
    img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHhArjdWkmMU374BQcZR3eI-8IPxlKT7uNxA&usqp=CAU'
  },
  {    //8
    img1: 'https://www.informaticadirecto.com/blog/wp-content/uploads/2019/12/tablet10-01.jpg',
    img2: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2013/09/20333-samsung-galaxy-tab-3-101-venta-10-octubre.jpg?itok=MNR5061Q',
    img3: 'https://i.ytimg.com/vi/nXOEZk880Pk/maxresdefault.jpg'
  },
  {    //9
    img1: 'https://img.global.news.samsung.com/cl/wp-content/uploads/2019/01/Family-Hub-2019-1.jpg',
    img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2IeKKZegRjPj0j7uhWkj4HsYFuaLVENaTwg&usqp=CAU',
    img3: 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dwe6038d0d/images/imagenes-productos/701/109609-0000-003.jpg?sw=513&sh=654&sm=fit'
  },
  {    //10
    img1: 'https://www.bhphotovideo.com/images/images2000x2000/sony_gtkpg10_gtk_pg10_outdoor_wireless_speaker_1475294.jpg',
    img2: 'https://images-na.ssl-images-amazon.com/images/I/71qho3p4QoL._AC_SL1500_.jpg',
    img3: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2018/10/23/154031397410633/154031397410633_8f67db23-37df-46b1-9357-c079ac200be6.png'
  },
  {    //11
    img1: 'https://http2.mlstatic.com/D_NQ_NP_762876-MLA43074489600_082020-O.webp',
    img2: 'https://azcd.harveynorman.com.au/media/catalog/product/j/b/jbl_-_go_2.jpg',
    img3: 'https://images-na.ssl-images-amazon.com/images/I/71DW6JMyCWL._AC_SY355_.jpg'
  },
  {    //12
    img1: 'https://intercompras.com/product_thumb_keepratio_2.php?img=images/product/LG_32CS560.jpg&w=650&h=450',
    img2: 'https://tienda.ecomputer.es/159574-large_default/television-toshiba-32-lcd-32w1863dg-hd.jpg',
    img3: 'https://www.lg.com/ar/images/televisores/32ld340/gallery/large03.jpg'
  },
  {    //13
    img1: 'https://http2.mlstatic.com/D_NQ_NP_890601-MLA20366896793_082015-O.webp',
    img2: 'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/l/c/lcd26.jpg',
    img3: 'https://www.importechperu.com/wp-content/uploads/2019/03/LG-L194WT-01.png'
  }


]



export function deleteProductCart(orderId, productId) {
  return function(dispatch) {
    return axios.delete(`http://localhost:3001/orders/orderdelete/${orderId}/${productId}`)
      .then(result => result.data)
      .then(data => {
        dispatch({
          type: DELETE_PRODUCT_CART,
          payload: { orderId, productId }
        });
      });
  };
};

export function getSumaryCart(idUser) {
  console.log("USUARIOOOOOO", idUser)
  return function(dispatch) {
    return axios.get("http://localhost:3001/users/cart/sumary/" + idUser)
      .then(result => result.data)
      .then(data => {
        dispatch({
          type: GET_SUMARY_CART,
          payload: data
        })
      })
  }
}

