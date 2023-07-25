import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Products from './pages/Products'
import ProductsContext from './components/ProductsContext'
import { Routes, Route, useSearchParams } from 'react-router-dom'

function App() {

  const [productsData, setProductsData] = useState([])
  const [categoryData, setCategoryData] = useState([])

  //Effects
  useEffect(()=>{
    const ApiCall = async ()=>{
      const res = await fetch('https://fakestoreapi.com/products') //Returns 20 products
      const res_json = await res.json()
      setProductsData(res_json)
      
    }

    ApiCall()

  }, [])

  useEffect(()=>{
    const ApiCall = async ()=>{
      const res = await fetch('https://fakestoreapi.com/products/categories') //Returns 4 categories
      const res_json = await res.json()
      setCategoryData(res_json)
    }

    ApiCall()

  }, [])


  //useSearchParams
  const [searchParams, setSearchParams] = useSearchParams()

  
  return (
    <>
      <ProductsContext.Provider 
        value={{productsData, setProductsData, categoryData, setCategoryData, searchParams, setSearchParams}}
      >

        <Routes>

          <Route path='/' element={<Products/>}> </Route>
        {/* <Products /> */}

        </Routes>


      </ProductsContext.Provider>

      

    </>
  )
}

export default App
