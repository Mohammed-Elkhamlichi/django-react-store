import React from "react";
import Product from "./product/Product";
import "./Container.css";
import Products from "../data/Products";
import { Link } from "react-router-dom";

const Container = () => {
    return (
        <div className='container'>
            <div className='products'>
                {Products.map((product) => {
                    return (
                        <Link style={{ textDecoration: "none" }} to='/product/detail'>
                            <Product product={product} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Container;
