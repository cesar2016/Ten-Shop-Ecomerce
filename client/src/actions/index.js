import axios from "axios"

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
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";


export function getSearchProducts (search) {
    return function(dispatch) {
      return axios.get("http://localhost:3001/products/searches/" + search)
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
    return axios.get("http://localhost:3001/products")      
      .then(result => result.data)
      .then(products => {
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: products });
      });
  };
}

export function addCategory(body){
  return function(dispatch){
    return axios.post("http://localhost:3001/categories/add/", body)
    .then(() => {
      dispatch({
        type: ADD_CATEGORY,
        payload: body
      });
    })

  }
}

export function deleteCategory(name){
  return function(dispatch){
    return axios.delete(`http://localhost:3001/categories/${name}`)           
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: DELETE_CATEGORY,
        payload: data,
        name: name
      });
    })

  }
}

export function modifyCategory(){
  return function(dispatch){
    return axios.post("http://localhost:3001/categories/add/")
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: MODIFY_CATEGORY,
        payload: data

      });
    })

  }
}



export function updateProduct (id, body) {
  return function(dispatch) {
    return axios.post(`http://localhost:3001/products/${id}`, body)
      .then(() => {
        dispatch({
          type: UPDATE_PRODUCT
        })
      })
  }
}
 
export function deleteProduct (id) {
  return function(dispatch) {
    return axios.delete(`http://localhost:3001/products/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_PRODUCT
        })
      })            
  }
 }

export function deleteCatxProd (name, id) {
  return function(dispatch) {
    return axios.delete(`http://localhost:3001/products/cxp/${id}/${name}`)
      .then(() => {
        dispatch({
          type: DELETECATXPROD
        })
      })
  }
}

export function getCategoriesxProducts ()  {
  return function(dispatch) {
    return axios.get("http://localhost:3001/products/cxp") 
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
    return axios.get("http://localhost:3001/categories/")
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



export function updateCategory(id, body) {
  return function(dispatch) {
    return axios.put(`http://localhost:3001/categories/${id}`, body)
      .then(result => result.data)
      .then(data => {
        dispatch({
          type: UPDATE_CATEGORY,
          payload: { id, body }
        })
      })
  }
}


