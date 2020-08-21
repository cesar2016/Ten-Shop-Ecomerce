import {
    GET_ALL_PRODUCT,
    GET_SEARCH_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETECATXPROD,
    GET_ALL_CATEGORIES,
    GET_CATEGORIES_X_PRODUCTS,
    GET_ONE_CATEGORY
   } from '../actions/index';

const initialState = {
  all_products: [],
  search_result: [],
  categores_x_products: [],
  categories: [],
  onecategory:[]
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
      return {
        ...state,
        categores_x_products: newCategories_x_products
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

    default:
      return state;
    }
  }

   
export default reducer;