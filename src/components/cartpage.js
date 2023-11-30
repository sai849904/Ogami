import Navbar from "../components/navbar.js"
import Banner from "../components/banner.js"
import "../styles/cartpage.css"
import { ogamiReactBaseUrl } from "../utils/api.js"
import { Addtocart, deletecart, deleteproduct, removeFromCart } from "../utils/cart.js"
import { useState } from "react"


export default function Cartpage(props){
  const [tab,setTab]=useState(0)
    return(
    <div>  
            <Banner/>
            <Navbar/>
                
            <div className="cartpage-container" >   
            <div  class="arrow" onClick={()=>setTab(0)}   >shipping cart  <p className="para" >01</p></div>
            <div  class="arrow" onClick={()=>setTab(1)}   > checkout <p  className="para" >02</p> </div>
            <div  class="arrow" onClick={()=>setTab(2)}   > order completed <p  className="para" >03</p></div>
            </div>  

             <div>
              {tab==0 && <>        
               <div className="specification-cart" >
                <span className="textfont"  >IMAGE</span>
                <span className="textfont"  >PRODUCT NAME</span>
                <span className="textfont"  >PRICE</span>
                <span className="textfont"  >QUANTITY</span>
                <span className="textfont"  >TOTAL PRICE</span>
                <button className="wrongbtn" onClick={()=>props.setcount(deletecart())}  >x</button>
               </div>
               

               <div className="pd-division" >
                {props?.cart?.products?.map((e,index)=>{
                  let price=e.price;
                  if(e.discount) price-=e.discount;
                      return(
                        <div className="pd-subdivision" key={index} >
                        <span><img className="pd-img"  src={ogamiReactBaseUrl+e?.images[0]}/></span>
                        <span  className="vegetablesname">{e?.name}</span>
                        <span className="price-pd"    >${e?.price}</span>

                        <span className="cart-pd"    >{e?.productQty}
                             <div className="minsplusbtn" >
                                <button className="plusbtn-pd" onClick={()=>props.setcount(Addtocart(props.cart,e))}  >+</button>
                                <button className="minusbtn-pd" onClick={()=>props.setcount(removeFromCart(props.cart,e))}  >-</button>
                             </div>
                        </span>

                        <span className="totalprice-pd"    >{(e?.productQty*price).toFixed(2)}</span>
                        <button className="wrongbtnn-pd"  onClick={()=>props.setcount(deleteproduct(props.cart,e))}  >x</button>
                         </div>
                      )
                      
                })}
              
               </div>
               
               <div className="couponbtns" >
                <span><input  className="applycoupon"  type="text"/></span>
                <span><button>APPLY COUPON</button></span>
                <span><button>UPDATE CART</button></span>
               </div>
               </>  } 
             </div>
              
    </div>
    )
}