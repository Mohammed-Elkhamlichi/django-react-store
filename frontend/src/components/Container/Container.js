import React from "react";
import Product from "./product/Product";
import "./Container.css";
import dellLogo from "../../images/dell.jpg";
import Iphone13Pro from "../../images/iphone-13.jpg";
import MacBookPro from "../../images/MacBook-Pro.jpg";

const Container = () => {
    return (
        <div className='container'>
            <div className='products'>
                <Product
                    img={dellLogo}
                    title='Iphone 13 Pro Max 2021'
                    description='iphone 13 pro max is the best smart phones exist now'
                    price='1999$'
                />
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
    );
};

export default Container;
