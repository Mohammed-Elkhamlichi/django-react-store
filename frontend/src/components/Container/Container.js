import React from "react";
import Product from "./product/Product";
import "./Container.css";
import Products from "../data/Products";

const Container = () => {
    return (
        <div className='container'>
            <div className='products'>
                {Products.map((product) => {
                    return <Product product={product} />;
                })}
            </div>
        </div>
    );
};


export default Container;
