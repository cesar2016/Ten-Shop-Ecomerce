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
export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER";
export const ADD_CART = "ADD_CART";
export const GET_ALL_CART = "GET_ALL_CART";
export const USER_LOGOUT = "USER_LOGOUT";
export const ONLINE_USER_ERROR = "ONLINE_USER_ERROR";


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

export function addCategory(category){
  return function(dispatch){
    return axios.post("http://localhost:3001/categories/add/", category)
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
    return axios.put(`http://localhost:3001/categories/modify/${name}`, body)
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
export function addUser (body) {
  return function(dispatch) {
    return axios.post("http://localhost:3001/users/adduser", body)
      .then(result => result.data)
      .then(data => {
        dispatch({
          type: ADD_USER,
          payload: data
        })
      })
  }
}

export function loginUser(body){
  return function(dispatch){
    console.log(body)
    return axios.post("http://localhost:3001/users/login",body)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: LOGIN_USER,
        payload: data
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
      return axios.post(`http://localhost:3001/users/${idUser}/cart/`, body)
        .then(() => {
          dispatch({
            type: ADD_CART,
            payload: body
          })         
        })       
    }
  }

    //TRAYENDO PRODUCTOS DEL CARRITO DE UN USUARIO
    export function getAllCart (idUser) {
      return function(dispatch) {
        return axios.get(`http://localhost:3001/users/${idUser}/cart`)      
          .then(result => result.data)
          .then(productsCart => {
            dispatch({
                type: GET_ALL_CART,
                payload: productsCart });
          });
      };
    }

export function userLogout () {
      return {
        type: USER_LOGOUT
      }
};


export function onlineUserError () {
  return {
    type: ONLINE_USER_ERROR
  }
}
