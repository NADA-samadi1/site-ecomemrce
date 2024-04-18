import React, { useContext } from 'react';
import './Cartitem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export default function CartItem() {
    const { all_product, cartItems, RemovToCart,getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className="cartitem">
            <div className="cartitem-format-main">
                <p>products</p>
                <p>title</p>
                <p>price</p>
                <p>Quantite</p>
                <p>total</p>
                <p>remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitem_format cartitem-format-main">
                                <img src={e.image} alt="" className="cartion_product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitem-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='cart-remove-item'
                                    src={remove_icon}
                                    onClick={() => {
                                        RemovToCart(e.id);
                                    }}
                                    alt=""
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitem-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                <div className="cartitem-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>


</div>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, Entrer it her</p>
                    <div className="cartitems-promobox">
                       <input type="text"  placeholder='promo code'/> 
                       <button>Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
