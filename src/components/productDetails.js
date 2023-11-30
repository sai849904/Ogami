import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ogamiBaseUrl, ogamiReactBaseUrl } from "../utils/api";
import axios from 'axios';
import {BiLogoFacebook}  from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"
import {TiTick} from "react-icons/ti"
import {BsStarFill} from "react-icons/bs"
import "../styles/productDetails.css";
import Navbar from "../components/navbar"
import Banner from "../components/banner"


export default function ProductDetails(){
   const params=useParams()
   console.log(params);  
   const [pDetails,SetPDetails]=useState();
   const [img,setImg]=useState(null)
   const [tab,setTab]=useState(0)
   const fetchData =async()=>{
   const{data}=await axios.get(ogamiBaseUrl+"/api/product?&slug="+params.productId)
   console.log(data)
    SetPDetails(data[0]);
   }
   useEffect(()=>{
    fetchData()
   },[])
    return(

        <div>
            <Banner />
            <Navbar/>
    <div className="productDetails-container" >
           {/* <div><h2>ProductDetails</h2></div> */}

         <div className="pd-images" >
                  {pDetails?.images?.map((e, index)=>{
                       return(
                        <div  className="pd-imageItem" key={index} onClick={()=>setImg(e)} >
                           <img className="pd-image" src={ogamiReactBaseUrl + e}/>
                       </div>
                       );
                  })}
         </div>

            <div className="productimg" >
            <img  className="bigimgpd" src={img ? ogamiReactBaseUrl + img :ogamiReactBaseUrl +pDetails?.coverImage}/>
            </div>


       <div className="productcontent" >
            <span className="categorycolor" >{pDetails?.category}</span>
            <span className="namecolor" ><p>{pDetails?.name}</p></span>
            <span>
            <span className="paracontent" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
            </span>
            <span className="borderline"></span>
            </span>
            <span className="sku" >
                <p className="skupara"> 
                     <span>SKU: A1359</span>  
                     <span>Categories: Fastfood</span>
                     <span>Tag: Food, Organic</span>
                </p>
            </span>

            <span className="sharelineicons" >
                <p className="shareicons" >  Share link:Free 
                <BiLogoFacebook/>
                <AiOutlineTwitter/> 
                <AiFillLinkedin/>
                <BsPinterest/>
                </p>
            </span>

        </div>

         <div className="lastline-container" >
            <div>
                <button className="freedeliverybtn" >Free Delivery</button>
            </div>

            <div>
               <p className={`pd-price ${pDetails?.discount ?"pd-gray-price":"pd-green-price"}`}>
                ${pDetails?.price}</p>
                {pDetails?.discount&&(
                    <p className="pd-discountPrice pd-green-price" > ${pDetails?.price-pDetails?.discount}</p>
                )}
            </div>

            <div className="price" >
                 {/* $6.99 */}
            </div>
              
             <div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
             </div>
   
            <div>
                <button className="addtocartbtn" > ADD TO CART</button>
            </div>
              
            <div>
               <button className="addtocartbtn" >ADD TO COMPARE</button>    
            </div>  

            <div className="qualitycheck" >
                <span><TiTick/>Satisfaction 100% Guaranteed</span>
                <span><TiTick/>  Free shipping on orders over $99</span>
                <span><TiTick/> 14 day easy Return</span>
            </div>
         </div>
         </div>


           <div>
               <div className="descripitionbar" >
                <button className="buttonsdesp"  onClick={()=>setTab(0)}>Descripition</button>
                <button className="buttonsdesp" onClick={()=>setTab(1)}>Sepcs</button>
                <button className="buttonsdesp" onClick={()=>setTab(2)}>Reviews</button>
               </div>
           </div> 

           <div className="downbar" >
            {tab==0 && <div><p className="paradesp" >{pDetails?.fullDescription}</p></div>}
            
            {tab==1 &&
             <table className="tabledata" >
                  <tr>
                    <td className="tdd">Weight</td>
                    <td>{pDetails?.specifications.weight}</td>
                  </tr>

                  <tr>
                    <td className="tdd">DIMENSIONS</td>
                    <td>{pDetails?.specifications?.dimensions.long}x
                       {pDetails?.specifications?.dimensions.width}x
                       {pDetails?.specifications?.dimensions.height}
                    </td>
                  </tr>

                  <tr>
                    <td className="tdd">COLOR</td>
                    <td>{pDetails?.specifications.color}</td>
                  </tr>

                  <tr>
                    <td className="tdd">Size</td>
                    <td>{pDetails?.specifications.size}</td>
                  </tr>
            </table>}
            {tab==2 && 
            <div>
                <div className="reviewmaindiv" >
                {pDetails?.reviews?.map((e,i)=>{
                  return(
                      <div className="reviewcontainer">
                      <div className="reviewsubdiv">
                      <span><img className="personimg" src={e?.user?.avatar} /></span>
                      <span>
                        <BsStarFill className="fivestar"/>
                        <BsStarFill className="fivestar"/>
                        <BsStarFill className="fivestar"/>
                        <BsStarFill className="fivestar"/>
                        <BsStarFill className="fivestar"/>
                      </span>
                      </div>

                      <div className="reviewdetails" >
                      <span >{e?.commentDate}</span>
                       <span>{e?.user?.name}</span>
                       <p className="reviewcomment" >{e?.review}</p>
                   </div>
                        </div>
                  )
                })}
                 </div>
            </div>}
           </div>
    </div>
    )
   }
