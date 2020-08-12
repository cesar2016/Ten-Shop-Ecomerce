export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';

export function getProduct (keyword) {
    return function(dispatch) {
      return fetch("http://localhost:3001/search/" + keyword)
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: GET_PRODUCT,
              payload: json });
        });
    };
  }

  // getAllProduct , te trae todos los productos que tengan STOCK
  export function getAllProduct () {
    return function(dispatch) {
      return fetch("http://localhost:3001/catalogue")
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: GET_ALL_PRODUCT,
              payload: json });
        });
    };
  }

  export function getProductDetail(id) {
    return function(dispatch) {
        return fetch('http://localhost:3001/product/' + id)
           .then(response => response.json())
           .then(json => {
                dispatch({
                type: GET_PRODUCT_DETAIL,
                  payload: json });
       });
   };
 }
