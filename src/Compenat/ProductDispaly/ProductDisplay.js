import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_dull_icon from '../Assets/star_dull_icon.png'
import start_icone from '../Assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export default function ProductDisplay(props) {
    const {product}=props
    const{all_product,addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay_left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" srcset="" />
                <img src={product.image} alt="" srcset="" />
                <img src={product.image} alt="" srcset="" />
                <img src={product.image} alt="" srcset="" />
                <p>(122)</p>

            </div>
            <div className="productdisplay-img">
                <img src={product.image} className='productdisplay-main-img' alt="" srcset="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className='productdispay-righ-star'>
                <img src={start_icone} alt="" />
                <img src={start_icone} alt="" />
                <img src={start_icone} alt="" />
                <img src={start_icone} alt="" />
                <img src={start_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplat-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
                    <div className="productdisplay-right-description">
                        The "Same Hoodie" is a comfortable and versatile piece of clothing designed for casual and everyday wear.
                         Crafted from soft, high-quality fabric, this hoodie offers a cozy fit and provides warmth during cooler seasons. 
                         

                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
 



                   <p className='product-right-category'>
                    <span>Category :</span> Women , T-Shirt , crop-Top
                   </p>
                   <p className='product-right-category'>
                    <span>tags: :</span> Moder ,Latest
                   </p>
        
        </div>
      
    </div>
  )
}
