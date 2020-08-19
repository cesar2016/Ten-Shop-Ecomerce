import axios from "axios"

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_ALL_PRODUCT_WITHOUT_FILTER = 'GET_ALL_PRODUCT_WITHOUT_FILTER';
export const GET_SEARCH_PRODUCTS = "GET_SEARCH_PRODUCTS";



export function getSearchProducts (search) {
    return function(dispatch) {
      return axios.get("http://localhost:3001/products/searches/" + search)
        .then(result => {
          dispatch({
            type: GET_SEARCH_PRODUCTS,
            payload: result
          })
        })
    };
  }

export function getAllProducts () {
  return function(dispatch) {
    return axios.get("http://localhost:3001/products")      
      .then(result => result.data)
      .then(products => {
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: products });
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

 export function addProduct (producto) {
  return function(dispatch) {
    return   fetch('http://localhost:3001/product/add', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(producto)
})
.then(response => response.json())
.then(producto => {
          dispatch({
              type: ADD_PRODUCT,
              payload: producto });
        });
    };
  }

  export function getAllCategory () {
    return function(dispatch) {
      return fetch("http://localhost:3001/categories")
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: GET_ALL_CATEGORY,
              payload: json });
        });
    };
  }

  export function updateProduct(id, product){
    return function(dispatch) {
      return   fetch('http://localhost:3001/product/' + id , {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)})
    .then(response => response.json())
    .then(productosActualizados => {
            dispatch({
                type: UPDATE_PRODUCT,
                payload: productosActualizados });
          });
      };
    }

    export function deleteProduct (id) {
      return function(dispatch) {
        return   fetch('http://localhost:3001/product/' , {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
      })
    })
    .then(response => response.json())
    .then(producto => {
              dispatch({
                  type: DELETE_PRODUCT,
                  payload: producto });
            });
        };
      }

      // getAllProductwithoutFilter, te trae todos los productos tengan o no tengan STOCK
  export function getAllProductwithoutFilter () {
    return function(dispatch) {
      return fetch("http://localhost:3001/product")
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: GET_ALL_PRODUCT_WITHOUT_FILTER,
              payload: json });
        });
    };
  }
