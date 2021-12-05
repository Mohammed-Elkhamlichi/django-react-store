import React from "react";
import Product from "./product/Product";
import "./Container.css";
import dellLogo from "../../images/dell.jpg";
import Iphone13Pro from "../../images/iphone-13.jpg";
import MacBookPro from "../../images/MacBook-Pro.jpg";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Container = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <div className='products'>
                    <Routes>
                        <Route
                            path='/' exact
                            element={
                                <Product
                                    img={dellLogo}
                                    title='Iphone 13 Pro Max 2021'
                                    description='iphone 13 pro max is the best smart phones exist now'
                                    price='1999$'
                                />
                            }
                        ></Route>
                    </Routes>
                    <Product
                        img={MacBookPro}
                        title='Iphone 13 Pro Max 2021'
                        description='iphone 13 pro max is the best smart phones exist now'
                        price='1999$'
                    />
                    <Product
                        img={Iphone13Pro}
                        title='Iphone 13 Pro Max 2021'
                        description='iphone 13 pro max is the best smart phones exist now'
                        price='1999$'
                    />
                    <Product
                        img={Iphone13Pro}
                        title='Iphone 13 Pro Max 2021'
                        description='iphone 13 pro max is the best smart phones exist now'
                        price='1999$'
                    />
                    <Product
                        img={Iphone13Pro}
                        title='Iphone 13 Pro Max 2021'
                        description='iphone 13 pro max is the best smart phones exist now'
                        price='1999$'
                    />
                    <Product
                        img={Iphone13Pro}
                        title='Iphone 13 Pro Max 2021'
                        description='iphone 13 pro max is the best smart phones exist now'
                        price='1999$'
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Container;
