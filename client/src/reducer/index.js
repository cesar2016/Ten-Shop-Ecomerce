import {
    GET_ALL_PRODUCT,
    GET_SEARCH_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETECATXPROD,
    GET_ALL_CATEGORIES,
    GET_CATEGORIES_X_PRODUCTS,
    GET_ONE_CATEGORY,
    DELETE_CATEGORY,
    UPDATE_CATEGORY
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
      return state;
    case DELETE_PRODUCT:
      return state;
    case DELETECATXPROD:
      return state;
    case GET_CATEGORIES_X_PRODUCTS:
      return {
        ...state,
        categores_x_products: action.payload
      }
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case GET_ONE_CATEGORY:
      return {
        ...state,
        onecategory: action.payload
      }
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(el => el !== action.name)
      }
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(el => {
          if (el.id === action.payload.id) {
            el.name = action.payload.body.name;
            el.description = action.payload.body.description
          }          
        })
      }

    default:
      return state;
    }
  }

   
export default reducer;