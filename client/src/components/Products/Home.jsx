import React from "react"
import Products from "./Products"

export default function Home() {

    function funcionTraeDatos() {
        fetch("http://localhost:3001/products/")
        .then(r => r.json())
        .then((recurso) => {
            console.log("ENTRAA", recurso)
            return recurso
        })
    }

    var products = funcionTraeDatos()



    console.log("PRODUCTSSS", products)

    return (
        <div>
            <Products products={products}/>
        </div>
    )

}
