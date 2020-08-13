import React from "react"
import Products from "./Products"

export default function Home() {

     
    var products = fetch("http://localhost:3001/products/")
        .then(r => r.json())
        .then((recurso) => {
            console.log("ENTRAA", recurso)
            return recurso;
        })
     

    
            // alert(products.then())

    return (
        <div>
            <Products products={products}/>
        </div>
    )

}
