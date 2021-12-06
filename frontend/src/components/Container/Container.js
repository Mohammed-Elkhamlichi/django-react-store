import React from "react";
import Product from "./product/Product";
import "./Container.css";
import Products from "../data/products";

const Container = () => {
    return (
        <div className='container'>
            <div className='products'>
                {Products.map((product) => {
                    return (
                        <div className='product'>
                            <Product product={product} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Container;
