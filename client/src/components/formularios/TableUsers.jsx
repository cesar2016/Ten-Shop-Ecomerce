import React, { useState, useRef, useEffect } from 'react';
import { connect } from "react-redux";

export default function TableUsers ({users,update,elId}) {
  var users = [
    {
        "id": 1,
        "firstname": "facu",
        "surname": "uriona",
        "address": "cordoba",
        "password": "1234",
        "type": "1",
        "username": "facuuriona",
        "createdAt": "2020-08-23T18:49:51.220Z",
        "updatedAt": "2020-08-23T18:49:51.220Z",
        "orderId": null
    },
    {
        "id": 3,
        "firstname": "rodrigo",
        "surname": "pinea",
        "address": "mendoza",
        "password": "1234",
        "type": "1",
        "username": "rodrigopinea",
        "createdAt": "2020-08-23T18:49:51.221Z",
        "updatedAt": "2020-08-23T18:49:51.221Z",
        "orderId": null
    },
    {
        "id": 4,
        "firstname": "matias",
        "surname": "cordoba",
        "address": "las sierras",
        "password": "1234",
        "type": "1",
        "username": "matiascordoba",
        "createdAt": "2020-08-23T18:49:51.222Z",
        "updatedAt": "2020-08-23T18:49:51.222Z",
        "orderId": null
    },
    {
        "id": 6,
        "firstname": "lionel",
        "surname": "messi",
        "address": "barcelona",
        "password": "1234",
        "type": "2",
        "username": "lionelmessi",
        "createdAt": "2020-08-23T18:49:51.223Z",
        "updatedAt": "2020-08-23T18:49:52.362Z",
        "orderId": 1
    },
    {
        "id": 5,
        "firstname": "guillermo",
        "surname": "ambroggio",
        "address": "chaco",
        "password": "1234",
        "type": "1",
        "username": "guillermoambroggio",
        "createdAt": "2020-08-23T18:49:51.222Z",
        "updatedAt": "2020-08-23T18:49:52.364Z",
        "orderId": 2
    },
    {
        "id": 2,
        "firstname": "cesar",
        "surname": "sanchez",
        "address": "rosario",
        "password": "1234",
        "type": "1",
        "username": "cesarsanchez",
        "createdAt": "2020-08-23T18:49:51.221Z",
        "updatedAt": "2020-08-23T18:49:51.221Z",
        "orderId": null
    }
]

  return (
            users.map((p) => {            
              return (
                 <tr>
                  <th scope="row"> {p.type} </th> 
                  <td > {p.username} </td>
                  <td > {p.firstname} </td>
                  <td > {p.surname} </td>
                    <td>
                      <button type="button" class="btn btn-success" onClick={()   => { update(p.id, users); elId.current = p.id            
                      }}>
                    <i className="fa fa-pencil"></i>
                      </button>
                    &nbsp;
                    {/* onClick={ (e) => deleteProduct(p.id)} */}
                    <button type="button" class="btn btn-danger"  >
                      <i className="fa fa-trash"></i>
                    </button>
                   </td>
                  </tr>
                  )
                }
          )        )
          }
// const mapDispatchToProps = dispatch => {
//   return {

//   }
// }

// const mapStateToProps = state => {
//   return {    
//   }
// }



// export default connect(mapStateToProps, mapDispatchToProps)(TableProducts)
  