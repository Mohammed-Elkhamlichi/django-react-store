import React from "react";
import Products from "../../data/Products";
import "./ProductDetail.css";

const ProductDetail = (props) => {
    const pagePathName = window.location.pathname.split("/");
    let data = "";
    pagePathName.map((part) => {
        for (let x = 0; x < Products.length; x++) {
            const { id, img, title, description, price } = Products[x];
            if (id.toString() === part) {
                data = {
                    id: id,
                    img: img,
                    title: title,
                    description: description,
                    price: price,
                };
            }
        }
    });
    const { id, img, title, description, price } = data;
    return (
        <div className='product_detail'>
            <img className='product_detail_img' src={img} alt='iphone 13 pro max' />
            <span className='product_detail_title'>{title}</span>
            <div className='product_detail_price'>{price}</div>
            <div type='button' className='by_now_button'>
                Add To Card
            </div>
            <div>
                <article dir='ltr' className='product_detail_description'>{description}</article>
            </div>
        </div>
    );
};
export default ProductDetail;
