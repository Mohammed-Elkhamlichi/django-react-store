import React from "react";
import "./Product.css";

const Product = (props) => {
    const { img, title, price } = props.product;
    return (
        <div className='product'>
            <img className='product_img' src={img} alt='iphone 13 pro max' />
            <span className='product_title'>{title}</span>
            <div className='product_price'>{price}</div>
            <div className='by_now_button'>By Now </div>
        </div>
    );
};

export default Product;
