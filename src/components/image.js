import "../styles/image.css"

export default Image;

function Image(){
    return(
           
        <div className="image-container" >
            <div className="image-content" >
                <span className="image-text" >
                  <span><p>Fresh Fruits </p></span>
                  <span>Orange</span>
                  <span>Lemon</span>
                  <span>$14.00/package</span>
                  <button className="image-shopnow" >Shop Now</button>
                 </span>
                   <img className="image-big" src="https://ogami-react.vercel.app/assets/images/hero-slider/one/1.png"  />
            </div>
            <div className="image-vegtables" >
            <img src="https://ogami-react.vercel.app/assets/images/hero-slider/two/1.png"/>
            <img src="https://ogami-react.vercel.app/assets/images/hero-slider/two/2.png"/>
            <img src="https://ogami-react.vercel.app/assets/images/hero-slider/two/3.png"/>
            </div>

            <div>
            <h1>Featured products</h1>
            </div>
            <div className="image-line" >
            </div>
            <div className="images-list" >
                <span>All</span>
                <span>Bread</span>
                <span>Fast Food</span>
                <span>Ocean Food</span>
                <span>Oranges</span>
            </div>
            <div className="imagefullline">

            </div>
           
        </div>
        
     


    )
}