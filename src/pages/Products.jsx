import { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import ProductsContext from "../components/ProductsContext";

export default function Products(){

    

    //Use contexts
    const {
        productsData, setProductsData, searchParams, setSearchParams
    } = useContext(ProductsContext)

    //States
    const [filteredData, setFilteredData] = useState([])

    //  useEffects

    

    useEffect(()=>{

        if(productsData){
            const search = searchParams.get("search");
            const category = searchParams.get("category");

            if (search || category){
                setFilteredData(prevState=> productsData.filter(
                    (prod)=>prod.title.startsWith(search) && (!category || prod.category === category)
                ) )
            }else{
                setFilteredData(productsData)
            }
        }else{
            setFilteredData(productsData)
        }

        
        
    },[searchParams, productsData]) //Added productsData because the result takes a few seconds to return api call


    // useEffect(()=>{
    //     setFilteredData(productsData)
    // }, [productsData])

    //Renders
    const productsRender = filteredData.map((product)=>{
        return (
            <div className="product" key={product.id}>
                <p className="prod-title">{product.title}</p>
                <p className="prod-category">{product.category}</p>
                <p className="prod-price">{product.price}</p>
            </div>
            
        )
    })

    // {id, title, price, description, category, image, rating}

   


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