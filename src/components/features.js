import Card from "./card";
import '../styles/features.css'
import {AiOutlineHeart,AiOutlineEye, AiFillHeart} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import { Addtocart } from "../utils/cart";


const Features=(props)=>{
    const handleWishlist =(product)=>{
        const findIndex=props.wishlist.findIndex((e)=>e.id==product.id);
        if (findIndex==-1)
        return[...props.wishlist,product];
        else return props.wishlist.filter(e=>e.id !== product.id);
    };
    return (

        <div className="features-head" >
            {props?.data?.map((e,index)=>{
                const productIndex= props.wishlist.findIndex(
                    (product)=>e.id==product.id
                )
                return (
                    <Card key={index}product={e}>
                        <div className="featureicons" >
                         {/* <AiOutlineHeart   className="ricon" onClick={()=>props.setWishlist()}  /> */}
                         {productIndex == -1 ? <AiOutlineHeart className="ricon" onClick={() => props.setWishlist(handleWishlist(e))} />
                            :<AiFillHeart style={{color:"red"}} className="ricon" onClick={() => props.setWishlist(handleWishlist(e))}/>}
                            <BsBag   className="ricon"  onClick={()=>props.setcount(Addtocart(props.cart,e))} />
                            <BiShuffle   className="ricon"/>
                            <AiOutlineEye   className="ricon"/>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};
 export default Features;