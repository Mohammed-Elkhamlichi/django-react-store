import React from "react";
import "./Product.css";

const Product = (props) => {
    return (
        <div className='product'>
            <img
                className='product_img'
                src={props.img}
                alt='iphone 13 pro max'
            />
            <span className='product_title'>{props.title}</span>
            <div className='product_price'>{props.price}</div>
            <div className='by_now_button'>By Now </div>
        </div>
    );
};

export default Product;
