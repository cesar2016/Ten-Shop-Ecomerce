import {
    GET_PRODUCT,
    GET_ALL_PRODUCT,
    GET_PRODUCT_DETAIL,
    GET_SEARCH_PRODUCTS
   } from '../actions/index';

const initialState = {
  catalogue: [],
  search_result: []
};
   
const reducer = (state = initialState , action) => {   
  switch (action.type) {
    case GET_SEARCH_PRODUCTS:
        return {
          ...state,
          search_result: action.payload
        };

    case GET_PRODUCT:
        return {
          ...state,
          catalog: action.payload
        };

    case GET_ALL_PRODUCT:
      return {
        ...state,
        catalogue: action.payload
      }
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        catalog: action.payload
      }

    default:
      return state;
    }
  }

   
export default reducer;