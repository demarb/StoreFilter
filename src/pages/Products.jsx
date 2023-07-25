import { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import ProductsContext from "../components/ProductsContext";

export default function Products(){


    //Use contexts
    const {
        productsData, setProductsData, searchParams, setSearchParams
    } = useContext(ProductsContext)

    //Renders
    const productsRender = productsData.map((product)=>{
        return (
            <div className="product" key={product.id}>
                <p className="prod-title">{product.title}</p>
                <p className="prod-category">{product.category}</p>
                <p className="prod-price">{product.price}</p>
            </div>
        )
    })

    // {id, title, price, description, category, image, rating}

    //useEffects
    // useEffect(()=>{
    //     const {search} = searchParams;

    //     if (search){}
    // },[searchParams])


    return (
        <>
            <Nav />
            <section className="products-section">
                <Sidebar />
                <div className="prod-results">
                    {
                    [
                        [
                            <div className="product" key={999}>
                                <h3 className="prod-title">Title</h3>
                                <h3 className="prod-category">Category</h3>
                                <h3 className="prod-price">Price</h3>    
                            </div>
                            
                        ] 
                        ,...productsRender
                    ]
                    }
                </div>
            </section>
        </>
        
        
    )

}