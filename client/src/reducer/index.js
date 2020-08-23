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
   } from '../actions/index';

const initialState = {
  all_products: [],
  search_result: [],
  categores_x_products: [],
  categories: [],
  onecategory:[],
  onlineUser: false,
  cart:[],
  getcart:[]
};
const reducer = (state = initialState , action) => {   
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
    case UPDATE_PRODUCT:
      let id = action.payload.id;
      let categories = action.payload.category
      let newCategories_x_products = state.categores_x_products.filter(el => id !== el.product_id)
      categories.forEach(cat => newCategories_x_products.push({product_id: id, category:cat}))
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
          onlineUser: reducerAddUser(action.payload.data, action.payload.body)
        }
      case LOGIN_USER:
        return {
          ...state,
          onlineUser: reducerlogin(action.payload)
        }
      case ADD_CART:
        return {///StateAdd_Prods
          ...state,
          cart: [...state.cart, action.payload]
        }
        case GET_ALL_CART:
          return {///StateAdd_Prods
            ...state,
            getcart: action.payload
          }
    default:
      return state;
    }
  }

   
export default reducer;



function reducerAddUser(data, body) {
  const { username, firstname, surname, type } = body;
  if (data) {
    return {username, firstname, surname, type};
  } else {
    return true
    }
}

function reducerlogin(data){
  if(data){
    return data
  }else {
    return true
  }
}