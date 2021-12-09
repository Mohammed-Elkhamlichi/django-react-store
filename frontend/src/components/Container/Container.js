import React from "react";
import { Link } from "react-router-dom";
import Product from "./product/Product";
import Products from "../data/Products";
import "./Container.css";

const Container = () => {
    return (
        <div className='container'>
            <div className='products'>
                {Products.map((product) => {
                    return (
                        <Link
                        key={product.id}
                            style={{ textDecoration: "none" }}
                            to={"product/" + product.id + "/detail"}
                        >
                            <Product product={product} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
export default Container;
