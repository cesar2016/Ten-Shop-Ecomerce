
import {
    GET_ALL_PRODUCT,
    GET_SEARCH_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETECATXPROD,
    GET_ALL_CATEGORIES,
    GET_CATEGORIES_X_PRODUCTS,
    GET_ONE_CATEGORY,
    ADD_CATEGORY,
    MODIFY_CATEGORY,
    DELETE_CATEGORY,
    ADD_USER,
    LOGIN_USER,
    ADD_CART,
    GET_ALL_CART,
    USER_LOGOUT,
    DELETE_USER,
    ONLINE_USER_ERROR,
    GET_USERS,
    UPDATE_USER,
    UPDATE_CAR,
    COMPLETE_CAR,
    CANCELL_CART,
    GET_ORDERS,
    UPDATE_PRICE_ORDER,
    GET_REVIEWS,
    ADD_REVIEW,
    LOGIN_USER_COOKIE,
    GET_ORDERSXPRODUCT,
    UPDATE_ONLINE_USER,
    SET_ID,
    VACIAR_LS,
    ADD_CART_INVITED,
    GET_PRODUCTSXORDER,
    FINISH_ORDER,
    DELETE_PRODUCT_CART,
    CANCELL_ORDER

   } from '../actions/index';
var ls = require('local-storage');

