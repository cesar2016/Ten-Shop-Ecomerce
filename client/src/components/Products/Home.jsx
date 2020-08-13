import Products from "./Products"

export default function Home({products}) {
    function funcionTraeDatos() {
        fetch("http://localhost:3001/product/")
        .then(r => r.json())
        .then((recurso) => {
            return recurso;
        })
    }

    return (
        <div>
            <Products products={products}/>
        </div>
    )

}
