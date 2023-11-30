import logo from './logo.svg';
import './App.css';
import Banner from './components/banner.js'
import Navbar  from './components/navbar.js'
import Image from './components/image.js'
import Features from './components/features.js'
import { useEffect, useReducer, useState } from 'react';
import Bestsellers from './components/bestsellers.js'
import Newproduct from './components/newproduct.js';
import Sale from './components/sale.js'
import Footer from './components/footer.js'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Signin  from './components/signin';
import Signup from './components/signup';
import ProductDetails from './components/productDetails.js';
import  Cartpage  from './components/cartpage.js';
const url="https://ogami-api.vercel.app/api/product";
function App() {
  const [products,setProducts]=useState([])
 
  const [wishlist,setWishlist]=useState([])
  const [count,setcount]=useState({
    products:[],
    totalPrice:0
    
  })
  useEffect(()=>{
    fetchProducts();
  },[])
const router =createBrowserRouter([
  {
  path:"/",
  element:(
    <div>
     <Banner />
     <Navbar cart={count} />
     <Image/>
     <Features  data={products} cart={count} setcount={setcount} wishlist={wishlist} setWishlist={setWishlist}  />
     <Bestsellers  data={products}/>
     <Newproduct data={products}/>
     <Sale/>
     <Footer/>
    </div>
  )
  },
  {
    path : "/signin",
    element : <Signin/>
  },
  {
    path : "/signup",
    element : <Signup/> 
  },
  {
    path: "/:productId",
    element:<ProductDetails/>
  },
  {
    path: "/cart",
    element:<Cartpage cart={count} setcount={setcount}/>
  }
])
  const fetchProducts=async()=>{
    try{
      const res=await fetch(url);
      const data=await res.json();
      setProducts(data);
      console.log(data)

    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div>
    
     {/* <Features  data={products} cart={count} setcount={setcount}  /> */}
     <RouterProvider router={router}/>
    </div>
  );
}
export default App;

