import { useContext, useEffect, useState } from "react"
import ProductsContext from "./ProductsContext"
import {nanoid} from 'nanoid'
import { useSearchParams } from "react-router-dom"

export default function Sidebar(){
    
    //Use contexts
    const {
        categoryData, setCategoryData, searchParams, setSearchParams
    } = useContext(ProductsContext)

    

    //Renders
    const categoryRender = categoryData.map((category)=>{
        return  <option key={nanoid()} value={category}>{category}</option>
    })

    //States
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    
    //Functions
    function handleSearchChange(e){
        setSearch(e.target.value)
        
    }

    //useEffects
    useEffect(()=>{
        setSearchParams({
            search: search,
            category: category
        })
    }, [search, category])


    return (
        <section className="sidebar-section">
            <h2>Filter Products</h2>

            <label>
                Search:
                <input value={search} onChange={handleSearchChange}></input>
            </label>

            <br/>
            <br/>
                        
            <label>
                Category              :
                <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
                    {categoryRender}
                </select>
            </label>
            
            
        </section>
    )

}