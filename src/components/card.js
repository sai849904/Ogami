import React from "react";
import "../styles/card.css"
import { Link } from "react-router-dom";
export default function Card(props){
    return (
        <div className="productcard-container" >
            <Link to={"/"+props.product.slug}>
            <div className="productcontainer" >
             <img className="productcardimg"  src={"https://ogami-react.vercel.app/"+props.product.coverImage}/>
                <p className="productcard-category" >{props.product.category}</p>
                <p className="productcardname">{props.product.name}</p>
                <p className="productprice">${props.product.price.toFixed(2)}</p>
            </div>
            </Link>
            {props.children}
         </div>
 )
}