const initialState = {
  all_products: [],
  search_result: [],
  categores_x_products: [],
  categories: [],
  onecategory:[],
  onlineUser: 0,
  cart:[],
  getcart:[],
  all_users: [],
  getorders: [],
  reviews: [],
  newrev: {},
  ordersxproduct: [],
  setid: [],
  productsxorder: {},

};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_PRODUCTS:
      return {
        ...state,
        search_result: action.payload
      };
    case GET_ALL_PRODUCT:
      return {
        ...state,
        all_products: action.payload
      };
      /* adsadasdadasdasd */
    case UPDATE_PRODUCT:
      let id = action.payload.id;
      let categories = action.payload.category
      let newCategories_x_products = state.categores_x_products.filter(el => id !== el.product_id)
      categories.forEach(cat => newCategories_x_products.push({
        product_id: id,
        category: cat
      }))
      /////
      let filterBody = action.payload;
      delete filterBody.category
      let newAllProducts = [];
      state.all_products.forEach(el => {
        if (el.id !== filterBody.id) {
          newAllProducts.push(el)
        } else {
          newAllProducts.push(filterBody)
        }
      })
      return {
        ...state,
        categores_x_products: newCategories_x_products,
        all_products: newAllProducts
      }
    case DELETE_PRODUCT:
      let idDelete = action.payload
      return {
        ...state,
        all_products: state.all_products.filter(el => el.id !== idDelete)
      }
    case DELETECATXPROD:
      let legacycatxprod = state.categores_x_products;
      legacycatxprod.forEach((el, i) => {
        if (el.product_id === action.payload.id && el.category === action.payload.name) {
          return legacycatxprod.splice(i, 1)
        }
      })
      return {
        ...state,
        categores_x_products: legacycatxprod
      }
    case GET_CATEGORIES_X_PRODUCTS:
      return {
        ...state,
        categores_x_products: action.payload
      }
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case GET_ONE_CATEGORY:
      return {
        ...state,
        onecategory: action.payload
      }
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
            }
    case MODIFY_CATEGORY:
      let name = action.payload.name;
      let newCategories = state.categories.filter(elem => name !== elem.name)
      let filterCat = action.payload.body;
      newCategories.push(filterCat)
      return {
         ...state,
         categories: newCategories
      }
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories.filter(cat => cat.name !== action.payload)]
      }
    case ADD_USER:
      return {
        ...state,
        onlineUser: reducerAddUser(action.payload)
      }
    case LOGIN_USER:
      return {
        ...state,
        onlineUser: reducerlogin(action.payload)
      }
    case ADD_CART:
      return { ///StateAdd_Prods
        ...state,
        cart: [...state.cart, action.payload]
      }
    case ADD_CART_INVITED:
      return { ///StateAdd_Prods
        ...state,
       // cart: agregaids(action.payload)
      }
    case GET_ALL_CART:
      return { ///StateAdd_Prods
        ...state,
        getcart: action.payload
      }
    case USER_LOGOUT:
      return {
        ...state,
        onlineUser: 3
      }
    case ONLINE_USER_ERROR:
      return {
        ...state,
        onlineUser: 4
      }
    case GET_USERS:
      return {
        ...state,
        all_users: action.payload
      }
    case UPDATE_USER:
      return {
        ...state,
        all_users: reducerUpdateUser(state.all_users, action.payload.id, action.payload.body)
      }
    case UPDATE_CAR:
      return {
        ...state,
        getcart: [],
        cart: []
      }
    case COMPLETE_CAR:
      return {
        ...state,
        getcart: [],
        cart: []
      }
    case CANCELL_CART:
      return {
        ...state,
        getcart: [],
        cart: []
      }

    case CANCELL_ORDER:
      return {
        ...state,
      }

    case GET_ORDERS:
       return {
       ...state,
       getorders: action.payload
       }
    case ADD_REVIEW:
        return {
          ...state,
          newrev: action.payload
      }
    case DELETE_USER:
      return {////////////////////////////////////////
         ...state,
          all_users: [...state.all_users.filter(user => user.id !== action.payload)]          
      }
    case GET_REVIEWS:
       return {
         ...state,
         reviews: action.payload
       }
    case CANCELL_CART:
       return {
         ...state,
         getcart: [],
         cart: []
       }
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      }

    case CANCELL_CART:
      return {
        ...state,
        getcart: [],
        cart: []
      }
    case GET_ORDERS:
      return {
        ...state,
        getorders: action.payload
      }
    case UPDATE_PRICE_ORDER:
      return {
        ...state,
      }
    case LOGIN_USER_COOKIE:
      return {
        ...state,
        onlineUser: loginUserCookie(action.payload)
      }
    case GET_ORDERSXPRODUCT:
      return {
        ...state,
        ordersxproduct: action.payload
      }
    case UPDATE_ONLINE_USER:
      return {
        ...state,
        onlineUser: action.payload
      }
    case SET_ID:
      return {
        ...state,
        setid: action.payload
      }
    case VACIAR_LS:
      return {
        ...state,
        setid: []
      }
    case GET_PRODUCTSXORDER:
      return {
        ...state,
        productsxorder: action.payload
      }
    case FINISH_ORDER:
      return {
        ...state,
        getorders: [],
      }
    case DELETE_PRODUCT_CART:
      return {
        ...state,
        getcart: state.getcart.filter(prod => prod.order_id !== action.payload.orderId && prod.product_id !== action.payload.productId),
        cart: state.cart.filter(prod => prod.order_id !== action.payload.orderId && prod.product_id !== action.payload.productId),
      }

    default:
      return state;
  }



  function setidproduct (id) {
    let asd = [...state.setid, id];
    //ls.set('idProducts', asd);
    return asd

  }
}

export default reducer;



function reducerAddUser(data) {
  if (data[0]) {
    const { id, username, firstname, surname, type, address } = data[1];
    return { id, username, firstname, surname, type, address };
  } else {
    return 1
    }
}

function reducerlogin(data){
  if(data){
    return data
  }else {
    return 2
  }
}

function reducerUpdateUser (ar,id,body){
  for (let i = 0; i< ar.length;i++ ){
    if (ar[i].id === id){
      ar[i] = Object.assign({},ar[i],body)
    }
    return ar
   }
}

function loginUserCookie (data) {
  if (data) {
    return data
  } else {
    return 0
  }
}

/* function agregaids (ids) {
  ids.forEach(element => {
    return [...state.cart, element]
  });
} */
