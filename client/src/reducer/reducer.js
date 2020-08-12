import {
    GET_PRODUCT,
    GET_ALL_PRODUCT,
    GET_PRODUCT_DETAIL,
   } from '../actions/actions';

   const initialState = {
    catalog: []
   };
   
    const reducer = (state = initialState , action) => {
      console.log(action)
   
      switch (action.type) {
   
        case GET_PRODUCT:
            return {
              ...state,
              catalog: action.payload
            };
   
        case GET_ALL_PRODUCT:
          return {
            ...state,
            catalog: action.payload
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