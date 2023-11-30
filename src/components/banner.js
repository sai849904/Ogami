
import "../styles/banner.css"
import {BiLogoGmail} from "react-icons/bi"
import {IoIosCall} from "react-icons/io"
import {BiLogoFacebook}  from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"
import {FcBusinessman} from "react-icons/fc"
import { Link } from 'react-router-dom';


function Banner (){
    return (
        <div className="banner-container"  >

            <div className="bannermailbox-container" >        
            <span><BiLogoGmail/> info.deercreative@gmail.com</span>
            <span><IoIosCall/>  +65 11.188.888</span>
            </div>
          
          <div className="banner-socialmediaicons" >
          <span>
             <BiLogoFacebook/>
             <AiOutlineTwitter/> 
             <AiFillLinkedin/>
             <BsPinterest/>
            </span>
          </div>

           <div className="banner-flagimg" >
           <span>
            <select><option>English</option> <option>Japanese</option> <option>Vitenam</option></select>
            </span>
           </div>
            
            <div className="banner-profile" >
            <span>
              <FcBusinessman/>
             <Link to={"/Signup"}>
              <button>login</button>
              </Link>
            </span>
            </div>
         
        </div>

    )
}
export default Banner;