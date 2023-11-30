import "../styles/navbar.css"
import {BiSearch} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {BsFillBagCheckFill} from "react-icons/bs"
import {Link} from "react-router-dom"

function Navbar (props){

    return(
         <div className="navbar-container" >

        <div className="navbar-ogamilogo" >
        <img className="navbar-imglogo"  src="https://ogami-react.vercel.app/assets/images/logo.png"/>
        </div>

        <div className="navbar-categorieslist" >
         <span>
         <select className="navbar-select" >
            <option>All Categories</option>
            <option>Bread</option>
            <option>Fresh Meat</option>
            <option>Fast Food</option>
            <option>Ocean Food</option>
            <option>Oranges</option>
            <option>Orgranic Drinks</option>
            <option>Vegtables</option>
          </select>
         </span>

         <span className="">
            <input className="navbar-input" placeholder="What do yo need ?" type="text"></input>
         </span>
         <span>
         <BiSearch className="navbar-search" />
         </span>
        </div>
        <div className="navbar-homeshopblog" >
            <span>Home</span>
            <span>Shop</span>
            <span>Blog</span>
        </div>
        <div className="navbar-pageaboutus" >
            <span>Pages</span>
            <span>About Us</span>
        </div>
        <div className="navbar-heartbagicons" >
            <span><AiOutlineHeart/></span>
              <Link to={"/cart" } >
            <span><BsFillBagCheckFill/></span>
            </Link>
        </div>
        <div>
            <h4>${props?.cart?.totalPrice?.toFixed(2)}</h4></div>
         </div>
    )
}
export default Navbar;


