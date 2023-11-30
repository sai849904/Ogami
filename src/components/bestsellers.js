
import Card from './card'
import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import "../styles/card.css"
import "../styles/bestsellers.css"


const Bestsellers=(props)=>{
    return (
        <div>

        <div className="shipping-container">
            <div className="help-conntainer">
                <span className="shipping">
                    <img src="https://ogami-react.vercel.app/assets/images/other/benefits/1.png"/>
                    <span>FREE SHIPPING</span>
                    <span>For all order over 99$</span>
                </span>
                <span className="shipping">
                    <img src="https://ogami-react.vercel.app/assets/images/other/benefits/2.png"/>
                    <span>DELIVERY ON TIME</span>
                    <span>If good have problems</span>
                </span>
                <span className="shipping">
                    <img src="https://ogami-react.vercel.app/assets/images/other/benefits/3.png"/>
                    <span>SECURE PAYMENT</span>
                    <span>100% seure payment</span>
                </span>
                <span className="shipping">
                    <img className="support-img" src="https://ogami-react.vercel.app/assets/images/other/benefits/4.png"/>
                    <span>24/7 SUPPORT</span>
                    <span>Dedicated support</span>
                </span>
            </div>
            <div className="deal-of-the-week">
              <div className="deal-text">
                <span className="dealoftheweek">Deal Of The Week</span>
                <span className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elitt incididunt ut labore</span>
                <span className="time-display">
                  <span>DAYS</span>
                  <span>HR</span>
                  <span>MIN</span>
                  <span>SEC</span>
                </span>
                <button className="time-button">SHOP NOW</button>
              </div>
              <div className="lemon-img">
                <img src="https://ogami-react.vercel.app/assets/images/sections/dale-of-week/two/1.png"/>
              </div>
            </div>
      </div>


             <div className="bestsellers-list" >
             <span>Best sellers</span>
             <span>All</span>
             <span>Bread</span>
             <span>Fast Food</span>
             <span>Fresh Food</span>
             <span>Ocean Food</span>
             <span>Oranges</span>
             </div>

             <div className="imagefullline" ></div>

        <div className="features-head" >
              {props?.data?.slice(0,6).map((e,index)=>{
                return (
                    <Card key={index}product={e}>
                        <div className="featureicons" >
                            <AiOutlineHeart   className="ricon"/>
                            <BsBag   className="ricon"/>
                            <BiShuffle   className="ricon"/>
                            <AiOutlineEye   className="ricon"/>
                        </div>
                    </Card>
                );
            })}

        </div>
        <div className="fp-list" >
             <span>Featured Products</span>
             <span>All</span>
             <span>Bread</span>
             <span>Fast Food</span>
             <span>Fresh Food</span>
             <span>Ocean Food</span>
             <span>Oranges</span>
             </div>
             
             <div className="features-head" >
              {props?.data?.slice(0,6).map((e,index)=>{
                return (
                    <Card key={index}product={e}>
                        <div className="featureicons" >
                            <AiOutlineHeart   className="ricon"/>
                            <BsBag   className="ricon"/>
                            <BiShuffle   className="ricon"/>
                            <AiOutlineEye   className="ricon"/>
                        </div>
                    </Card>
                );
            })}
            </div>
</div>
 );
};
export default Bestsellers;