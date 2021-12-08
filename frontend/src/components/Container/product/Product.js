import React from "react";
import "./Product.css";
import BuyButton from "../../../images/shopping-cart.png";

const Product = (props) => {
    const { img, title, price } = props.product;
    return (
        <div className='product'>
            <img className='product_img' src={img} alt='iphone 13 pro max' />
            <span className='product_title'>{title}</span>
            <div className='product_price'>{price}</div>
            <div type='button' className='by_now_button'>
                <img
                    className='buy_button_img'
                    src={BuyButton}
                    alt=''
                    width='32px'
                    height='32px'
                />{" "}
                By Now
            </div>
        </div>
    );
};

export default Product;
