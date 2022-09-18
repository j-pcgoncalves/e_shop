import React from "react";
import './checkoutProduct.styles.css';

const CheckoutProduct = () => {
    return (
        <div className="ckecoutProduct">
            <img src='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg' alt='Product' className="checkoutProduct__image" />

            <div className="product__info">
                <p className="checkoutProduct__title">Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>20</strong>
                </p>
                <div className="checkoutProduct__rating">
                    ⭐⭐
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;